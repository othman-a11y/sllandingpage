import { Instagram, Youtube } from "lucide-react";
import { CheckCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.54V7.04a4.85 4.85 0 01-1.07-.35z"/>
  </svg>
);

const socials = [
  {
    name: "Instagram",
    handle: "@sarahlinda",
    icon: <Instagram size={24} />,
    color: "#E1306C",
    bg: "#E1306C15",
    border: "#E1306C30",
    href: "https://instagram.com",
    followers: "10K+",
    verified: true,
  },
  {
    name: "TikTok",
    handle: "@sarahlinda",
    icon: <TikTokIcon />,
    color: "#69C9D0",
    bg: "#69C9D015",
    border: "#69C9D030",
    href: "https://tiktok.com",
    followers: "5K+",
    verified: true,
  },
  {
    name: "YouTube",
    handle: "Avec Sarah Linda",
    icon: <Youtube size={24} />,
    color: "#FF0000",
    bg: "#FF000015",
    border: "#FF000030",
    href: "https://youtube.com",
    followers: "2K+",
    verified: false,
  },
];

export default function PodcastSocials() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-[#E8186D] text-2xl mb-2">Suivez l&apos;aventure</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            LES RÉSEAUX SOCIAUX
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-16 bg-[#E8186D]/40" />
            <CheckCircle size={16} className="text-[#1DA1F2]" />
            <div className="h-px w-16 bg-[#E8186D]/40" />
          </div>
          <p className="mt-4 text-white/50 font-montserrat text-sm">
            Sarah Linda y est partout, ne ratez rien !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover block rounded-2xl border p-6 text-center group"
              style={{ background: s.bg, borderColor: s.border }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ color: s.color, background: `${s.color}20` }}
              >
                {s.icon}
              </div>

              <div className="flex items-center justify-center gap-1.5 mb-1">
                <h3 className="font-bebas text-2xl text-white tracking-wide">{s.name}</h3>
                {s.verified && <CheckCircle size={16} className="text-[#1DA1F2]" />}
              </div>

              <p className="text-white/50 text-sm font-montserrat mb-3">{s.handle}</p>

              <span
                className="text-lg font-bebas tracking-wide"
                style={{ color: s.color }}
              >
                {s.followers}
              </span>
              <p className="text-white/30 text-xs font-montserrat">abonnés</p>

              <span
                className="mt-4 inline-block text-xs font-semibold tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ color: s.color }}
              >
                Suivre →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
