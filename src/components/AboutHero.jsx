import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AboutHero.css'

// Generates a fan of pleated "ribbon" bands to approximate a soft
// abstract wave shape behind the heading — pure SVG, no external assets.
const BANDS = Array.from({ length: 16 }, (_, i) => {
  const t = i / 15 // 0..1
  const centerBias = 1 - Math.abs(t - 0.42) * 1.5 // taller near left-center
  const height = Math.max(0.28, centerBias) * 340 + 60
  return { x: 40 + i * 92, height }
})

export default function AboutHero() {
  return (
    <section className="ahero">
      <div className="ahero__waves" aria-hidden="true">
        <svg viewBox="0 0 1520 520" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
              <stop offset="55%" stopColor="var(--accent-dim)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {BANDS.map((b, i) => (
            <path
              key={i}
              d={`M ${b.x} 520 Q ${b.x - 46} ${520 - b.height * 0.55} ${b.x} ${520 - b.height} Q ${b.x + 46} ${520 - b.height * 0.55} ${b.x} 520 Z`}
              fill="url(#band)"
              opacity={0.35 + (i % 3) * 0.12}
            />
          ))}
        </svg>
        <div className="ahero__glow" />
      </div>

      <div className="ahero__content">
        <motion.h1
          className="ahero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Construimos marcas
          <br />
          que la gente recuerda
        </motion.h1>

        <motion.div
          className="ahero__crumb"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <Link to="/">Inicio</Link>
          <span className="ahero__crumb-sep">＋</span>
          <span>Sobre fokus</span>
        </motion.div>
      </div>
    </section>
  )
}
