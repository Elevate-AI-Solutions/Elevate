"use client";

import { useState } from "react";

const FancyButton = ({ openModal }) => {
  const [isPressed, setIsPressed] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    openModal();
  };

  return (
    <div className="mt-10 relative inline-block">
      {/* Bottom Layer (stays fixed) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="bg-yellow-500/80 rounded-xl p-[26px] px-8" />
      </div>

      {/* Top Button (starts offset, aligns on click) */}
      <a
        onClick={handleClick}
        href="#"
        className={`block relative z-10 text-center font-semibold text-black backdrop-blur-md bg-white/20 rounded-xl shadow-md transition-transform duration-300 ${
          isPressed
            ? "translate-x-0 translate-y-0"
            : "-translate-x-2 -translate-y-2"
        } py-3 px-6`}>
        Get Started
      </a>
    </div>
  );
};

export default FancyButton;
