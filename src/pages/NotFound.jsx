import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="py-12 sm:py-20 max-w-xl mx-auto space-y-6">
      <div className="border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 p-8 sm:p-10 shadow-[6px_6px_0_0_currentColor] space-y-5">
        <div className="font-mono text-xs text-zinc-500 pb-2 border-b-2 border-zinc-950 dark:border-zinc-50">
          HTTP_STATUS // 404
        </div>

        <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 uppercase leading-none font-mono">
          404<span className="text-zinc-400 dark:text-zinc-600">_</span>
        </h1>

        <p className="text-sm font-mono text-zinc-800 dark:text-zinc-200 uppercase font-bold">
          // PAGE_NOT_FOUND
        </p>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Halaman yang kamu tuju nggak ada, URL-nya salah ketik, atau mungkin udah dipindah.
        </p>

        <div className="pt-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
          >
            <span>← KEMBALI KE HOME</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound

