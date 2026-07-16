import { Link } from 'react-router-dom'
import Marquee from './Marquee.jsx'
import Reveal from './Reveal.jsx'
import './Footer.css'

const USEFUL = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '/contactanos' },
]

const PAGES = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Testimonios', href: '#cta' },
]

const SOCIAL = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'X / Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__top">
        <Reveal className="foot__contact">
          <p className="foot__logo">fokus</p>
          <a href="mailto:hola@fokus.agency">hola@fokus.agency</a>
          <a href="tel:+573001234567">+57 300 123 4567</a>
          <p>Cra. 14 #93-40, Bogotá, Colombia</p>
        </Reveal>

        <div className="foot__cols">
          <Reveal delay={0.05} className="foot__col">
            <span>Enlaces útiles</span>
            {USEFUL.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="foot__col">
            <span>Páginas</span>
            {PAGES.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="foot__col">
            <span>Redes</span>
            {SOCIAL.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="foot__marquee">
        <Marquee text="TRABAJA CON FOKUS" outline speed={26} />
      </div>

      <div className="container foot__bottom">
        <p>© {new Date().getFullYear()} fokus. Todos los derechos reservados.</p>
        <p>
          Hecho con React + Vite ·{' '}
          <Link to="/contactanos" className="foot__bottom-link">
            hablemos de tu proyecto
          </Link>
        </p>
      </div>
    </footer>
  )
}
