const partenaires = [
  {
    name: "Beur FM",
    description: "Radio nationale. Sarah Linda est chroniqueuse depuis plusieurs années. Une collaboration majeure qui lui donne la parole sur l'essentiel.",
    logo: "📻",
    color: "#E8186D",
    featured: true,
  },
  {
    name: "Apollo",
    description: "Partenaire scène. Soutien artistique et production de spectacles.",
    logo: "🎭",
    color: "#D4AF37",
    featured: false,
  },
  {
    name: "bpifrance",
    description: "Partenaire institutionnel qui soutient les projets entrepreneuriaux.",
    logo: "🏦",
    color: "#003189",
    featured: true,
  },
  {
    name: "France Télévisions",
    description: "Collaborations et présence sur les antennes de France Télévisions Outre-mer.",
    logo: "📺",
    color: "#003189",
    featured: false,
  },
  {
    name: "Théâtre de la Clarte",
    description: "Partenaire scène pour les spectacles et les représentations live.",
    logo: "🎪",
    color: "#9B59B6",
    featured: false,
  },
  {
    name: "23 Concept Store",
    description: "Partenaire retail et événementiel.",
    logo: "🛍",
    color: "#1ABC9C",
    featured: false,
  },
];

export default function PartenairesSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-playfair text-5xl text-[#E8186D]/40">&ldquo;</span>
            <div>
              <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
                PARTENAIRES
              </h2>
              <p className="font-script text-[#E8186D] text-xl">parce que ici il se passe rien</p>
            </div>
            <span className="font-playfair text-5xl text-[#E8186D]/40">&rdquo;</span>
          </div>
          <div className="h-px w-32 bg-[#E8186D]/40 mx-auto" />
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partenaires.map((p) => (
            <div
              key={p.name}
              className={`card-hover bg-[#111] border rounded-2xl p-5 flex flex-col items-center text-center ${
                p.featured ? "border-white/20" : "border-white/10"
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `${p.color}15` }}
              >
                {p.logo}
              </div>
              <h3
                className="font-bebas text-xl tracking-wide mb-2"
                style={{ color: p.featured ? "white" : "rgba(255,255,255,0.7)" }}
              >
                {p.name}
              </h3>
              <p className="text-white/40 font-montserrat text-xs leading-relaxed">{p.description}</p>
              {p.featured && (
                <span
                  className="mt-3 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ color: p.color, background: `${p.color}15` }}
                >
                  Partenaire clé
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="font-montserrat text-white/50 text-sm mb-4">
            Vous souhaitez devenir partenaire ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-[#E8186D] text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#FF4D9E] transition-all hover:scale-105"
          >
            Discutons ensemble
          </a>
        </div>
      </div>
    </section>
  );
}
