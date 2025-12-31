"use client";

import { useContactModal } from "@/contexts/ModalContext";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Server,
  Shield,
  ShoppingCart,
  BarChart,
  Layers,
  Globe,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="bg-black text-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & CTA */}
          <div className="md:col-span-1">
            <Link href="/">
              <p className="text-xl font-semibold">ElivateLabs.Ai</p>
            </Link>

            <p className="mt-6 text-2xl leading-snug">
              Accelerate Your{" "}
              <span className="text-yellow-400 font-bold">Venture</span>{" "}
              Success with AI
            </p>

            <button
              onClick={openModal}
              className="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Get In Touch
            </button>
          </div>

          {/* What We Build */}
          <div>
            <h4 className="text-lg font-semibold mb-4">What We Build</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-3">
                <Code className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-white">Web Applications</p>
                  <p className="text-xs">SaaS, Dashboards, E-commerce</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Smartphone className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-white">Mobile Apps</p>
                  <p className="text-xs">iOS, Android, React Native</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Server className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-white">Backend Systems</p>
                  <p className="text-xs">APIs, Microservices, Cloud</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Shield className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-white">Enterprise Solutions</p>
                  <p className="text-xs">CRM, ERP, Security</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Types</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4 text-yellow-400" />
                E-commerce Platforms
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-yellow-400" />
                Corporate Websites
              </li>
              <li className="flex items-center gap-3">
                <BarChart className="w-4 h-4 text-yellow-400" />
                Analytics Dashboards
              </li>
              <li className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-yellow-400" />
                Management Systems
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-yellow-400" />
                Real-time Applications
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                MVP in 3 Weeks
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                Production-Ready Code
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                AI-Accelerated Development
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                24/7 Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Elevate Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
