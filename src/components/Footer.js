"use client";
import { useContactModal } from "@/contexts/ModalContext";
import Link from "next/link";

export default function Footer() {
  const { openModal } = useContactModal();
  const handleClick = () => {
    openModal();
    console.log("hello");
  };
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand & CTA */}
        <div className="md:col-span-2">
          <Link href="/" passHref>
            <p className="inline-flex items-center space-x-2">
              <span className="text-xl font-semibold">ElivateLabs.Ai</span>
            </p>
          </Link>

          <p className="mt-6 text-2xl md:text-3xl leading-snug">
            Accelerate Your{" "}
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              Venture
            </span>{" "}
            Success with AI
          </p>

          <div onClick={handleClick}>
            <p className="relative inline-block mt-8">
              <span className="absolute inset-0 translate-x-1 translate-y-1 bg-gradient-to-r from-red-500 to-yellow-300 rounded-lg" />
              <span className="relative block bg-gradient-to-r from-pink-500 via-orange-300 to-yellow-400 hover:scale-105 transform transition py-3 px-8 rounded-lg text-black font-medium">
                Get In Touch
              </span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-300">
            {["Home", "Services", "Clients", "Team"].map((label) => (
              <li key={label}>
                <Link href={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
                  <p className="hover:text-white transition">{label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials (inline SVGs) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-white transition">
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.5a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-white transition">
                {/* Twitter SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.273 8.273 0 01-2.357.637 4.075 4.075 0 001.804-2.247 8.19 8.19 0 01-2.605.988 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.15 4.884 4.107 4.107 0 004.1 11.72a4.073 4.073 0 01-1.857-.512v.05a4.108 4.108 0 003.292 4.02 4.093 4.093 0 01-1.852.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/privacy">
                <p className="hover:text-white transition">Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <p className="hover:text-white transition">Terms of Services</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-gray-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Elevate Labs. All rights reserved.
      </div>
    </footer>
  );
}
