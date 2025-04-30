"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ fullName: "", email: "", company: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function validate() {
    const err = {};
    if (!form.fullName.trim()) err.fullName = "Required";
    if (!form.email.match(/\S+@\S+\.\S+/)) err.email = "Invalid email";
    if (!form.company.trim()) err.company = "Required";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    setErrors({});
    // … your fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClose={onClose}
          static>
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* panel */}
          <motion.div
            as={Dialog.Panel}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ duration: 0.3 }}
            className="relative z-50 bg-black border border-yellow-500/80 rounded-2xl w-full max-w-xl p-8">
            {/* close button */}
            <button
              className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-200"
              onClick={onClose}>
              X
            </button>

            <Dialog.Title className="text-2xl font-bold text-white mb-6">
              Contact Us
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Full name", name: "fullName", type: "text" },
                { label: "Email address", name: "email", type: "email" },
                { label: "Company", name: "company", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-white mb-1.5">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder={field.label}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="relative w-max mx-auto mt-4">
                {/* back layer */}
                <div className="absolute -bottom-1 -right-1 w-full h-full bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg" />

                {/* front button */}
                <button
                  type="submit"
                  className="relative cursor-pointer bg-gradient-to-r from-pink-400 to-orange-300 text-black font-medium px-6 py-2 rounded-lg shadow-md hover:scale-[1.02] transform transition">
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
