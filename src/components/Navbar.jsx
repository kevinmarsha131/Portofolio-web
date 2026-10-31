import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-950 transition-colors duration-150">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-1.5 font-mono text-base font-black tracking-tight uppercase text-zinc-950 dark:text-zinc-50 hover:opacity-80 transition-opacity"
          >
            <span>KEVIN.MARSHA</span>
            <span className="text-zinc-400 dark:text-zinc-600">//</span>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                      isActive
                        ? 'border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 shadow-[2px_2px_0_0_currentColor]'
                        : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:border-zinc-950 dark:hover:border-zinc-50 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              title={isDark ? 'Mode Terang' : 'Mode Gelap'}
              className="p-1.5 border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-[2px_2px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
            >
              {isDark ? (
                // Sun icon
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                // Moon icon
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1.5 border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-[2px_2px_0_0_currentColor] active:translate-x-0 active:translate-y-0 transition-all cursor-pointer"
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              className="p-1.5 border-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-[2px_2px_0_0_currentColor] active:translate-x-0 active:translate-y-0 transition-all cursor-pointer"
            >
              {isOpen ? (
                // Close icon (X)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-zinc-950 dark:border-zinc-50 bg-white dark:bg-zinc-950 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider border-2 ${
                  isActive
                    ? 'border-zinc-950 dark:border-zinc-50 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 shadow-[2px_2px_0_0_currentColor]'
                    : 'border-transparent text-zinc-700 dark:text-zinc-300 hover:border-zinc-950 dark:hover:border-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
