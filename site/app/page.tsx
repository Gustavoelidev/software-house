import { Navbar } from './components/Navbar'
import { Carousel } from './components/Carousel'
import { projects } from './data/projects'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight max-w-4xl text-neutral-900">
            Criamos produtos digitais elegantes e escaláveis para marcas com visão de futuro.
          </h1>
          <div className="mt-16 flex flex-col sm:flex-row gap-8 items-start sm:items-center text-neutral-500 text-sm md:text-base">
            <p className="max-w-md">
              Somos um estúdio de engenharia de software focado em performance, clean code e design
              centrado no usuário.
            </p>
            <div className="h-[1px] w-12 bg-neutral-300 hidden sm:block" />
            <div className="flex gap-4 font-medium">
              <span>Web.</span>
              <span>Mobile.</span>
              <span>Sistemas.</span>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Projetos Selecionados
            </h2>
            <span className="text-sm text-neutral-400">
              ({String(projects.length).padStart(2, '0')})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group cursor-pointer${index % 2 !== 0 ? ' md:mt-24' : ''}`}
              >
                <div className="mb-6 rounded-sm overflow-hidden">
                  <Carousel images={project.images} interval={3500} aspectRatio={project.aspectRatio} />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500 max-w-sm">{project.description}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 border border-neutral-200 rounded-full text-neutral-500 shrink-0 ml-4">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 md:px-12 py-32 bg-neutral-900 text-neutral-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                Código limpo.<br />Design intencional.
              </h2>
              <p className="text-neutral-400 max-w-md text-lg leading-relaxed mb-8">
                Não acreditamos em soluções pré-fabricadas. Cada linha de código que escrevemos é
                pensada para resolver o seu problema específico, garantindo que o seu produto
                funcione tão bem quanto parece.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium hover-underline"
              >
                Discutir um projeto{' '}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-neutral-800 pt-8 md:border-t-0 md:pt-0">
              <div>
                <h3 className="text-sm text-neutral-500 mb-4">Especialidades</h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>Desenvolvimento Web</li>
                  <li>Aplicativos Nativos</li>
                  <li>Arquitetura de Software</li>
                  <li>Integração de APIs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-4">Tech Stack</h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>React / Next.js</li>
                  <li>Node.js / Python</li>
                  <li>React Native</li>
                  <li>AWS / Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="px-6 md:px-12 pt-32 pb-12 max-w-7xl mx-auto">
        <div className="mb-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">
            Iniciar um projeto
          </p>
          <a
            href="mailto:hello@devhouse.com"
            className="text-4xl md:text-6xl font-medium text-neutral-900 hover:text-neutral-500 transition-colors inline-block"
          >
            hello@devhouse.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-neutral-200">
          <div className="text-sm text-neutral-500">
            <p>&copy; 2026 DevHouse.</p>
            <p>São Paulo, Brasil.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-900">
            <a href="#" className="hover-underline">LinkedIn</a>
            <a href="#" className="hover-underline">GitHub</a>
            <a href="#" className="hover-underline">Dribbble</a>
          </div>
        </div>
      </footer>
    </>
  )
}
