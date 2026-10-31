import useGitHubProjects from '../hooks/useGitHubProjects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const { projects, loading, error, refetch } = useGitHubProjects()

  return (
    <section className="space-y-10">
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

      {/* Empty State */}
      {!loading && !error && projects.length === 0 && (
        <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-8 text-center max-w-md mx-auto shadow-[4px_4px_0_0_currentColor] font-mono text-xs">
          [!] BELUM ADA REPOSITORI PUBLIK DITEMUKAN.
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id || project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
