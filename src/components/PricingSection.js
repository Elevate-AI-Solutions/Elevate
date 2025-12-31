import { Check, Rocket, Crown, Calendar } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-black text-white px-4 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-extrabold text-yellow-400 text-3xl sm:text-4xl md:text-5xl">
            Transparent Pricing
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Choose the perfect solution for your project based on your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* MVP Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-yellow-400/10 transition">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-yellow-400/10 mb-5">
              <Rocket className="text-yellow-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold">
              MVP Development
            </h3>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Minimum Viable Product for startups and new ideas
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-yellow-400">
                $3,999
              </span>
              <span className="text-white/60 mb-1 text-sm">
                fixed price
              </span>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-yellow-400">
                What&apos;s Included
              </h4>
              <ul className="space-y-3">
                {[
                  "Complete MVP in 3 weeks",
                  "Production-ready code",
                  "Modern tech stack",
                  "Responsive design",
                  "Free deployment",
                  "3 weeks support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400/20 shrink-0">
                      <Check className="w-3 h-3 text-yellow-400" />
                    </span>
                    <span className="text-white/70 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full bg-yellow-400 text-black font-bold py-3.5 rounded-xl hover:bg-yellow-300 transition">
              Book Free Discovery Call →
            </button>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-white/60">
              <span>Money-back guarantee</span>
              <span>⚡ 3-week delivery</span>
            </div>
          </div>

          {/* Custom Consultancy */}
          <div className="relative bg-neutral-950 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-yellow-400/10">
            <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>

            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-yellow-400 mb-5">
              <Crown className="text-black" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Technical Consultancy
            </h3>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Tailored solutions for your unique needs
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-yellow-400">
                Custom
              </span>
              <span className="text-white/60 mb-1 text-sm">
                pricing based on scope
              </span>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-yellow-400">
                What&apos;s Included
              </h4>
              <ul className="space-y-3">
                {[
                  "Custom requirements analysis",
                  "Scalable architecture design",
                  "Enterprise-grade solutions",
                  "Advanced integrations",
                  "Ongoing maintenance",
                  "Priority support 24/7",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400/20 shrink-0">
                      <Check className="w-3 h-3 text-yellow-400" />
                    </span>
                    <span className="text-white/70 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Consultation →
            </button>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-white/60">
              <span>Free quote within 24h</span>
              <span>Dedicated team</span>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        {/* <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60 text-center">
          <span className="text-yellow-400">●</span> 20+ Projects Delivered
          <span className="text-yellow-400">●</span> 100% Client Satisfaction
          <span className="text-yellow-400">●</span> AI-Accelerated Development
        </div> */}
      </div>
    </section>
  );
}
