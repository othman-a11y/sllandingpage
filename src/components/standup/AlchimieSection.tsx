export default function AlchimieSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Logo & Branding */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#9B59B6]/20 border border-white/10 flex items-center justify-center mb-6">
              <div className="text-center">
                <p className="font-bebas text-2xl text-[#D4AF37] tracking-widest">ALCHIMIE</p>
                <p className="font-montserrat text-xs text-white/40 tracking-widest uppercase">Production</p>
              </div>
            </div>

            <p className="font-script text-[#D4AF37] text-2xl mb-2 text-center lg:text-left">
              Une suite logique
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-wide text-center lg:text-left leading-tight">
              ALCHIMIE
              <br />
              <span className="text-[#D4AF37]">PRODUCTION</span>
            </h2>
            <p className="mt-1 font-montserrat text-xs tracking-[0.3em] uppercase text-white/30 text-center lg:text-left">
              Mon projet phare
            </p>
          </div>

          {/* Right: Text */}
          <div className="space-y-5 text-white/70 font-montserrat text-sm leading-relaxed">
            <p>
              La création d&apos;Alchimie Production s&apos;est imposée comme une{" "}
              <span className="text-white font-semibold">étape naturelle</span> dans le développement
              artistique de Sarah Linda.
            </p>
            <p>
              Cette structure lui permet d&apos;inscrire son travail dans un{" "}
              <span className="text-[#D4AF37] font-semibold">cadre professionnel solide</span>,
              d&apos;assumer son indépendance créative et de porter ses projets avec cohérence et
              exigence.
            </p>
            <p>
              En fondant Alchimie Production, elle a fait le choix de ne plus attendre la validation
              extérieure pour <span className="text-white font-semibold">créer, produire et diffuser</span> son
              travail.
            </p>
            <p>
              Cette démarche traduit une volonté d&apos;autonomie, de structuration et d&apos;engagement à
              long terme, afin de développer des projets artistiques porteurs de sens, ancrés dans le
              réel et ouverts au public le plus large possible.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-block px-8 py-3.5 bg-[#D4AF37] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#F0D060] transition-all hover:scale-105"
            >
              Travailler avec Alchimie
            </a>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 border-t border-white/10 pt-12 text-center">
          <span className="font-playfair text-6xl text-[#C00020]/20 leading-none select-none">
            &ldquo;
          </span>
          <p className="font-playfair text-xl md:text-2xl italic text-white/80 mt-2 leading-relaxed">
            Ils ne savaient pas que c&apos;était impossible,
            <br />
            alors ils l&apos;ont fait.
          </p>
          <span className="font-playfair text-6xl text-[#C00020]/20 leading-none select-none">
            &rdquo;
          </span>
          <p className="mt-3 text-white/30 font-montserrat text-sm">— Mark Twain</p>
        </div>
      </div>
    </section>
  );
}
