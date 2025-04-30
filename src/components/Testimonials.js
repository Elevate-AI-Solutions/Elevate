// components/TestimonialsSwiper.jsx
"use client";

import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Expanded list of testimonials (now with 18 items for 3 rows of 6 each)
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
      "A reliable partner that helped us navigate the complex world of AI.",
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
    quote: "The team at Elevate Labs is top‑notch. They understood our vision…",
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
      "Elevate Labs is the future of AI‑driven business solutions. Highly recommended!",
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
    quote: "Delivered beyond our expectations with their custom AI solution.",
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

export default function TestimonialsSwiper() {
  const ROWS = 3;
  const CARDS_PER_ROW = 6;
  const rows = Array.from({ length: ROWS }, (_, i) =>
    testimonials.slice(i * CARDS_PER_ROW, (i + 1) * CARDS_PER_ROW)
  );

  const swiperRefs = useRef([]);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const swiperConfig = {
    speed: isMobile ? 15000 : 10000, // Faster on mobile
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      waitForTransition: false,
    },
    loop: true,
    loopAdditionalSlides: isMobile ? 4 : 10,
    freeMode: {
      enabled: true,
      momentum: false,
      sticky: false,
    },
    slidesPerView: "auto",
    spaceBetween: isMobile ? 16 : 24,
    resistanceRatio: 0,
  };

  useEffect(() => {
    swiperRefs.current = swiperRefs.current.slice(0, ROWS);
  }, [ROWS]);

  return (
    <section
      className="py-8 md:py-16 bg-black h-full relative overflow-hidden"
      ref={containerRef}>
      {/* Sidebar - Hidden on mobile */}
      <div
        className="hidden md:flex w-3xl absolute left-0 z-50 h-full bg-black items-center"
        style={{
          maskImage: "linear-gradient(to right, black 0%, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 60%)",
          backdropFilter: "blur(8px)",
        }}>
        <h2 className="text-6xl -rotate-90 font-extrabold text-center text-yellow-400 whitespace-nowrap">
          Testimonials
        </h2>
      </div>

      {/* Mobile Title - Only shows on small screens */}
      <h2 className="md:hidden text-3xl font-extrabold text-center text-yellow-400 mb-6 px-4">
        Testimonials
      </h2>

      <div className="space-y-4 md:space-y-8 ">
        {rows.map((rowItems, idx) => (
          <Swiper
            key={idx}
            ref={(el) => (swiperRefs.current[idx] = el)}
            modules={[FreeMode, Autoplay]}
            {...swiperConfig}
            autoplay={{
              ...swiperConfig.autoplay,
              reverseDirection: idx % 2 !== 0,
            }}
            onSlideChange={() => {
              const swiper = swiperRefs.current[idx];
              if (swiper && swiper.progress > 0.9) {
                swiper.slideTo(0, 0, false);
              }
            }}
            className="overflow-hidden py-2 md:py-4">
            {[...rowItems, ...rowItems].map((t, i) => (
              <SwiperSlide
                key={`${idx}-${i}`}
                className="!w-[280px] sm:!w-[350px] md:!w-[400px] lg:!w-[500px]">
                <div className="h-full w-full bg-gray-800 border-l-4 border-yellow-400 rounded-lg p-4 md:p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <p className="text-gray-200 italic text-sm md:text-base mb-3 md:mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-yellow-400">
                        <Image
                          src={getAvatarUrl(t.name)}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="object-cover"  
                          unoptimized
                        />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-yellow-400 font-semibold text-sm md:text-base">
                          {t.name}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
}
