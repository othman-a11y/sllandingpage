import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.54V7.04a4.85 4.85 0 01-1.07-.35z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-3xl tracking-widest text-[#D4AF37]">Sarah Linda</h3>
            <p className="text-white/50 text-sm mt-1 font-montserrat">
              Coach Pratique · Spécialiste internationale de prises de conscience
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm text-white/50 font-montserrat">
            <Link href="/" className="hover:text-white transition-colors">Présentation</Link>
            <Link href="/podcast" className="hover:text-white transition-colors">Podcast</Link>
            <Link href="/stand-up" className="hover:text-white transition-colors">Stand-Up</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-white/30 text-xs font-montserrat">
          <span>© {new Date().getFullYear()} Sarah Linda. Tous droits réservés.</span>
          <Link href="/studio" className="hover:text-white/60 transition-colors">
            Administration
          </Link>
        </div>
      </div>
    </footer>
  );
}
