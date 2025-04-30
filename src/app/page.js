import CanvasPage from "@/components/CanvasWrapper";
import ContactModal from "@/components/ContactUsModal";
import Insights from "@/components/Insights";
import Projects from "@/components/Projects";
import ServicesSection from "@/components/services";
import TestimonialsMarquee from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="text-yellow-400 flex flex-col gap-8">
      <CanvasPage />
      <Projects />
      <ServicesSection />
      <Insights />
      <TestimonialsMarquee />
    </div>
  );
};

export default page;
