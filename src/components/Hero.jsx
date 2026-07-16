import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './Hero.css'

const CARDS = [
  {
    src: 'https://picsum.photos/id/1005/500/640',
    alt: 'Retrato editorial en luz cálida',
    className: 'hero__card hero__card--left',
    depth: 18,
  },
  {
    src: 'https://picsum.photos/id/1074/460/600',
    alt: 'Detalle de estudio creativo',
    className: 'hero__card hero__card--right',
    depth: 26,
  },
  {
    src: 'https://picsum.photos/id/1035/420/560',
    alt: 'Producción de contenido de marca',
    className: 'hero__card hero__card--top',
    depth: 34,
  },
]

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px)
    my.set(py)
  }

  return (
    <section
      id="hero"
      className="hero"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      <div className="hero__ring" aria-hidden="true" />

      <div className="hero__stage">
        {CARDS.map((c) => (
          <HeroCard key={c.alt} card={c} sx={sx} sy={sy} />
        ))}

        <motion.div
          className="hero__center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="eyebrow hero__eyebrow">Agencia de marketing &amp; digitalización</span>
          <h1 className="hero__title">
            FOKUS
            <br />
            EN LO QUE
            <br />
            IMPORTA
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="hero__foot"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero__foot-text">
          Estrategia, diseño y desarrollo trabajando en una sola dirección: hacer crecer tu marca.
        </p>
        <a href="#servicios" className="btn btn-solid">
          Ver todos nuestros servicios
          <span className="btn-arrow">↗</span>
        </a>
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  )
}

function HeroCard({ card, sx, sy }) {
  const x = useTransform(sx, (v) => v * card.depth)
  const y = useTransform(sy, (v) => v * card.depth)
  return (
    <motion.div
      className={card.className}
      style={{ x, y }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={card.src} alt={card.alt} loading="lazy" />
    </motion.div>
  )
}
