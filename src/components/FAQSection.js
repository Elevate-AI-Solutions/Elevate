"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes your development process different?",
      answer:
        "We build production-ready solutions from day one. We combine AI tools with expert developers to create systems that work reliably at scale from launch day.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We test thoroughly under real-world conditions. Every project includes automated testing, code reviews, and performance checks to guarantee reliability in production.",
    },
    {
      question: "How quickly can you deliver?",
      answer:
        "Most projects go from idea to production in 3–4 weeks. Our AI-powered workflow helps us move faster without compromising quality.",
    },
    {
      question: "Can your solutions grow with my business?",
      answer:
        "Yes. We design everything to scale from the start. Our solutions grow with your business, and we offer support packages to keep systems running smoothly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Everything you need to know before getting started
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-3 text-left"
                >
                  <h3 className="text-lg font-semibold text-yellow-400">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
