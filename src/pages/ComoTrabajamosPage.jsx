import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../pages/ContactPage.css'

export default function ComoTrabajamosPage() {
  return (
    <>
      <Navbar />
      <main className="contact-placeholder">
        <span className="eyebrow">Cómo trabajamos</span>
        <h1>Esta página se construye en el siguiente paso.</h1>
        <p>
          Aquí detallaremos nuestro proceso completo. Por ahora puedes volver al inicio.
        </p>
        <Link to="/" className="btn btn-solid">
          Volver al inicio
          <span className="btn-arrow">↗</span>
        </Link>
      </main>
      <Footer />
    </>
  )
}
