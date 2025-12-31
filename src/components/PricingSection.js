import { Check, Rocket, Crown, Calendar } from "lucide-react";

export default function PricingSection() {

  return (
    <section id="pricing" className="bg-black py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Choose the perfect solution for your project based on your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* MVP Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-yellow-400/10 transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 mb-6">
              <Rocket className="text-yellow-400" />
            </div>

            <h3 className="text-2xl font-bold">MVP Development</h3>
            <p className="text-white/60 mt-1">
              Minimum Viable Product for startups and new ideas
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold text-yellow-400">
                $3,999
              </span>
              <span className="text-white/60 mb-1">fixed price</span>
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
                  "3 Weeks support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400/20">
                      <Check className="w-3 h-3 text-yellow-400" />
                    </span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-10 w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition">
              Book Free Discovery Call →
            </button>

            <div className="mt-4 flex justify-center gap-6 text-sm text-white/60">
              <span>Money-back guarantee</span>
              <span>⚡ 3-week delivery</span>
            </div>
          </div>

          {/* Custom Product */}
          <div className="relative bg-neutral-950 border border-yellow-400/30 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10">
            {/* Badge */}
            <span className="absolute top-6 right-6 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>

            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400 mb-6">
              <Crown className="text-black" />
            </div>

            <h3 className="text-2xl font-bold">Technical Counsultancy</h3>
            <p className="text-white/60 mt-1">
              Tailored solutions for your unique needs
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold text-yellow-400">
                Custom
              </span>
              <span className="text-white/60 mb-1">pricing Based on project scope</span>
            </div>
            <p className="text-white/50 mt-1"></p>

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
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400/20">
                      <Check className="w-3 h-3 text-yellow-400" />
                    </span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-10 w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Consultation →
            </button>

            <div className="mt-4 flex justify-center gap-6 text-sm text-white/60">
              <span>Free quote within 24h</span>
              <span>Dedicated team</span>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <span className="text-yellow-400">●</span> 20+ Projects Delivered
          <span className="text-yellow-400">●</span> 100% Client Satisfaction
          <span className="text-yellow-400">●</span> AI-Accelerated Development
        </div>
      </div>
    </section>
  );
}
