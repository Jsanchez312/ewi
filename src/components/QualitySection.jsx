import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { Icon } from './icons.jsx'
import { QUALITY } from '../data/quality.js'
import './QualitySection.css'

export default function QualitySection() {
  return (
    <section className="quality">
      <div className="container">
        <div className="quality__head">
          <Reveal className="quality__head-text">
            <span className="eyebrow">Nuestro enfoque</span>
            <h2 className="quality__title">
              Calidad en cada
              <br />
              etapa del proceso
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/contactanos" className="quality__cta">
              Hablemos ahora
              <span>↗</span>
            </Link>
          </Reveal>
        </div>

        <div className="quality__divider" />

        <div className="quality__grid">
          {QUALITY.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.08} className="quality__item">
              <Icon name={q.icon} className="quality__icon" />
              <h3 className="quality__item-title">{q.title}</h3>
              <p className="quality__item-desc">{q.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
