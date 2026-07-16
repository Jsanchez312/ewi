import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import './ContactPage.css'

const CONTACTS = [
  { icon: '✉', label: 'Escríbenos', lines: ['hola@fokus.agency', 'proyectos@fokus.agency'], href: 'mailto:hola@fokus.agency' },
  { icon: '◉', label: 'Llámanos', lines: ['+57 300 123 4567', 'Lun — Vie · 9:00 — 18:00'], href: 'tel:+573001234567' },
  { icon: '⌁', label: 'Síguenos', lines: ['Instagram · LinkedIn', 'Behance · X / Twitter'], href: '#' },
  { icon: '⌖', label: 'Encuéntranos', lines: ['Cra. 14 #93-40', 'Bogotá, Colombia'], href: '#' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact">
        <section className="contact__hero">
          <div className="contact__orb contact__orb--one" />
          <div className="contact__orb contact__orb--two" />
          <motion.div className="contact__hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <span className="eyebrow">Hablemos</span>
            <h1>Únete a <em>fokus.</em></h1>
            <p>Cuéntanos qué quieres mover. Nosotros ponemos la estrategia, el diseño y el impulso.</p>
            <span className="contact__crumb">Inicio <i>—</i> Contacto</span>
          </motion.div>
        </section>

        <section className="contact__form-section container">
          <Reveal as="div" className="contact__form-copy">
            <span className="eyebrow">Tu próximo paso</span>
            <h2>Una buena conversación puede cambiarlo todo.</h2>
            <p>Déjanos algunos detalles y volvemos contigo en menos de 48 horas.</p>
          </Reveal>
          <motion.form className="contact__form" onSubmit={(event) => event.preventDefault()} initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <label>Tu nombre<input name="name" placeholder="¿Cómo te llamas?" required /></label>
            <label>Tu correo<input name="email" type="email" placeholder="tu@email.com" required /></label>
            <label>Cuéntanos<textarea name="message" placeholder="¿Qué proyecto tienes en mente?" rows="5" required /></label>
            <button className="btn btn-solid" type="submit">Enviar mensaje <span className="btn-arrow">↗</span></button>
          </motion.form>
          <motion.div className="contact__photo" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <img src="https://picsum.photos/id/1021/1000/1200" alt="Espacio creativo iluminado" loading="lazy" />
            <span>FOKUS / 2026</span>
          </motion.div>
        </section>

        <section className="contact__ways container">
          <Reveal as="div" className="contact__ways-heading"><span className="eyebrow">Canales abiertos</span><h2>Estamos a un mensaje de distancia.</h2></Reveal>
          <div className="contact__cards">
            {CONTACTS.map((item, index) => (
              <motion.a href={item.href} className="contact__card" key={item.label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                <span className="contact__card-icon">{item.icon}</span><span className="contact__card-label">{item.label}</span>
                <strong>{item.lines[0]}</strong><small>{item.lines[1]}</small><b>↗</b>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
