export default function StandUpHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/standup-hero-bg.jpg')",
          filter: "brightness(0.25)",
        }}
      />

      {/* Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C00020]/60 via-transparent to-[#0A0A0A]/80" />

      {/* Decorative spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Mic icon */}
        <div className="flex justify-center mb-6">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" className="opacity-60">
            <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="8" y1="22" x2="16" y2="22"/>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="font-montserrat text-sm tracking-[0.4em] uppercase text-white/60 mb-3">
          Ma plus beau histoire d&apos;amour
        </p>

        <h1 className="font-bebas text-[clamp(4rem,14vw,12rem)] leading-none tracking-wide text-white drop-shadow-2xl">
          LE STAND UP
        </h1>

        {/* Red accent */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-0.5 w-12 bg-[#C00020]" />
          <span className="font-script text-[#FF4D60] text-2xl">Rire</span>
          <div className="h-0.5 w-12 bg-[#C00020]" />
        </div>

        <p className="mt-3 font-montserrat text-white/60 text-sm tracking-wider uppercase">
          Parce que l&apos;humour déplace l&apos;une et les rires
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#spectacles"
            className="px-8 py-3.5 bg-[#C00020] text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#E00030] transition-all hover:scale-105"
          >
            Voir les spectacles
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-widest uppercase rounded-full hover:border-white hover:bg-white/10 transition-all"
          >
            Réserver
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
