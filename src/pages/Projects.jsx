import { useState, useMemo } from 'react'
import useGitHubProjects from '../hooks/useGitHubProjects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const { projects, loading, error, refetch } = useGitHubProjects()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('ALL')

  // Ekstrak daftar bahasa pemrograman yang unik dari data repository
  const availableLanguages = useMemo(() => {
    const langs = new Set()
    projects.forEach((repo) => {
      if (repo.language) {
        langs.add(repo.language)
      }
    })
    return ['ALL', ...Array.from(langs).sort()]
  }, [projects])

  // Filter repositori berdasarkan teks pencarian dan pilihan bahasa
  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return projects.filter((project) => {
      const matchSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        (project.description && project.description.toLowerCase().includes(query)) ||
        (project.topics && project.topics.some((t) => t.toLowerCase().includes(query)))

      const matchLang =
        selectedLanguage === 'ALL' || project.language === selectedLanguage

      return matchSearch && matchLang
    })
  }, [projects, searchQuery, selectedLanguage])

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedLanguage('ALL')
  }

  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex flex-wrap items-baseline gap-4">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 uppercase leading-[0.9]">
            PROJECTS<span className="text-zinc-400 dark:text-zinc-600">.</span>
          </h1>
          {!loading && !error && (
            <span className="font-mono text-xs font-bold px-2.5 py-1 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 shadow-[2px_2px_0_0_currentColor]">
              {projects.length} REPOS
            </span>
          )}
        </div>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-3">
          // REPOSITORI PUBLIK LANGSUNG DARI GITHUB API
        </p>
      </div>

      {/* Search & Filter Toolbar (Hanya muncul jika data berhasil dimuat) */}
      {!loading && !error && projects.length > 0 && (
        <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-4 sm:p-5 shadow-[4px_4px_0_0_currentColor] space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama proyek, deskripsi, atau topic..."
                className="w-full px-3.5 py-2 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-hidden focus:bg-white dark:focus:bg-zinc-900 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Counter */}
            <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap self-end sm:self-center">
              SHOWING {filteredProjects.length} OF {projects.length}
            </div>
          </div>

          {/* Quick Language Filter Pills */}
          {availableLanguages.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-[11px] font-bold text-zinc-500 mr-1">
                FILTER:
              </span>
              {availableLanguages.map((lang) => {
                const isActive = selectedLanguage === lang
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 border-2 transition-all cursor-pointer ${
                      isActive
                        ? 'border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 shadow-[2px_2px_0_0_currentColor]'
                        : 'border-zinc-400 dark:border-zinc-700 bg-transparent text-zinc-700 dark:text-zinc-300 hover:border-zinc-950 dark:hover:border-zinc-50'
                    }`}
                  >
                    {lang}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Loading State: Neo-Brutalist Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border-2 border-dashed border-zinc-400 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 p-6 shadow-[4px_4px_0_0_currentColor] animate-pulse flex flex-col justify-between h-52 font-mono text-xs"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-16 h-4 bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="h-5 bg-zinc-300 dark:bg-zinc-700 w-3/4" />
                <div className="h-3 bg-zinc-200 dark:bg-zinc-800 w-full" />
                <div className="h-3 bg-zinc-200 dark:bg-zinc-800 w-2/3" />
              </div>
              <div className="pt-3 border-t border-zinc-300 dark:border-zinc-800 flex gap-2">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 w-12" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 w-16" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="border-2 border-red-600 bg-red-50 dark:bg-red-950/40 p-6 sm:p-8 max-w-lg mx-auto shadow-[5px_5px_0_0_#dc2626] font-mono">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-black text-sm uppercase">
            <span>[!] ERROR_FETCHING_REPOS</span>
          </div>
          <p className="text-xs text-red-600 dark:text-red-300 mt-2 leading-relaxed">
            {error}
          </p>
          <button
            type="button"
            onClick={refetch}
            className="mt-5 inline-flex items-center gap-2 border-2 border-red-700 bg-red-600 text-white px-4 py-2 font-mono text-xs font-bold uppercase shadow-[2px_2px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
          >
            <span>COBA LAGI</span>
            <span>↺</span>
          </button>
        </div>
      )}

      {/* Empty State: Tidak ada repo sama sekali dari API */}
      {!loading && !error && projects.length === 0 && (
        <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-8 text-center max-w-md mx-auto shadow-[4px_4px_0_0_currentColor] font-mono text-xs">
          [!] BELUM ADA REPOSITORI PUBLIK DITEMUKAN.
        </div>
      )}

      {/* Empty State: Hasil Filter Kosong */}
      {!loading && !error && projects.length > 0 && filteredProjects.length === 0 && (
        <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-8 text-center max-w-md mx-auto shadow-[4px_4px_0_0_currentColor] font-mono text-xs space-y-3">
          <p className="font-bold text-zinc-900 dark:text-zinc-100">
            [!] TIDAK ADA PROYEK YANG SESUAI DENGAN FILTER.
          </p>
          <p className="text-zinc-500">
            Coba kata kunci lain atau reset filter bahasa.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 px-3 py-1 font-bold uppercase shadow-[2px_2px_0_0_currentColor] cursor-pointer"
          >
            RESET FILTER
          </button>
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id || project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
