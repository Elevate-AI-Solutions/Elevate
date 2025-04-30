"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useContactModal } from "@/contexts/ModalContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl text-yellow-400 font-bold cursor-pointer">
          ElivateLabs.Ai
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/service" className="hover:text-gray-300 transition">
            Service
          </Link>
          <Link href="/clients" className="hover:text-gray-300 transition">
            Clients
          </Link>
            <button
              onClick={openModal}
              className="text-yellow-400 hover:text-yellow-200 px-4 py-2 rounded-xl font-medium transition">
              Get Started
            </button>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 relative z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu">
          <span
            className={clsx(
              "block h-0.5 bg-white transform transition duration-300 ease-in-out",
              isOpen ? "rotate-45 translate-y-2" : ""
            )}
          />
          <span
            className={clsx(
              "block h-0.5 bg-white transition duration-300 ease-in-out",
              isOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={clsx(
              "block h-0.5 bg-white transform transition duration-300 ease-in-out",
              isOpen ? "-rotate-45 -translate-y-2" : ""
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 h-screen backdrop-blur-sm bg-white/20 border-r border-white/10 shadow-lg px-6 py-8 transform transition-transform duration-500 md:hidden flex flex-col justify-between",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
        <nav className="mt-20 flex flex-col space-y-6 text-lg font-medium text-white">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition">
            Service
          </Link>
          <Link
            href="/clients"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition">
            Clients
          </Link>
          {/* <Link href="/get-started" onClick={() => setIsOpen(false)}>
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-xl transition w-full">
              Get Started
            </button>
          </Link> */}
        </nav>

        <div className="text-sm text-gray-300 mt-auto pt-8 text-center">
          Empowered by AI • © {new Date().getFullYear()}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
