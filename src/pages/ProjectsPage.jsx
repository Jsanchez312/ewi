import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { PROJECTS } from '../data/projects.js'
import './ProjectsPage.css'

const PORTFOLIO_IMAGES = [
  'https://picsum.photos/id/1011/1200/1500',
  'https://picsum.photos/id/1025/1200/1500',
  'https://picsum.photos/id/1005/1200/1500',
  'https://picsum.photos/id/1039/1200/1500',
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="portfolio">
        <section className="portfolio__hero">
          <img src="https://picsum.photos/id/1015/2200/1200" alt="Composición editorial de Fokus" />
          <div className="portfolio__hero-shade" />
          <motion.div className="portfolio__hero-content" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="eyebrow">Nuestro portafolio</span>
            <h1>Proyectos que convierten ideas en impulso.</h1>
            <p>Selección de trabajos donde estrategia, identidad y tecnología se encuentran.</p>
          </motion.div>
        </section>

        <section className="portfolio__list" aria-label="Proyectos destacados">
          {PROJECTS.map((project, index) => (
            <article className="portfolio__wrap" key={project.id} style={{ zIndex: index + 1 }}>
              <motion.div className="portfolio__card" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <div className="portfolio__image"><img src={PORTFOLIO_IMAGES[index]} alt={project.title} loading="lazy" /></div>
                <div className="portfolio__details">
                  <div className="portfolio__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <p className="portfolio__number">0{index + 1}</p>
                  <h2>{project.title}</h2>
                  <p className="portfolio__desc">{project.desc}</p>
                  <Link to="/contactanos" className="portfolio__link">Hablemos de tu proyecto <b>↗</b></Link>
                </div>
              </motion.div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
