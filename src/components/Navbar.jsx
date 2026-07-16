import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const LINKS = [
  { label: 'Inicio', href: '#hero', type: 'anchor' },
  { label: 'Nosotros', href: '/sobre-fokus', type: 'route' },
  { label: 'Proyectos', href: '/proyectos', type: 'route' },
  { label: 'Servicios', href: '#servicios', type: 'anchor' },
  { label: 'Contacto', href: '/contactanos', type: 'route' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    navigate('/')
  }

  const scrollTo = (e, href) => {
    setOpen(false)
    if (window.location.pathname !== '/') {
      e.preventDefault()
      navigate(`/${href}`)
      return
    }
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const NavLink = ({ l }) =>
    l.type === 'route' ? (
      <Link to={l.href} onClick={() => setOpen(false)}>
        {l.label}
      </Link>
    ) : (
      <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>
        {l.label}
      </a>
    )

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__bar">
        <a href="/" className="nav__logo" onClick={goHome}>
          <span className="nav__logo-mark" aria-hidden="true">
            <span />
          </span>
          fokus
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {LINKS.map((l) => (
            <NavLink l={l} key={l.label} />
          ))}
        </nav>

        <Link to="/contactanos" className="nav__cta">
          Hablemos
        </Link>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <NavLink l={l} key={l.label} />
        ))}
        <Link to="/contactanos" onClick={() => setOpen(false)}>
          Hablemos
        </Link>
      </div>
    </motion.header>
  )
}
