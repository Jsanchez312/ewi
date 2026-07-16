import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ComoTrabajamosPage from './pages/ComoTrabajamosPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactanos" element={<ContactPage />} />
        <Route path="/sobre-fokus" element={<AboutPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosPage />} />
      </Routes>
    </>
  )
}
