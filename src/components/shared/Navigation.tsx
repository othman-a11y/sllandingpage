"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Présentation" },
  { href: "/podcast", label: "Podcast" },
  { href: "/stand-up", label: "Stand-Up" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Hide nav inside Sanity Studio
  if (pathname.startsWith("/studio")) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bebas text-2xl tracking-widest text-white hover:text-[#D4AF37] transition-colors">
          Sarah Linda
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-montserrat text-sm font-semibold tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? "text-[#D4AF37]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 px-5 py-2 bg-[#D4AF37] text-black font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-[#F0D060] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-semibold text-sm tracking-widest uppercase py-2 ${
                pathname === link.href ? "text-[#D4AF37]" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-[#D4AF37] text-black font-semibold text-sm tracking-wider uppercase rounded-full text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
