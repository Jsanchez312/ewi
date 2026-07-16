import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import ScrollSplitImage from '../components/ScrollSplitImage.jsx'
import Projects from '../components/Projects.jsx'
import ServicesAccordion from '../components/ServicesAccordion.jsx'
import Testimonials from '../components/Testimonials.jsx'
import JoinCTA from '../components/JoinCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ScrollSplitImage />
      <Projects />
      <ServicesAccordion />
      <Testimonials />
      <JoinCTA />
      <Footer />
    </>
  )
}
