"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FancyButton from "./Button";
import { useContactModal } from "@/contexts/ModalContext";

export default function NetBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { openModal } = useContactModal();

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
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 0.7,

            color: 0xffd700,
            backgroundColor: 0x0a0a0a,

            points: window.innerWidth < 768 ? 6 : 10,
            maxDistance: window.innerWidth < 768 ? 10 : 12,
            spacing: window.innerWidth < 768 ? 20 : 15,
          })
        );
      }
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="w-full min-h-screen px-4 flex items-center justify-center relative text-white overflow-hidden"
    >
      <div className="z-10 text-center flex flex-col items-center max-w-4xl">
        <h1 className="
          font-extrabold text-yellow-400 drop-shadow-md
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          leading-tight
        ">
          Turn your Ideas into <br className="hidden sm:block" />
          Scalable Products
        </h1>

        <p className="
          mt-4 text-white/80 font-medium
          text-sm sm:text-base md:text-lg
          max-w-2xl
        ">
          Transforming businesses, brands, and startups with the unstoppable
          force of AI. Welcome to the future.
        </p>

        <div className="mt-6">
          <FancyButton openModal={openModal} />
        </div>
      </div>
    </section>
  );
}
