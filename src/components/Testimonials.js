"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useAnimationFrame } from "framer-motion";

const getAvatarUrl = (name) =>
  `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${encodeURIComponent(
    name
  )}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`;

const testimonials = [
  {
    quote:
      "Their approach is innovative, and the results speak for themselves.",
    name: "Lucas M.",
    role: "Founder",
    avatar: "/avatars/lucas.jpg",
  },
  {
    quote:
      "Elevate AI is a reliable partner that helped us navigate the complex world of AI.",
    name: "Amélie R.",
    role: "CTO",
    avatar: "/avatars/amelie.jpg",
  },
  {
    quote: "Their automation solution was a game‑changer for our business.",
    name: "Olivier T.",
    role: "Operations Lead",
    avatar: "/avatars/olivier.jpg",
  },
  {
    quote: "The team at Elevate AI is top‑notch. They understood our vision…",
    name: "Clément R.",
    role: "Startup Founder",
    avatar: "/avatars/clement.jpg",
  },
  {
    quote: "Their chatbot integration led to a 30% increase in engagement.",
    name: "Léa M.",
    role: "Customer Relations Head",
    avatar: "/avatars/lea.jpg",
  },
  {
    quote:
      "Elevate AI is the future of AI‑driven business solutions. Highly recommended!",
    name: "Samuel P.",
    role: "Tech Lead",
    avatar: "/avatars/samuel.jpg",
  },
  {
    quote: "Exceptional service and support throughout our project lifecycle.",
    name: "Sophie L.",
    role: "Product Manager",
    avatar: "/avatars/sophie.jpg",
  },
  {
    quote: "Transformed our data analysis with their cutting-edge AI models.",
    name: "Antoine B.",
    role: "Data Scientist",
    avatar: "/avatars/antoine.jpg",
  },
  {
    quote: "Elevate Delivered beyond our expectations with their custom AI solution.",
    name: "Élodie V.",
    role: "CEO",
    avatar: "/avatars/elodie.jpg",
  },
  {
    quote: "Responsive, professional, and incredibly knowledgeable team.",
    name: "Nicolas G.",
    role: "CTO",
    avatar: "/avatars/nicolas.jpg",
  },
  {
    quote: "Our productivity increased by 40% after implementing their tools.",
    name: "Camille D.",
    role: "Operations Director",
    avatar: "/avatars/camille.jpg",
  },
  {
    quote: "Their predictive analytics gave us a significant competitive edge.",
    name: "Thomas K.",
    role: "Marketing Director",
    avatar: "/avatars/thomas.jpg",
  },
  {
    quote: "The AI integration was seamless and immediately impactful.",
    name: "Juliette F.",
    role: "Head of Digital",
    avatar: "/avatars/juliette.jpg",
  },
  {
    quote:
      "We've seen a dramatic improvement in our customer satisfaction scores.",
    name: "Pierre H.",
    role: "Customer Success",
    avatar: "/avatars/pierre.jpg",
  },
  {
    quote: "Their team became an extension of our own - truly collaborative.",
    name: "Isabelle C.",
    role: "VP of Engineering",
    avatar: "/avatars/isabelle.jpg",
  },
  {
    quote: "The ROI from their solutions was evident within the first quarter.",
    name: "Mathieu R.",
    role: "CFO",
    avatar: "/avatars/mathieu.jpg",
  },
  {
    quote: "Innovative solutions tailored perfectly to our business needs.",
    name: "Chloé B.",
    role: "Product Owner",
    avatar: "/avatars/chloe.jpg",
  },
  {
    quote: "Their expertise in machine learning is unmatched in the industry.",
    name: "Gabriel M.",
    role: "AI Researcher",
    avatar: "/avatars/gabriel.jpg",
  },
];

const SCROLL_SPEEDS = [50, -50, 50]; // px/second (negative = reverse)

function InfiniteRow({ items, speed = 50 }) {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    x.current -= (speed * delta) / 1000;
    if (x.current < -container.scrollWidth / 2) x.current = 0;
    if (x.current > 0) x.current = -container.scrollWidth / 2;

    container.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] 
                     border-l-4 rounded-lg 
                     p-4 md:p-6 mx-3 shadow-lg 
                     bg-white/10 backdrop-blur-md backdrop-saturate-150 
                     border border-white/20"
          >
            <p className="text-gray-200 text-wrap italic text-sm md:text-base mb-3 md:mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center mt-auto">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-yellow-400">
                <Image
                  src={getAvatarUrl(t.name)}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="ml-3">
                <p className="text-yellow-400 font-semibold text-sm md:text-base">
                  {t.name}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSwiper() {
  const ROWS = 3;
  const CARDS_PER_ROW = 6;
  const rows = Array.from({ length: ROWS }, (_, i) =>
    testimonials.slice(i * CARDS_PER_ROW, (i + 1) * CARDS_PER_ROW)
  );

  return (
    <section className="bg-black py-8 md:py-16 relative overflow-hidden">
      {/* Sidebar */}
      <div
        className="hidden md:flex absolute left-0 z-50 h-full items-center bg-black"
        style={{
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h2 className="text-6xl -rotate-90 font-extrabold text-yellow-400 whitespace-nowrap">
          Testimonials
        </h2>
      </div>

      {/* Mobile title */}
      <h2 className="md:hidden text-3xl font-extrabold text-yellow-400 text-center mb-6 px-4">
        Testimonials
      </h2>

      <div className="space-y-8">
        {rows.map((rowItems, idx) => (
          <InfiniteRow key={idx} items={rowItems} speed={SCROLL_SPEEDS[idx]} />
        ))}
      </div>
    </section>
  );
}
