import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { SERVICES } from '../data/services.js'
import './ServicesAccordion.css'

export default function ServicesAccordion() {
  return (
    <section id="servicios" className="acc">
      <div className="container acc__inner">
        <Reveal>
          <span className="eyebrow">Cómo trabajamos</span>
        </Reveal>

        <div className="acc__list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.06} as="div">
              <Link to="/como-trabajamos" className="acc__row">
                <div className="acc__row-top">
                  <span className="acc__num">#0{i + 1}</span>
                  <h3 className="acc__title">
                    {s.title}

                  </h3>
                  <span className="acc__circle">↗</span>
                </div>
                <p className="acc__desc">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
