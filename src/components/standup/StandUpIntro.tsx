export default function StandUpIntro() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="font-script text-[#C00020] text-3xl mb-3">On commence par le début...</p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-wide mb-6 leading-tight">
              L&apos;HISTOIRE
              <br />
              DU STAND-UP
            </h2>

            <div className="space-y-4 text-white/65 font-montserrat text-sm leading-relaxed">
              <p>
                Je suis montée sur scène la première fois parce que je <span className="text-white">croyais en quelque chose</span> : que le rire est un acte de résistance.
              </p>
              <p>
                Le stand-up m&apos;a appris à transformer mes expériences, mes doutes, mes joies, en matière première comique. C&apos;est honnête, c&apos;est <span className="text-[#C00020] font-semibold">viscéral</span>, c&apos;est vivant.
              </p>
              <p>
                J&apos;aime particulièrement aller chercher les rires là où ça fait peur : dans la vérité.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: "Spectacles", value: "3" },
                { label: "Années de scène", value: "10+" },
                { label: "Représentations", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111] border border-white/10 rounded-xl p-3 text-center">
                  <p className="font-bebas text-3xl text-[#C00020]">{stat.value}</p>
                  <p className="text-white/40 text-xs font-montserrat mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote */}
          <div className="lg:pt-8">
            <div className="bg-[#111] border border-[#C00020]/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#C00020]/10 font-playfair text-8xl leading-none select-none">
                &rdquo;
              </div>
              <p className="font-playfair text-xl italic text-white/90 leading-relaxed relative z-10">
                &ldquo;Ils ne savaient pas que c&apos;était impossible,
                <br />
                alors ils l&apos;ont fait.&rdquo;
              </p>
              <p className="mt-4 text-white/40 font-montserrat text-sm">— Mark Twain</p>
            </div>

            {/* Process steps */}
            <div className="mt-6 space-y-3">
              {[
                { num: "01", text: "Écriture des textes" },
                { num: "02", text: "Mise en scène & répétitions" },
                { num: "03", text: "Rodages & premières" },
                { num: "04", text: "Tournée & représentations" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-3">
                  <span className="font-bebas text-lg text-[#C00020] w-8">{step.num}</span>
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-white/60 font-montserrat text-sm">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
