import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import './About.css'

const SENTENCE = 'Nos enfocamos en el crecimiento de tu marca. Atraemos gente de todo el mundo hacia ti.'

export default function About() {
  const words = SENTENCE.split(' ')

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <Reveal>
          <span className="eyebrow">Sobre fokus</span>
        </Reveal>

        <motion.p
          className="about__sentence"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.028 }}
        >
          {words.map((w, i) => (
            <motion.span
              className="about__word"
              key={i}
              variants={{
                hidden: { opacity: 0.12, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </motion.p>

        <Reveal delay={0.15} className="about__meta">
          <div className="about__meta-item">
            <span className="about__meta-num">08+</span>
            <span className="about__meta-label">años construyendo marcas</span>
          </div>
          <div className="about__meta-item">
            <span className="about__meta-num">120+</span>
            <span className="about__meta-label">proyectos lanzados</span>
          </div>
          <div className="about__meta-item">
            <span className="about__meta-num">15</span>
            <span className="about__meta-label">países alcanzados</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
