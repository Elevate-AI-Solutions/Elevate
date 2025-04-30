"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FancyButton from "./Button";
import ContactModal from "./ContactUsModal";
import { useContactModal } from "@/contexts/ModalContext";

export default function NetBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { openModal } = useContactModal()

  useEffect(() => {
    import("vanta/dist/vanta.net.min").then((VANTA) => {
      if (!vantaEffect) {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 0.8,

            // Colors
            color: 0xffd700,
            backgroundColor: 0x0a0a0a,

            // Optimizations
            points: 10,
            maxDistance: 12.0, // lower = less chaotic connections (default is 20–30)
            spacing:
              typeof window !== "undefined" && window.innerWidth > 768
                ? 15
                : 20, // more spacing = cleaner look (default is ~12–20)
          })
        );
      }
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      id="home"
      ref={vantaRef}
      className="w-full h-screen px-4 flex items-center justify-center relative text-white overflow-hidden">
      <div className="z-10 text-center items-center flex flex-col">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-md">
          Accelerate Your Venture Success with AI
        </h1>
        <p className="mt-4 text-lg lg:text-xl lg:w-2/3 w-full text-center text-white/80 font-bold">
          Transforming businesses, brands, and startups with the unstoppable
          force of AI. Welcome to the future.
        </p>

        <div className="mt-5">
          <FancyButton openModal={openModal} />
        </div>
      </div>
      {/* <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} /> */}
    </div>
  );
}
