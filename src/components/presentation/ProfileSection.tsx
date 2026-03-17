import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-script text-[#D4AF37] text-2xl mb-3">Qui suis-je ?</p>
            <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white mb-6 leading-tight">
              SARAH LINDA,
              <br />
              <span className="text-[#D4AF37]">PROFIL HYBRIDE</span>
            </h2>

            <div className="space-y-4 text-white/75 font-montserrat text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-white">Humoriste, Productrice d&apos;événements</span> et créatrice de contenu{" "}
                <span className="text-white/40 italic">(on essaie).</span>
              </p>
              <p>
                C&apos;est comme ça que je me définis.
              </p>
              <p>
                Enfin une{" "}
                <span className="text-[#D4AF37] font-bold tracking-wider">BOSS LADY</span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { num: "200+", label: "Épisodes de podcast" },
                { num: "3", label: "Spectacles" },
                { num: "10+", label: "Années d'expérience" },
                { num: "∞", label: "Énergie & humour" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111] border border-white/10 rounded-xl p-4">
                  <p className="font-bebas text-3xl text-[#D4AF37]">{stat.num}</p>
                  <p className="text-white/50 text-xs font-montserrat mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 border border-[#D4AF37]/30 rounded-2xl" />
              <div className="absolute -inset-6 border border-[#D4AF37]/10 rounded-3xl" />

              <div className="relative w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <Image
                  src="/images/sarah-linda-profile.jpg"
                  alt="Sarah Linda – profil"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent" />
              </div>

              {/* Crown badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-2xl">
                👑
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
