const services = [
  {
    icon: "✍️",
    title: "Écriture",
    description: "Textes originaux, scripts humoristiques, one-liners percutants.",
    color: "#C00020",
  },
  {
    icon: "🎬",
    title: "Organisation",
    description: "Coordination complète de vos événements : date, lieu, technique, logistique.",
    color: "#D4AF37",
  },
  {
    icon: "🎤",
    title: "Animation",
    description: "MC, maîtresse de cérémonie, animatrice d'entreprise ou de gala.",
    color: "#9B59B6",
  },
  {
    icon: "🤝",
    title: "Team Building",
    description: "Ateliers humour, cohésion d'équipe, workshops créatifs avec une vraie énergie.",
    color: "#1ABC9C",
  },
  {
    icon: "📸",
    title: "Contenu Scène",
    description: "Captation, clips de spectacle, formats digitaux adaptés aux réseaux.",
    color: "#E8186D",
  },
  {
    icon: "💼",
    title: "Keynotes",
    description: "Conférences inspirantes mêlant humour, leadership et développement personnel.",
    color: "#F39C12",
  },
];

export default function CreationSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            CRÉATION, ORGANISATION
            <br />
            <span className="text-[#C00020]">&amp; ANIMATION</span>
          </h2>
          <div className="mt-3 h-px w-32 bg-[#C00020]/40 mx-auto" />
          <p className="mt-4 text-white/50 font-montserrat text-sm max-w-lg mx-auto">
            Sarah Linda met son talent et son expérience au service de vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${s.color}15` }}
              >
                {s.icon}
              </div>
              <h3
                className="font-bebas text-xl tracking-wide mb-2"
                style={{ color: s.color }}
              >
                {s.title}
              </h3>
              <p className="text-white/60 font-montserrat text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#C00020] text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#E00030] transition-all hover:scale-105"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
