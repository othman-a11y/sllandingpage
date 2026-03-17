const pressItems = [
  { outlet: "Beur FM", quote: "Une voix qui compte dans le paysage humoristique français.", year: "2023" },
  { outlet: "France Télévisions", quote: "Un talent rare, authentique et profondément humain.", year: "2022" },
  { outlet: "Le Parisien", quote: "Sarah Linda débarque avec un humour dévastateur et libérateur.", year: "2022" },
];

export default function PressSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── DOSSIER DE PRESSE ── */}
        <div>
          <div className="text-center mb-12">
            <p className="font-script text-[#C00020] text-2xl mb-2">By press</p>
            <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              DOSSIER DE PRESSE
            </h2>
            <div className="mt-3 h-px w-32 bg-[#C00020]/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pressItems.map((item) => (
              <div
                key={item.outlet}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 font-playfair text-5xl text-[#C00020]/10 leading-none select-none">
                  &rdquo;
                </span>
                <p className="font-playfair italic text-white/80 text-sm leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C00020] font-bebas text-lg tracking-wide">{item.outlet}</span>
                  <span className="text-white/30 text-xs font-montserrat">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C00020]/50 text-[#C00020] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#C00020]/10 transition-all"
            >
              📄 Demander le dossier de presse
            </a>
          </div>
        </div>

        {/* ── LES MÉDIAS ── */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              LES MÉDIAS
            </h2>
            <div className="mt-3 h-px w-32 bg-[#C00020]/40 mx-auto" />
            <p className="mt-4 text-white/40 font-montserrat text-sm">
              Sarah Linda dans la presse, à la radio et à la télévision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Beur FM", type: "Radio", icon: "📻", color: "#E8186D" },
              { name: "France Télévisions", type: "TV", icon: "📺", color: "#003189" },
              { name: "France 1", type: "TV", icon: "📡", color: "#003189" },
              { name: "Talents Outre-mer", type: "Presse", icon: "🗞️", color: "#D4AF37" },
            ].map((media) => (
              <div
                key={media.name}
                className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-white/20 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background: `${media.color}15` }}
                >
                  {media.icon}
                </div>
                <p className="font-bebas text-base text-white tracking-wide leading-tight">{media.name}</p>
                <span
                  className="mt-1 text-xs font-montserrat px-2 py-0.5 rounded-full"
                  style={{ color: media.color, background: `${media.color}15` }}
                >
                  {media.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── MES RÉSEAUX SOCIAUX ── */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
              MES RÉSEAUX SOCIAUX
            </h2>
            <p className="font-script text-[#C00020] text-2xl mt-1">Moments Pépites</p>
            <div className="mt-3 h-px w-32 bg-[#C00020]/40 mx-auto" />
            <p className="mt-4 text-white/40 font-montserrat text-sm">
              Retrouvez les meilleurs moments sur toutes les plateformes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { platform: "YouTube", handle: "Avec Sarah Linda", icon: "▶", color: "#FF0000", href: "https://youtube.com" },
              { platform: "TikTok", handle: "@sarahlinda", icon: "♪", color: "#69C9D0", href: "https://tiktok.com" },
              { platform: "Instagram", handle: "@sarahlinda", icon: "◈", color: "#E1306C", href: "https://instagram.com" },
            ].map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ color: s.color, background: `${s.color}15` }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="font-bebas text-lg text-white tracking-wide">{s.platform}</p>
                  <p className="text-white/40 text-xs font-montserrat">{s.handle}</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-xs">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
