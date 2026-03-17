import Link from "next/link";
import { ChevronRight } from "lucide-react";

const casquettes = [
  {
    id: "riflette",
    label: "Humour & Scène",
    subtitle: "La Riflette (2022 – Aujourd'hui)",
    icon: "🎤",
    color: "#D4AF37",
    description:
      "Un partage de réussites et de galères. Des invités pépites et tout ça sans langue de bois (100% sans filtre).",
    link: "/stand-up",
    linkLabel: "Voir les spectacles",
  },
  {
    id: "alchimie",
    label: "Production & Événementiel",
    subtitle: "Alchimie (2022 – Aujourd'hui)",
    icon: "✨",
    color: "#9B59B6",
    description:
      "Fondatrice d'Alchimie Production : organisation, coordination, animation, team building et bien plus.",
    link: "#contact",
    linkLabel: "Me contacter",
  },
  {
    id: "radio",
    label: "Chronique Radio",
    subtitle: "Beur FM",
    icon: "📻",
    color: "#E8186D",
    description:
      "1 an de pure kiffe sur Beur FM, une radio où je me suis sentie chez moi. En vrai, la continuité de mon milieu familial.",
    link: "/podcast",
    linkLabel: "Écouter",
  },
  {
    id: "community",
    label: "Community Manager",
    subtitle: "IMCI",
    icon: "📱",
    color: "#1ABC9C",
    description:
      "Fidélisation, négociation, suivi logistique, CRM… Je pouvais vendre un fer à repasser à quelqu'un qui vit en jogging. La vente : c'est le discours qui fait mouche.",
    link: "#contact",
    linkLabel: "En savoir plus",
  },
];

export default function CasquettesSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-script text-[#D4AF37] text-2xl mb-2">Selon moi</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            MES CASQUETTES DE QUALITÉ
          </h2>
          <div className="mt-3 h-px w-32 bg-[#D4AF37]/40 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casquettes.map((c) => (
            <div
              key={c.id}
              className="card-hover relative bg-[#111] border border-white/10 rounded-2xl p-6 overflow-hidden group"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: c.color }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${c.color}20` }}
                >
                  {c.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bebas text-2xl tracking-wide text-white">{c.label}</h3>
                  <p className="font-montserrat text-xs text-white/40 tracking-wider uppercase mt-0.5 mb-3">
                    {c.subtitle}
                  </p>
                  <p className="font-montserrat text-sm text-white/70 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              <Link
                href={c.link}
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase transition-colors"
                style={{ color: c.color }}
              >
                {c.linkLabel}
                <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
