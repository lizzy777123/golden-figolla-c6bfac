import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Estimator } from './components/Estimator';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export function App() {
  const handleWhatsAppClick = () => {
    const text = 'Hi Core Landscaping, Do you have landscaping availbility for this week?';
    const url = `https://wa.me/447946123123?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="core-app-root" className="min-h-screen bg-white">
      <Navbar onWhatsAppClick={handleWhatsAppClick} />
      <main>
        <Hero onWhatsAppClick={handleWhatsAppClick} />
        <AboutUs />
        <Estimator />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Pricing onWhatsAppClick={handleWhatsAppClick} />
        <Testimonials />
        <FAQ />
        <Contact onWhatsAppClick={handleWhatsAppClick} />
      </main>
      <Footer onWhatsAppClick={handleWhatsAppClick} />
      <WhatsAppWidget onClick={handleWhatsAppClick} />
    </div>
  );
}

export default App;
