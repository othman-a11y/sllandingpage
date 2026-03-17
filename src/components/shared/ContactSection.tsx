"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "Demande de renseignements",
  "Demande de prix / Devis",
  "Réservation spectacle",
  "Collaboration / Partenariat",
  "Événement d'entreprise",
  "Autre",
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: subjects[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-script text-[#D4AF37] text-3xl mb-2">Travaillons ensemble</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">CONTACT</h2>
          <p className="mt-4 text-white/50 font-montserrat text-sm max-w-md mx-auto">
            Pour toute demande de prestation, devis, collaboration ou renseignement, envoyez votre message ci-dessous.
          </p>
          <div className="mt-4 h-px w-24 bg-[#D4AF37]/40 mx-auto" />
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="text-center bg-[#1ABC9C]/10 border border-[#1ABC9C]/30 rounded-2xl p-10">
            <CheckCircle size={48} className="text-[#1ABC9C] mx-auto mb-4" />
            <h3 className="font-bebas text-3xl text-white tracking-wide mb-2">Message envoyé !</h3>
            <p className="text-white/60 font-montserrat text-sm">
              Merci pour votre message. Sarah Linda reviendra vers vous dans les plus brefs délais.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 px-6 py-2.5 border border-[#1ABC9C]/40 text-[#1ABC9C] text-sm font-semibold rounded-full hover:bg-[#1ABC9C]/10 transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-5"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 font-montserrat">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-montserrat text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 font-montserrat">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-montserrat text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 font-montserrat">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+33 6 00 00 00 00"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-montserrat text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 font-montserrat">
                Objet *
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all appearance-none cursor-pointer"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 font-montserrat">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Décrivez votre projet, votre demande..."
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 font-montserrat text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all resize-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertCircle size={16} />
                <span className="text-sm font-montserrat">Une erreur est survenue. Veuillez réessayer.</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4AF37] text-black font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-[#F0D060] transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02]"
            >
              {status === "loading" ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
