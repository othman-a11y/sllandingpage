import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.54V7.04a4.85 4.85 0 01-1.07-.35z"/>
  </svg>
);

export default function HeroPresentation() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundPosition: "center top",
          filter: "brightness(0.40)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />

      {/* Social sidebar */}
      <div className="absolute left-6 bottom-1/3 flex flex-col gap-4 z-10">
        {[
          { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
          { icon: <TikTokIcon />, href: "https://tiktok.com", label: "TikTok" },
          { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
          { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-bebas text-[clamp(5rem,18vw,14rem)] leading-none tracking-wider text-white drop-shadow-2xl">
          SARAH
          <br />
          LINDA
        </h1>

        <p className="font-montserrat text-xs tracking-[0.35em] uppercase text-white/40 mt-1 mb-5">
          by Sarah Linda Boudourene
        </p>

        <p className="font-montserrat text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
          Une Grande Pipelette &amp;{" "}
          <span className="text-[#D4AF37] font-semibold">
            une Spécialiste Internationale de galères maîtrisées.
          </span>
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Stand-up", "Production d'événements", "Communication digitale", "Podcast"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-[#D4AF37]/40 text-[#D4AF37] font-montserrat text-xs tracking-wider uppercase rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#F0D060] transition-all hover:scale-105"
          >
            Me contacter
          </Link>
          <Link
            href="/podcast"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-widest uppercase rounded-full hover:border-white hover:bg-white/10 transition-all"
          >
            Écouter le podcast
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#D4AF37]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
      </div>
    </section>
  );
}
