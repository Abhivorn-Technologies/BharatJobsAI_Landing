import { useScrollReveal, useNavScroll } from './hooks/useScrollReveal';
import { useMouseEffects } from './hooks/useMouseEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConceptDiagram from './components/ConceptDiagram';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import AIEngine from './components/AIEngine';
import Roles from './components/Roles';
import Verification from './components/Verification';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import GettingStarted from './components/GettingStarted';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Mission from './components/Mission';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useScrollReveal('.scroll-reveal, .scroll-reveal-stagger');
  useNavScroll();
  useMouseEffects();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ConceptDiagram />
        <Problem />
        <HowItWorks />
        <AIEngine />
        <Roles />
        <Verification />
        <Proof />
        <Pricing />
        <GettingStarted />
        <Security />
        <FAQ />
        <Mission />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
