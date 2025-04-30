"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projectData = [
  {
    title: "Smart Manufacturing Dashboard",
    company: "TechManufacture Inc",
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=3540&auto=format&fit=crop",
    overview:
      "Created an IoT-enabled manufacturing dashboard for real-time monitoring, predictive maintenance, and automated quality control.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "MongoDB"],
    features: [
      "Real-time equipment monitoring",
      "Predictive maintenance alerts",
      "Quality control automation",
      "Performance analytics",
      "Mobile app for floor managers",
    ],
    timeline: "Completed in 8 months",
    achievements: "35% reduction in downtime, 50% faster issue resolution",
  },
  {
    title: "AI Healthcare Assistant",
    company: "MediTech AI",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3540&auto=format&fit=crop",
    overview:
      "Developed an AI-driven healthcare assistant to support patients with intelligent, real-time chat and appointment scheduling.",
    technologies: ["Next.js", "OpenAI", "FastAPI", "Supabase"],
    features: [
      "24/7 patient support chatbot",
      "Smart appointment scheduler",
      "EMR integration",
      "Multi-language support",
    ],
    timeline: "Completed in 5 months",
    achievements: "70% faster appointment booking, 99% query resolution rate",
  },
  {
    title: "E-Commerce Revamp",
    company: "RetailMax",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop",
    overview:
      "Rebuilt an e-commerce platform with AI-powered recommendations, real-time inventory, and seamless checkout.",
    technologies: ["Next.js", "Stripe", "Redis", "AWS", "Node.js"],
    features: [
      "Product recommendations using ML",
      "Live stock tracking",
      "Optimized checkout flow",
      "Admin analytics dashboard",
    ],
    timeline: "Completed in 6 months",
    achievements: "200% increase in sales, 45% improved conversion rate",
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex !== null ? projectData[selectedIndex] : null;

  return (
    <section className="bg-[#0a0a0a] py-20 px-4 text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Explore Our Projects
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
          1280: { slidesPerView: 3 },
        }}
        loop
        className="max-w-7xl mx-auto">
        {projectData.map((card, index) => (
          <SwiperSlide key={index} className="flex rounded-2xl">
            <div
              onClick={() => setSelectedIndex(index)}
              className="bg-white/10 backdrop-blur-lg hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-300 rounded-2xl shadow-lg hover:shadow-yellow-400/30 overflow-hidden text-left flex flex-col h-[560px] w-full cursor-pointer">
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400">{card.company}</p>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                    {card.overview}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    <strong>Timeline:</strong> {card.timeline}
                  </p>
                </div>

                {/* Technologies Chips */}
                <div className="flex gap-2 flex-wrap mt-4 overflow-hidden max-h-[64px]">
                  {card.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                  className="mt-4 cursor-pointer text-yellow-300 font-medium underline underline-offset-4 hover:text-yellow-200 transition">
                  View Details →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selected && (
          <Dialog
            as="div"
            open
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClose={() => setSelectedIndex(null)}>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-black text-white rounded-2xl max-w-4xl w-full overflow-hidden z-50 relative">
              <button
                className="absolute cursor-pointer top-4 right-4 bg-black text-white p-2 rounded-full shadow z-50"
                onClick={() => setSelectedIndex(null)}>
                <X size={20} />
              </button>

              <img
                src={selected.image}
                className="h-60 w-full object-cover"
                alt={selected.title}
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="text-yellow-400">{selected.company}</p>

                <div>
                  <h4 className="font-semibold">Project Overview</h4>
                  <p className="text-sm text-yellow-400">{selected.overview}</p>
                </div>

                <div>
                  <h4 className="font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selected.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm text-yellow-800 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-yellow-400 space-y-1">
                    {selected.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Project Timeline</h4>
                  <p className="text-sm text-yellow-400">{selected.timeline}</p>
                </div>

                <div className="bg-yellow-100 text-yellow-900 rounded-xl p-4 font-semibold">
                  Key Achievements: {selected.achievements}
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
