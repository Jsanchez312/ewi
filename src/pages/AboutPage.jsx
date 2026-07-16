import Navbar from '../components/Navbar.jsx'
import AboutHero from '../components/AboutHero.jsx'
import AboutStory from '../components/AboutStory.jsx'
import TeamSection from '../components/TeamSection.jsx'
import QualitySection from '../components/QualitySection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <TeamSection />
      <QualitySection />
      <Testimonials />
      <Footer />
    </>
  )
}
