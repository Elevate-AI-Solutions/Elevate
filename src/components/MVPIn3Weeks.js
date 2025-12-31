import { MessageSquare, Rocket, CheckCircle } from "lucide-react";

export default function MVPIn3Weeks() {
  return (
    <section className="bg-black py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
            Idea to Product in 3 Weeks
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Launch your idea fast and test it with real users
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Week 1 */}
          <StepCard
            icon={<MessageSquare />}
            week="Week 1"
            title="Requirements & Planning"
            desc="Define scope, user stories, and technical architecture"
            items={[
              "Project roadmap",
              "Product Outlook",
              "Tech stack selection",
            ]}
          />

          {/* Week 2 */}
          <StepCard
            icon={<Rocket />}
            week="Week 2"
            title="Core Development"
            desc="Build essential features with AI-accelerated development"
            items={[
              "Core functionality",
              "Database and logic setup",
              "API development",
            ]}
            highlighted
          />

          {/* Week 3 */}
          <StepCard
            icon={<CheckCircle />}
            week="Week 3"
            title="Launch Ready"
            desc="Testing, deployment, and go-live"
            items={[
              "MVP functionality testing",
              "Production deployment",
              "Live testing",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */

function StepCard({ icon, week, title, desc, items, highlighted }) {
  return (
    <div
      className={`rounded-2xl border p-8 transition hover:-translate-y-1
      ${
        highlighted
          ? "bg-neutral-950 border-yellow-400/40 shadow-yellow-400/10 shadow-xl"
          : "bg-neutral-900 border-white/10"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6
        ${highlighted ? "bg-yellow-400 text-black" : "bg-yellow-400/10 text-yellow-400"}`}
      >
        {icon}
      </div>

      {/* Week Badge */}
      <span className="inline-block mb-3 text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
        {week}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/60 mb-6">{desc}</p>

      {/* List */}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-yellow-400" />
            </span>
            <span className="text-white/70 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
