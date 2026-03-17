export default function PodcastAbout() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cover art */}
          <div className="flex justify-center">
            <div className="relative w-[260px] md:w-[320px]">
              <div className="absolute inset-0 bg-[#E8186D]/30 rounded-2xl blur-2xl scale-110" />
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#E8186D] to-[#B50050]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-montserrat text-xs tracking-widest uppercase opacity-70 mb-1">Avec</p>
                    <p className="font-bebas text-5xl tracking-wider">SARAH</p>
                    <p className="font-bebas text-5xl tracking-wider">LINDA</p>
                    <div className="mt-3 text-4xl">🎙️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-script text-[#E8186D] text-3xl mb-3">L&apos;univers du podcast</p>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide text-white mb-6 leading-tight">
              PODCAST
            </h2>

            <div className="space-y-4 text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
              <p>
                Ici, je te raconte pourquoi j&apos;ai lancé ce podcast — et pourquoi j&apos;ai mis{" "}
                <span className="text-white/50 italic">beaucoup trop de temps à trouver un nom…</span>
              </p>
              <p className="text-white font-semibold">
                Et, j&apos;ai fini par miser sur moi.
              </p>

              <div className="my-5 pl-5 border-l-2 border-[#E8186D]/50 space-y-2">
                <p>Tu y trouveras des <span className="text-white font-semibold">invités vrais</span>, des parcours sincères, des galères racontées sans filtre, des succès assumés, et des sujets de société qui nous concernent tous.</p>
              </div>

              <p className="text-white font-semibold text-base md:text-lg">
                Humour, sincérité et culot :{" "}
                <span className="text-[#E8186D]">c&apos;est la recette.</span>
              </p>

              <p className="text-white/50 italic">
                Bref, bienvenue dans mon univers.
                <br />
                <span className="text-white/70 not-italic font-semibold">Drôle, inspirant et sans filtre.</span>
              </p>
            </div>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8186D] text-white font-bold text-sm tracking-wider uppercase rounded-full hover:bg-[#FF4D9E] transition-all hover:scale-105"
            >
              🎧 Écouter maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
