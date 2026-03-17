export default function StandUpIntro() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* ── ON COMMENCE PAR LE DÉBUT ── */}
        <div>
          <p className="font-script text-[#C00020] text-3xl mb-3">On commence par le début...</p>
          <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-wide mb-8 leading-tight">
            ON COMMENCE
            <br />
            <span className="text-[#C00020]">PAR LE DÉBUT …</span>
          </h2>

          <div className="space-y-5 text-white/70 font-montserrat text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Dès que j&apos;ai appris à me parler…{" "}
              <span className="text-white font-semibold">je ne me suis plus arrêtée.</span>
            </p>
            <p>
              Une moindre chose m&apos;inspirait : ma famille, mes collègues, des personnes dans
              le public ou dans la rue — même pour vous dire, les animaux. Chat, chien, tout y
              passait pour rigoler et vanner un maximum de choses ou de personnes.
            </p>
            <p className="text-[#C00020] font-semibold">
              Attention — toujours dans la bienveillance et dans l&apos;amour.
              C&apos;est la base des bases.
            </p>
          </div>
        </div>

        {/* ── LE DÉCLIC ── */}
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C00020] to-transparent rounded-full" />

          <div className="pl-8">
            <p className="font-bebas text-2xl text-[#C00020] tracking-widest mb-1">UN DÉCLIC</p>
            <p className="font-montserrat text-xs text-white/30 tracking-widest uppercase mb-6">
              Novembre 2016 — Boulogne-Billancourt
            </p>

            <div className="space-y-4 text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
              <p>
                Dans un magasin à Boulogne-Billancourt — une femme me regarde et me dit,
                très sérieusement :
              </p>

              <blockquote className="relative bg-[#111] border border-[#C00020]/20 rounded-xl px-6 py-5 my-4">
                <span className="absolute -top-3 left-4 font-playfair text-4xl text-[#C00020]/30 leading-none select-none">&ldquo;</span>
                <p className="font-playfair text-lg md:text-xl italic text-white/90 leading-relaxed">
                  Je peux vous voir où en spectacle ?
                </p>
              </blockquote>

              <p>
                À l&apos;extérieur : <span className="text-white">sourire poli.</span>{" "}
                À l&apos;intérieur :{" "}
                <span className="text-[#C00020] font-semibold">explosion émotionnelle.</span>
              </p>

              <p>
                En trois secondes, je me vois sur scène, une salle pleine, en train
                d&apos;improviser, de jouer avec le public, de m&apos;amuser comme les femmes
                qui m&apos;ont toujours inspirée.
              </p>

              <p>Dans ma tête, c&apos;était clair :</p>

              <p className="font-bebas text-2xl md:text-3xl text-white tracking-wide">
                « Mesdames et messieurs… Sarah-Linda. »
              </p>

              <p>
                <span className="text-[#C00020] font-semibold">Oui. J&apos;ai vu grand. Très grand.</span>
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                <p className="text-white/40 text-xs italic">
                  PS : je raconterai un jour comment je l&apos;ai rencontrée.
                </p>
                <p className="text-white/40 text-xs italic">
                  Spoiler : cette histoire mérite son propre chapitre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Chiffres clés ── */}
        <div className="grid grid-cols-3 gap-4 max-w-sm">
          {[
            { label: "Spectacles", value: "3" },
            { label: "Années de scène", value: "10+" },
            { label: "Représentations", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-white/10 rounded-xl p-3 text-center">
              <p className="font-bebas text-3xl text-[#C00020]">{stat.value}</p>
              <p className="text-white/40 text-xs font-montserrat mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
