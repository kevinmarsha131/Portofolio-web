import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="py-6 sm:py-12 space-y-12">
      {/* Hero Section: 2 Kolom di Desktop, 1 Kolom di Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Kolom Kiri: Teks Perkenalan & Tombol CTA */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 border-2 border-current bg-white dark:bg-zinc-900 px-3 py-1 font-mono text-xs font-bold uppercase shadow-[2px_2px_0_currentColor]">
            <span className="w-2 h-2 bg-emerald-500"></span>
            <span>AVAILABLE FOR PROJECTS // SIB POLINEMA</span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 uppercase leading-[0.9]">
            KEVIN <br />
            MARSHA<span className="text-zinc-400 dark:text-zinc-600">.</span>
          </h1>

          {/* Punchy Human-written Subtitle */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
            Full-Stack Web & Mobile Developer. Bikin aplikasi web pakai Laravel/React dan mobile pakai Flutter. Fokus ke fungsi, arsitektur rapi, dan hasil nyata—bukan sekadar tampilan manis.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border-2 border-current bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 px-6 py-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
            >
              <span>LIHAT PROYEK</span>
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-current bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 px-6 py-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
            >
              <span>HUBUNGI SAYA</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil Anti-Slop */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            <img
              src="/profile.jpg"
              alt="Foto Kevin Marsha Hafish Andrika"
              className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-sm border-2 border-current shadow-[8px_8px_0_currentColor] transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Quick Specs Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t-2 border-zinc-950 dark:border-zinc-50">
        <div className="border-2 border-current bg-white dark:bg-zinc-900 p-5 shadow-[4px_4px_0_currentColor]">
          <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            [01] PRIMARY_STACK
          </div>
          <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
            Laravel, Flutter, React, Tailwind CSS, PostgreSQL.
          </p>
        </div>

        <div className="border-2 border-current bg-white dark:bg-zinc-900 p-5 shadow-[4px_4px_0_currentColor]">
          <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            [02] DISCIPLINE
          </div>
          <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
            Clean Architecture, modular code, no over-engineering.
          </p>
        </div>

        <div className="border-2 border-current bg-white dark:bg-zinc-900 p-5 shadow-[4px_4px_0_currentColor]">
          <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            [03] LOCATION
          </div>
          <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
            Malang, Indonesia (WIB / UTC+7). Open remote.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
