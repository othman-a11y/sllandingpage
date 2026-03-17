const platforms = [
  {
    name: "YouTube",
    description: "Regardez les épisodes en vidéo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "#FF0000",
    bg: "#FF000015",
    border: "#FF000030",
    href: "https://youtube.com",
    badge: "Vidéos",
  },
  {
    name: "Spotify",
    description: "Écoutez sur Spotify",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    color: "#1DB954",
    bg: "#1DB95415",
    border: "#1DB95430",
    href: "https://spotify.com",
    badge: "Audio",
  },
  {
    name: "Apple Podcasts",
    description: "Disponible sur Apple Podcasts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.007 4.8c3.4 0 6.213 2.486 6.677 5.752a.6.6 0 0 1-.523.678.6.6 0 0 1-.68-.522C16.4 8.03 14.4 6.0 12 6.0c-3.313 0-6 2.688-6 6a5.993 5.993 0 0 0 4.38 5.774.6.6 0 0 1 .42.738.6.6 0 0 1-.739.42A7.194 7.194 0 0 1 4.8 12c0-3.977 3.223-7.2 7.2-7.2zm0 2.7a4.5 4.5 0 0 1 4.5 4.5 4.5 4.5 0 0 1-.75 2.483v3.674a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-1.252a3.15 3.15 0 0 1-.75.09 3.15 3.15 0 0 1-.75-.09v1.252a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-3.674A4.5 4.5 0 0 1 7.65 12a4.5 4.5 0 0 1 3.697-4.43zm0 1.5A3 3 0 0 0 8.35 12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
      </svg>
    ),
    color: "#B95FBB",
    bg: "#B95FBB15",
    border: "#B95FBB30",
    href: "https://podcasts.apple.com",
    badge: "Podcast",
  },
];

export default function EpisodesSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-script text-[#E8186D] text-2xl mb-2">Sur toutes les plateformes</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            ÉPISODES DISPONIBLES
          </h2>
          <div className="mt-3 h-px w-32 bg-[#E8186D]/40 mx-auto" />
          <p className="mt-4 text-white/50 font-montserrat text-sm">
            Retrouvez tous les épisodes sur vos plateformes favorites
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex flex-col items-center text-center p-8 rounded-2xl border transition-all group"
              style={{ background: p.bg, borderColor: p.border }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ color: p.color, background: `${p.color}20` }}
              >
                {p.icon}
              </div>

              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                style={{ color: p.color, background: `${p.color}15` }}
              >
                {p.badge}
              </span>

              <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">{p.name}</h3>
              <p className="text-white/50 font-montserrat text-sm">{p.description}</p>

              <span
                className="mt-5 text-xs font-semibold tracking-wider uppercase"
                style={{ color: p.color }}
              >
                Écouter →
              </span>
            </a>
          ))}
        </div>

        {/* Latest episodes placeholder */}
        <div className="mt-16">
          <h3 className="font-bebas text-3xl text-white tracking-wide text-center mb-8">
            DERNIERS ÉPISODES
          </h3>
          <div className="space-y-4">
            {[
              { num: "Épisode 200+", title: "L'art de se réinventer", duration: "45 min" },
              { num: "Épisode 199", title: "Rire pour mieux avancer", duration: "38 min" },
              { num: "Épisode 198", title: "Les émotions comme carburant", duration: "52 min" },
            ].map((ep, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#111] border border-white/10 rounded-xl px-5 py-4 hover:border-[#E8186D]/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8186D]/10 border border-[#E8186D]/20 flex items-center justify-center text-[#E8186D] text-sm font-bold group-hover:bg-[#E8186D]/20 transition-colors">
                    ▶
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-montserrat">{ep.num}</p>
                    <p className="text-white font-semibold font-montserrat text-sm">{ep.title}</p>
                  </div>
                </div>
                <span className="text-white/30 text-xs font-montserrat">{ep.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
