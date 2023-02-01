import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewLetterSection from '../components/NewLetterSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewLetterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
