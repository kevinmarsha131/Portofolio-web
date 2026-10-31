const techSkills = [
  { name: 'Laravel', type: 'Backend' },
  { name: 'Flutter', type: 'Mobile' },
  { name: 'React', type: 'Frontend' },
  { name: 'Tailwind CSS', type: 'Styling' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Supabase', type: 'BaaS & DB' },
  { name: 'Alpine.js', type: 'Light JS' },
  { name: 'BLoC Pattern', type: 'Architecture' },
]

function About() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 uppercase leading-[0.9]">
          ABOUT<span className="text-zinc-400 dark:text-zinc-600">.</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-3">
          // BACKGROUND & CORE TECH STACK
        </p>
      </div>

      {/* Grid Layout: 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Perkenalan */}
        <div className="lg:col-span-7">
          <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-[5px_5px_0_0_currentColor] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-950 dark:border-zinc-50 font-mono text-xs">
              <span className="font-black text-zinc-950 dark:text-zinc-50">KEVIN MARSHA</span>
              <span className="text-zinc-500">D4 SIB POLINEMA</span>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang. Lebih sering berkutat di balik layar membangun logika backend dan aplikasi mobile, tapi tetap peduli detail antarmuka pengguna.
            </p>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Pernah ngerjain beberapa aplikasi dari nol: mulai dari platform e-commerce <strong className="text-zinc-950 dark:text-zinc-50 font-bold">FloristSync</strong> sampai aplikasi mobile <strong className="text-zinc-950 dark:text-zinc-50 font-bold">BuildMatch</strong>. Nggak suka kode yang kebanyakan boilerplate—prinsipnya sederhana: bersih, mudah dibaca orang lain, dan langsung nyelesaiin masalah.
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Tech Stack */}
        <div className="lg:col-span-5">
          <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-[5px_5px_0_0_currentColor] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-950 dark:border-zinc-50">
              <h2 className="font-mono font-black text-sm uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
                TECH_STACK //
              </h2>
              <span className="font-mono text-xs text-zinc-500">8 TOOLS</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {techSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold text-zinc-950 dark:text-zinc-50 shadow-[2px_2px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_currentColor] transition-all"
                >
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-normal">
                    [{tech.type}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
