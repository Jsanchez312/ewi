import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { TEAM } from '../data/team.js'
import './TeamSection.css'

// Each card starts stacked near the center (rotated + scaled down,
// as if pulled off a deck) and animates into its own grid slot the
// first time it scrolls into view.
const STACK_OFFSETS = [
  { x: -60, y: 40, rotate: -10 },
  { x: 30, y: 60, rotate: 6 },
  { x: -30, y: 50, rotate: 8 },
  { x: 55, y: 35, rotate: -7 },
]

export default function TeamSection() {
  return (
    <section className="team">
      <div className="container team__inner">
        <Reveal className="team__head">
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="team__title">Nuestro equipo</h2>
        </Reveal>

        <div className="team__grid">
          {TEAM.map((m, i) => {
            const offset = STACK_OFFSETS[i % STACK_OFFSETS.length]
            return (
              <motion.div
                className="team__card"
                key={m.name}
                initial={{
                  opacity: 0,
                  scale: 0.82,
                  x: offset.x,
                  y: offset.y + 60,
                  rotate: offset.rotate,
                }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="team__flip">
                  <div className="team__flip-inner">
                    <div className="team__front">
                      <img src={m.img} alt={m.name} loading="lazy" />
                      <span className="team__plus" aria-hidden="true">
                        +
                      </span>
                    </div>
                    <div className="team__back">
                      <p className="team__back-bio">{m.bio}</p>
                      <span className="team__back-name">{m.name}</span>
                      <span className="team__back-role">{m.role}</span>
                    </div>
                  </div>
                </div>
                <div className="team__caption">
                  <span className="team__role">{m.role}</span>
                  <span className="team__name">{m.name}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
