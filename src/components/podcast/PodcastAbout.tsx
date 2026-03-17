export default function PodcastAbout() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cover art */}
          <div className="flex justify-center">
            <div className="relative w-[260px] md:w-[320px]">
              {/* Glow effect */}
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

            {/* Big quote */}
            <div className="relative pl-6 border-l-2 border-[#E8186D]/50 mb-6">
              <p className="font-playfair text-lg md:text-xl italic text-white/90 leading-relaxed">
                &ldquo;Tu reconnais quelqu&apos;un parce que j&apos;ai changé de chemin pour trouver un nord.
                J&apos;ai peut-être eu des allers-retours.&rdquo;
              </p>
            </div>

            <div className="space-y-3 text-white/65 font-montserrat text-sm leading-relaxed">
              <p>
                Tu trouveras des <span className="text-white font-semibold">témoignages sincères</span>, des parcours
                inspirants, des personnes qui font des sans filtres. Des succès retentissants et des leçons de
                vie pour un mouvement ultime.
              </p>
              <p className="text-white/80 font-semibold">
                Humour, sincérité et culot : c&apos;est ce qui le définit.
              </p>
              <p className="text-[#E8186D] font-semibold">
                Bref, ils veulent du mieux et mieux.
                <br />Et toi, top on sort et serves Filtre !
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
