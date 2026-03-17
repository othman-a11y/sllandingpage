import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.54V7.04a4.85 4.85 0 01-1.07-.35z"/>
  </svg>
);

const MicIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
);

export default function PodcastHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Pink gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B50050] via-[#E8186D] to-[#FF4D9E]" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0,0,0,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-30"
        style={{ backgroundImage: "url('/images/podcast-hero-bg.jpg')" }}
      />

      {/* Social icons */}
      <div className="absolute left-6 bottom-1/3 flex flex-col gap-4 z-10">
        {[
          { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
          { icon: <TikTokIcon />, href: "https://tiktok.com", label: "TikTok" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-all"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Mic icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
            <MicIcon />
          </div>
        </div>

        <p className="font-montserrat text-sm tracking-[0.5em] uppercase text-white/80 mb-2">
          AVEC
        </p>

        <p className="font-montserrat font-light text-xl text-white/70 tracking-[0.3em] uppercase mb-1">
          PODCAST
        </p>

        <h1 className="font-bebas text-[clamp(5rem,18vw,14rem)] leading-none tracking-wider text-white drop-shadow-2xl">
          SARAH
          <br />
          LINDA
        </h1>

        <p className="mt-6 font-montserrat text-white/80 text-base md:text-lg max-w-lg mx-auto">
          Humour, sincérité et culot.
          <br />
          <span className="text-white font-semibold">L&apos;incontournable podcast</span> qui donne envie d&apos;avancer.
        </p>

        {/* Platform buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn flex items-center gap-2 px-5 py-2.5 bg-black/30 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-black/50 transition-all"
          >
            <span className="text-red-400">▶</span> YouTube
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn flex items-center gap-2 px-5 py-2.5 bg-[#1DB954]/20 border border-[#1DB954]/50 text-white rounded-full text-sm font-semibold hover:bg-[#1DB954]/30 transition-all"
          >
            <span className="text-[#1DB954]">●</span> Spotify
          </a>
          <a
            href="https://podcasts.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn flex items-center gap-2 px-5 py-2.5 bg-[#9B59B6]/20 border border-[#9B59B6]/50 text-white rounded-full text-sm font-semibold hover:bg-[#9B59B6]/30 transition-all"
          >
            🎙 Apple Podcasts
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0A0A0A" />
        </svg>
      </div>
    </section>
  );
}
