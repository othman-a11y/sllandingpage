export default function MissionSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mission-bg.png')",
          filter: "brightness(0.2)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-script text-[#D4AF37] text-4xl mb-2">Ma mission</p>
        <div className="h-px w-24 bg-[#D4AF37]/40 mx-auto mb-8" />

        {/* Big quote */}
        <div className="relative px-6">
          <span className="absolute -top-6 -left-2 font-playfair text-8xl text-[#D4AF37]/20 leading-none select-none">
            "
          </span>

          <p className="font-montserrat text-white/70 text-base md:text-lg leading-relaxed mb-5">
            Je raconte la vérité.
          </p>

          <p className="font-playfair text-xl md:text-2xl lg:text-3xl italic text-white/95 leading-relaxed mb-4">
            Je transforme les émotions en punchlines,
          </p>

          <p className="font-montserrat text-white/65 text-base md:text-lg leading-relaxed mb-5">
            je me fais des films créatifs dans ma tête que j&apos;essaie de réaliser.
          </p>

          <p className="font-montserrat font-bold text-white text-base md:text-lg tracking-wide">
            Et <span className="text-[#D4AF37]">SURTOUT</span> j&apos;assume tout.
          </p>

          <span className="absolute -bottom-4 -right-2 font-playfair text-8xl text-[#D4AF37]/20 leading-none select-none">
            "
          </span>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="font-montserrat text-white/35 text-sm italic mb-5">
            (vous savez où me trouver)
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#F0D060] transition-all hover:scale-105"
          >
            Travailler avec moi
          </a>
        </div>
      </div>
    </section>
  );
}
