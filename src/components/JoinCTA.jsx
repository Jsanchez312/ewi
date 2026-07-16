import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import './JoinCTA.css'

export default function JoinCTA() {
  return (
    <section id="cta" className="join">
      <div className="container join__inner">
        <Reveal>
          <span className="eyebrow">Empecemos</span>
        </Reveal>
        <Reveal delay={0.1} as="h2" className="join__title">
          ¡Únete a fokus!
        </Reveal>
        <Reveal delay={0.2} as="p" className="join__text">
          Cuéntanos qué quieres lograr y te mostramos cómo llegar ahí.
        </Reveal>
        <Reveal delay={0.3}>
          <Link to="/contactanos" className="btn btn-solid join__btn">
            Contáctanos
            <span className="btn-arrow">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
