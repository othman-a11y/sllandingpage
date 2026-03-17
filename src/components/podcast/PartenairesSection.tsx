const partenaires = [
  {
    name: "Beur FM",
    description: "Des médias comme Beur FM qui m'ont donné la parole.",
    logo: "📻",
    color: "#E8186D",
    featured: true,
  },
  {
    name: "213 Concept Store",
    description: "Des lieux comme 213 Concept Store qui ont ouvert leurs portes.",
    logo: "🛍️",
    color: "#D4AF37",
    featured: false,
  },
  {
    name: "Théâtre de la Clarté",
    description: "Des scènes où l'énergie circule vraiment.",
    logo: "🎭",
    color: "#9B59B6",
    featured: false,
  },
  {
    name: "Apollo Théâtre",
    description: "Une scène d'exception où tout devient possible.",
    logo: "🎪",
    color: "#9B59B6",
    featured: false,
  },
  {
    name: "Bpifrance",
    description: "Des institutions qui prouvent que culture et ambition peuvent dialoguer.",
    logo: "🏦",
    color: "#003189",
    featured: true,
  },
  {
    name: "France Télévisions Outre-mer",
    description: "Présence sur les antennes, parce que la visibilité est un droit.",
    logo: "📺",
    color: "#003189",
    featured: false,
  },
];

export default function PartenairesSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-playfair text-5xl text-[#E8186D]/30">&ldquo;</span>
            <div>
              <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
                PARTENAIRES
              </h2>
              <p className="font-script text-[#E8186D] text-xl mt-1">sans eux, il ne se passe rien</p>
            </div>
            <span className="font-playfair text-5xl text-[#E8186D]/30">&rdquo;</span>
          </div>
          <div className="h-px w-32 bg-[#E8186D]/40 mx-auto" />
        </div>

        {/* Intro text */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3 text-white/65 font-montserrat text-sm leading-relaxed">
          <p>
            Ici, je parle d&apos;<span className="text-white font-semibold">impact</span>.
            <br />
            Mais l&apos;impact, ça ne se crée jamais seule.
          </p>
          <p>
            Si je suis derrière un micro aujourd&apos;hui, si je monte sur scène, si je produis,
            si je raconte…
          </p>
          <p className="text-white font-semibold">
            C&apos;est aussi parce que des partenaires ont dit :{" "}
            <span className="text-[#E8186D]">&ldquo;On y croit.&rdquo;</span>
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
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
                className="font-bebas text-xl tracking-wide mb-2 leading-tight"
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

        {/* Closing manifesto */}
        <div className="max-w-2xl mx-auto bg-[#111] border border-[#E8186D]/20 rounded-2xl p-8 space-y-4 text-white/70 font-montserrat text-sm leading-relaxed">
          <div className="space-y-2">
            <p>Un projet, ce n&apos;est pas juste du talent.</p>
            <p><span className="text-white font-semibold">C&apos;est des alliances. C&apos;est de la confiance.</span></p>
            <p>C&apos;est des gens qui <span className="text-[#E8186D] font-semibold">prennent le risque avec toi.</span></p>
          </div>
          <div className="h-px bg-white/10" />
          <div className="space-y-1 text-white/50 italic">
            <p>Sans eux, rien ne se passe.</p>
            <p className="text-white not-italic font-semibold">Avec eux, tout devient possible.</p>
            <p>Et le chemin continue.</p>
            <p>Avec bienveillance. Avec conviction. Avec détermination.</p>
          </div>
          <div className="h-px bg-white/10" />
          <p className="text-center text-white font-playfair italic text-base">
            Je suis le capitaine de mon navire.<br />
            Mais un navire avance mieux{" "}
            <span className="text-[#E8186D]">quand l&apos;équipage croit à la traversée.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="font-montserrat text-white/40 text-sm mb-4">
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
