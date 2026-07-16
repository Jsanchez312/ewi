import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'
import './AboutStory.css'

const PARAGRAPH =
  'Fokus nació de una idea simple: la mayoría de las marcas no necesitan más ruido, ' +
  'necesitan dirección. Desde el primer proyecto nos propusimos combinar estrategia, ' +
  'diseño y tecnología en un solo equipo, para que cada decisión — visual, técnica o ' +
  'de negocio — apunte exactamente hacia el mismo objetivo: el crecimiento real de tu marca.'

const STATS = [
  { value: '09', label: 'Años de experiencia' },
  { value: '180+', label: 'Marcas impulsadas' },
]

export default function AboutStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.15'],
  })

  const words = PARAGRAPH.split(' ')

  return (
    <section className="story" ref={ref}>
      <div className="container story__inner">
        <div className="story__text-col">
          <Reveal>
            <span className="eyebrow">Nuestra trayectoria</span>
          </Reveal>
          <p className="story__paragraph">
            {words.map((w, i) => (
              <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>
        </div>

        <div className="story__stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="story__stat">
              <span className="story__stat-value">{s.value}</span>
              <span className="story__stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Word({ word, index, total, progress }) {
  const start = index / total
  const end = (index + 1) / total
  const color = useTransform(progress, [start, end], ['#56565c', '#f3f3ef'])

  return (
    <motion.span style={{ color }} className="story__word">
      {word}&nbsp;
    </motion.span>
  )
}
