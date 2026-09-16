export function Navbar() {
  return (
    <header className="w-full px-6 py-8 md:px-12 flex justify-between items-center fixed top-0 bg-neutral-50/90 backdrop-blur-sm z-50">
      <a href="#" className="text-sm font-semibold tracking-tight">DEVHOUSE.</a>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
        <a href="#work" className="hover:text-neutral-900 transition-colors">Trabalhos</a>
        <a href="#about" className="hover:text-neutral-900 transition-colors">Abordagem</a>
        <a href="#contact" className="hover:text-neutral-900 transition-colors">Contato</a>
      </nav>

      <a href="mailto:hello@devhouse.com" className="text-sm font-medium hover-underline hidden md:block">
        hello@devhouse.com
      </a>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-neutral-900 focus:outline-none" aria-label="Menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </header>
  )
}
