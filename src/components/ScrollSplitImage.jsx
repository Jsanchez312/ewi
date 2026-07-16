import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ScrollSplitImage.css'

const IMG = 'https://picsum.photos/id/1050/1000/1000'

const QUADRANTS = [
  { area: 'tl', tx: -1, ty: -1, bgX: '0%', bgY: '0%' },
  { area: 'tr', tx: 1, ty: -1, bgX: '100%', bgY: '0%' },
  { area: 'bl', tx: -1, ty: 1, bgX: '0%', bgY: '100%' },
  { area: 'br', tx: 1, ty: 1, bgX: '100%', bgY: '100%' },
]

const TEXT =
  'Investigación, estrategia, creatividad y datos — cuatro piezas que solo funcionan cuando encajan.'

export default function ScrollSplitImage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const gap = useTransform(scrollYProgress, [0, 0.55, 1], [0, 22, 46])
  // The reveal wrapper only ever fades UP to visible and holds — it
  // never maps back toward 0 later in the scroll range.
  const revealOpacity = useTransform(scrollYProgress, [0.22, 0.42], [0, 1], { clamp: true })
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  return (
    <section className="split" ref={containerRef}>
      <div className="split__sticky">
        <motion.div className="split__revealed" style={{ opacity: revealOpacity }}>
          <span className="eyebrow">Nuestro método</span>
          <p className="split__revealed-text">{TEXT}</p>
        </motion.div>

        <motion.div className="split__frame" style={{ scale: frameScale }}>
          {QUADRANTS.map((q) => (
            <Quadrant key={q.area} q={q} gap={gap} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Word({ word, index, total, progress }) {
  // Word-by-word "light up" mapped across a range that finishes well
  // before the pin ends, then holds fully bright — never dims again.
  const start = 0.45 + (index / total) * 0.28
  const end = start + 0.28 / total
  const color = useTransform(progress, [start, end], ['#56565c', '#f3f3ef'])

  return (
    <motion.span style={{ color }} className="split__word">
      {word}&nbsp;
    </motion.span>
  )
}

function Quadrant({ q, gap }) {
  const x = useTransform(gap, (g) => `${g * q.tx}%`)
  const y = useTransform(gap, (g) => `${g * q.ty}%`)

  return (
    <motion.div className={`split__quad split__quad--${q.area}`} style={{ x, y }}>
      <div
        className="split__quad-img"
        style={{
          backgroundImage: `url(${IMG})`,
          backgroundPosition: `${q.bgX} ${q.bgY}`,
        }}
      />
    </motion.div>
  )
}
