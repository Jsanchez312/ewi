import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TESTIMONIALS } from '../data/testimonials.js'
import './Testimonials.css'

// Reveal windows are packed into the first 65% of the pin's scroll
// distance and then HOLD (no card range ever maps back toward 0),
// leaving a settled stretch at the end where everything already
// shown just stays on screen before the section releases.
const LAYOUT = [
  { pos: 'tl', start: 0.08 },
  { pos: 'tr', start: 0.18 },
  { pos: 'ml', start: 0.28 },
  { pos: 'mr', start: 0.38 },
  { pos: 'bl', start: 0.48 },
  { pos: 'br', start: 0.58 },
]

export default function Testimonials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const wordScale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1])
  const wordOpacity = useTransform(scrollYProgress, [0, 0.15], [0.5, 1])

  return (
    <section className="test" ref={ref}>
      <div className="test__sticky">
        <motion.h2 className="test__word" style={{ scale: wordScale, opacity: wordOpacity }}>
          TESTIMONIOS
        </motion.h2>

        <span className="eyebrow test__eyebrow">Lo que dicen nuestros clientes</span>

        {TESTIMONIALS.slice(0, LAYOUT.length).map((t, i) => (
          <Card key={t.name} t={t} layout={LAYOUT[i]} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

function Card({ t, layout, progress }) {
  // Output stays clamped at 1 forever once the window passes —
  // it never maps back down, so nothing that has appeared can hide.
  const opacity = useTransform(progress, [layout.start, layout.start + 0.1], [0, 1])
  const y = useTransform(progress, [layout.start, layout.start + 0.12], [36, 0])

  return (
    <motion.div className={`test__card test__card--${layout.pos}`} style={{ opacity, y }}>
      <img className="test__avatar" src={t.avatar} alt={t.name} loading="lazy" />
      <p className="test__quote">{t.quote}</p>
      <div className="test__footer">
        <div>
          <p className="test__name">{t.name}</p>
          <p className="test__role">{t.role}</p>
        </div>
        <span className="test__brand">{t.brand}</span>
      </div>
    </motion.div>
  )
}
