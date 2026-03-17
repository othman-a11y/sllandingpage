import { CheckCircle } from "lucide-react";

const steps = [
  {
    year: "2006–2022",
    title: "Relations Client",
    description:
      "Platform, chaque fois, lead teams, la parole de chacun en comprenant que la croissance du soi est nécessaire.",
    icon: "👥",
    color: "#D4AF37",
  },
  {
    year: "2006–Aujourd'hui",
    title: "Chronique Radio · Beur FM",
    description:
      "Chroniqueuse radio qui aide les femmes, les forme vers davantage de vie fonctionnelle.",
    icon: "📻",
    color: "#E8186D",
  },
  {
    year: "2022–Aujourd'hui",
    title: "Community Manager · IMCI",
    description:
      "Fondatrice fondée sur le bon sens. IMCI place que l'on passe de la parole aux actes. Travail dit, solution.",
    icon: "📱",
    color: "#1ABC9C",
    badge: true,
  },
];

export default function EvolutionSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-[#D4AF37] text-3xl">L&apos;évolution</p>
          <div className="mt-2 h-px w-24 bg-[#D4AF37]/40 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#E8186D] to-[#1ABC9C] opacity-30 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 border"
                  style={{
                    background: `${step.color}15`,
                    borderColor: `${step.color}40`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bebas text-2xl tracking-wide text-white">{step.title}</h3>
                    {step.badge && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#1ABC9C] bg-[#1ABC9C]/10 px-3 py-1 rounded-full">
                        <CheckCircle size={12} />
                        Actif
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40 font-montserrat tracking-wider uppercase mb-3">
                    {step.year}
                  </p>
                  <p className="text-sm text-white/65 font-montserrat leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
