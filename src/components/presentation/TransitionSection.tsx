import { ChevronRight } from "lucide-react";

const items = [
  {
    from: {
      label: "Chronique Radio",
      sublabel: "Beur FM",
      desc: "1 an de pure kiffe sur Beur FM, une radio où je me suis sentie chez moi. En vrai, la continuité de mon milieu familial.",
      color: "#E8186D",
      icon: "📻",
    },
    to: {
      label: "Podcast",
      sublabel: "Avec Sarah Linda",
      desc: "Un partage de réussites et de galères. Des invités pépites et tout ça sans langue de bois (100% sans filtre).",
      color: "#E8186D",
      icon: "🎙️",
    },
  },
  {
    from: {
      label: "Relations Client",
      sublabel: "2006–2022",
      desc: "Fidélisation, négociation, suivi logistique, CRM… Je pouvais vendre un fer à repasser à quelqu'un qui vit en jogging. La vente : c'est le discours qui fait mouche.",
      color: "#D4AF37",
      icon: "👥",
    },
    to: {
      label: "Community Manager",
      sublabel: "IMCI",
      desc: "Fondatrice fondée sur le bon sens. La place que l'on passe de la parole aux actes.",
      color: "#1ABC9C",
      icon: "📱",
    },
  },
];

export default function TransitionSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-[#D4AF37] text-3xl">La Transition</p>
          <div className="mt-2 h-px w-24 bg-[#D4AF37]/40 mx-auto" />
        </div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* From card */}
              <div className="flex-1 bg-[#111] border border-white/10 rounded-2xl p-5 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${item.from.color}20` }}
                  >
                    {item.from.icon}
                  </div>
                  <div>
                    <p className="font-bebas text-xl text-white tracking-wide">{item.from.label}</p>
                    <p className="text-xs text-white/40 font-montserrat">{item.from.sublabel}</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 font-montserrat leading-relaxed">{item.from.desc}</p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <ChevronRight size={20} className="text-[#D4AF37]" />
                </div>
              </div>

              {/* To card */}
              <div
                className="flex-1 rounded-2xl p-5 w-full border"
                style={{
                  background: `${item.to.color}10`,
                  borderColor: `${item.to.color}30`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${item.to.color}20` }}
                  >
                    {item.to.icon}
                  </div>
                  <div>
                    <p className="font-bebas text-xl text-white tracking-wide">{item.to.label}</p>
                    <p className="text-xs font-montserrat" style={{ color: `${item.to.color}AA` }}>
                      {item.to.sublabel}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/70 font-montserrat leading-relaxed">{item.to.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
