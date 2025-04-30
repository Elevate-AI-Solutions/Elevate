"use client";
import { useState } from "react";
import {
  CpuChipIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  UserGroupIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "ai",
    name: "LLM, AI Chatbot & Machine Learning",
    icon: CpuChipIcon,
    description:
      "Harness cutting‑edge AI to automate your workflows and delight your users.",
    features: [
      "Custom LLM fine‑tuning & prompt engineering",
      "Conversational chatbot integration",
      "Data‑driven model optimization",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI API"],
  },
  {
    id: "custom",
    name: "Custom Software Development",
    icon: CodeBracketIcon,
    description:
      "Bespoke solutions built from the ground up to match your exact needs.",
    features: [
      "Architecture & system design",
      "API development & integrations",
      "Maintenance & support",
    ],
    technologies: ["Node.js", "Python", ".NET", "GraphQL"],
  },
  {
    id: "web",
    name: "Web Application Development",
    icon: GlobeAltIcon,
    description:
      "Responsive, performant web apps that scale with your business.",
    features: [
      "Frontend frameworks (React, Vue, Svelte)",
      "Backend services & microservices",
      "SEO & accessibility best practices",
    ],
    technologies: ["Next.js", "Nuxt.js", "Django", "PostgreSQL"],
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    icon: DevicePhoneMobileIcon,
    description:
      "Native and cross‑platform mobile experiences that engage your users.",
    features: [
      "iOS & Android (Swift, Kotlin)",
      "React Native & Flutter",
      "App Store & Play Store deployment",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "devops",
    name: "DevOps Services",
    icon: Cog6ToothIcon,
    description:
      "Streamline your development and operations with industry best practices.",
    features: [
      "Setup and optimization of CI/CD pipelines",
      "Efficient container management with modern tools",
      "Automated testing frameworks for rapid delivery",
      "Infrastructure as Code for reproducible environments",
      "Comprehensive monitoring and logging for insights",
      "Release management strategies for smooth deployments",
    ],
    technologies: [
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "CircleCI",
      "Prometheus",
      "ELK Stack",
    ],
  },
  {
    id: "support",
    name: "Support & Maintenance",
    icon: WrenchScrewdriverIcon,
    description: "24/7 monitoring and proactive support to keep you online.",
    features: [
      "Real‑time system monitoring",
      "Security patches & updates",
      "Dedicated support SLA",
    ],
    technologies: ["PagerDuty", "Sentry", "Datadog"],
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: CloudIcon,
    description:
      "Scalable, resilient cloud architectures tailored to your needs.",
    features: [
      "AWS / GCP / Azure architecture",
      "Serverless & container orchestration",
      "Cost optimization & governance",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Serverless"],
  },
  {
    id: "staff",
    name: "Staff Augmentation",
    icon: UserGroupIcon,
    description:
      "Rapidly extend your team with vetted experts in any technology.",
    features: [
      "On‑demand developer resourcing",
      "Flexible engagement models",
      "Cross‑functional skill sets",
    ],
    technologies: ["Full‑stack", "QA & Testing", "DevOps Engineers"],
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        {/* ============================= */}
        {/* MOBILE + DESKTOP TAB LIST */}
        {/* ============================= */}
        <nav className="w-full md:w-1/3 space-y-2">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isActive = svc.id === activeId;

            return (
              <div key={svc.id}>
                <button
                  onClick={() => setActiveId(svc.id)}
                  className={`
                    flex items-center w-full px-4 py-3 rounded-lg transition
                    ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "bg-white/15 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  `}>
                  <Icon
                    className={`h-6 w-6 mr-3 ${
                      isActive ? "text-black" : "text-yellow-400"
                    }`}
                  />
                  <span className="font-medium text-sm sm:text-base">
                    {svc.name}
                  </span>
                </button>

                {/* ==== MOBILE‐ONLY PANEL (below its tab) ==== */}
                {isActive && (
                  <div className="mt-2 p-4 bg-white/15 rounded-lg md:hidden">
                    <h3 className="text-lg font-semibold">{svc.name}</h3>
                    <p className="mt-1 text-gray-300 text-sm">
                      {svc.description}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {svc.features.map((f, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="ml-2 text-gray-300 text-sm">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <h4 className="font-medium text-gray-200 text-sm">
                        Technologies
                      </h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {svc.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/20 text-gray-300 px-2 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ============================= */}
        {/* DESKTOP‐ONLY PANEL (right side) */}
        {/* ============================= */}
        <div className="hidden md:block md:w-2/3 md:pl-8">
          <div className="p-6 bg-white/15 rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold">{active.name}</h2>
            <p className="text-gray-300">{active.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {active.features.map((feat, i) => (
                <div key={i} className="flex items-start">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-yellow-400 mt-1" />
                  <p className="ml-2 text-gray-300 text-sm">{feat}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {active.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
