import Link from "next/link";
import Image from "next/image";

const spectacles = [
  {
    num: 1,
    title: "LA FOLIE",
    subtitle: "Spectacle N°1",
    description:
      "Le premier spectacle de Sarah Linda. Là où tout a commencé. Un show brut, authentique, plein de cette énergie folle qui caractérise son style.",
    image: "/images/spectacle-la-folie.jpg",
    color: "#C00020",
    status: "Passé",
    year: "2019",
  },
  {
    num: 2,
    title: "L'APAISEMENT",
    subtitle: "Spectacle N°2",
    description:
      "Le second opus. Plus mature, plus profond. Sarah Linda explore la dualité entre la douleur et la sérénité, entre le cri et le rire doux.",
    image: "/images/spectacle-apaisement.jpg",
    color: "#C00020",
    status: "En tournée",
    year: "2022",
  },
];

export default function SpectaclesSection() {
  return (
    <section id="spectacles" className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-script text-[#C00020] text-2xl mb-2">Avant</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            MES SPECTACLES
          </h2>
          <div className="mt-3 h-px w-32 bg-[#C00020]/40 mx-auto" />
        </div>

        {/* Spectacles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spectacles.map((s) => (
            <div
              key={s.num}
              className="card-hover group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C00020]/40 transition-all"
            >
              {/* Number badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="w-10 h-10 rounded-full bg-[#C00020] flex items-center justify-center">
                  <span className="font-bebas text-xl text-white">{s.num}</span>
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    s.status === "En tournée"
                      ? "bg-[#1ABC9C]/20 text-[#1ABC9C] border border-[#1ABC9C]/30"
                      : "bg-white/10 text-white/50 border border-white/10"
                  }`}
                >
                  {s.status}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#C00020]/20 to-[#0A0A0A]">
                <Image
                  src={s.image}
                  alt={`Spectacle ${s.title}`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-script text-[#C00020] text-lg mb-1">{s.subtitle}</p>
                <h3 className="font-bebas text-3xl text-white tracking-wide mb-3">{s.title}</h3>
                <p className="text-white/60 font-montserrat text-sm leading-relaxed mb-5">
                  {s.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-white/30 font-montserrat text-xs">{s.year}</span>
                  {s.status === "En tournée" ? (
                    <Link
                      href="#contact"
                      className="px-5 py-2 bg-[#C00020] text-white text-xs font-bold tracking-wider uppercase rounded-full hover:bg-[#E00030] transition-colors"
                    >
                      Réserver
                    </Link>
                  ) : (
                    <span className="px-5 py-2 border border-white/10 text-white/30 text-xs rounded-full">
                      Voir en replay
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow between */}
        <div className="flex justify-center mt-8 mb-4">
          <div className="flex items-center gap-3 text-white/30">
            <div className="h-px w-12 bg-white/10" />
            <span className="font-bebas text-2xl text-[#C00020]">&gt;&gt;</span>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </div>

        {/* Coming soon */}
        <div className="bg-[#C00020]/5 border border-[#C00020]/20 rounded-2xl p-8 text-center">
          <p className="font-bebas text-3xl text-white tracking-wide mb-2">
            PROCHAIN SPECTACLE
          </p>
          <p className="font-montserrat text-white/50 text-sm mb-5">
            Sarah Linda est en pleine création de son nouveau show. Restez connectés !
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 border border-[#C00020] text-[#C00020] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#C00020] hover:text-white transition-all"
          >
            Être informé en premier
          </Link>
        </div>
      </div>
    </section>
  );
}
