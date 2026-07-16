import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { PROJECTS } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="container projects__head">
        <Reveal>
          <span className="eyebrow">Lo que hacemos</span>
        </Reveal>
        <Reveal delay={0.1} as="h2" className="projects__title">
          Servicios pensados para mover números, no solo pixeles.
        </Reveal>
      </div>

      <div className="projects__stack">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.55])
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  return (
    <div className="projects__wrap" ref={wrapRef} style={{ zIndex: index + 1 }}>
      <motion.div
        className={`projects__card ${index % 2 === 1 ? 'projects__card--reverse' : ''}`}
        style={{ scale, filter }}
      >
        <div className="projects__media">
          <img src={project.img} alt={project.title} loading="lazy" />
        </div>

        <div className="projects__body">
          <div className="projects__tags">
            {project.tags.map((t) => (
              <span key={t} className="projects__tag">
                {t}
              </span>
            ))}
          </div>

          <h3 className="projects__card-title">{project.title}</h3>

          <p className="projects__desc">{project.desc}</p>

          <div className="projects__divider" />

          <Link to="/contactanos" className="projects__cta">
            <span className="projects__cta-text">Ver proyecto</span>
            <span className="projects__cta-circle">↗</span>
          </Link>

          <span className="projects__index">0{index + 1}</span>
        </div>
      </motion.div>
    </div>
  )
}
