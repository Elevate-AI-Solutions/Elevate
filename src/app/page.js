import CanvasPage from "@/components/CanvasWrapper";
import ContactModal from "@/components/ContactUsModal";
import Insights from "@/components/Insights";
import Projects from "@/components/Projects";
import ServicesSection from "@/components/services";
import TestimonialsMarquee from "@/components/Testimonials";
import React from "react";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import MVPIn3Weeks from "@/components/MVPIn3Weeks";

const page = () => {
  return (
    <div className="text-yellow-400 flex flex-col gap-8">
      <CanvasPage />
      <PricingSection />
      <Projects />
      <MVPIn3Weeks /> 
      <ServicesSection />
      <Insights />
      <TestimonialsMarquee />
      <FAQSection />
    </div>
  );
};

export default page;
