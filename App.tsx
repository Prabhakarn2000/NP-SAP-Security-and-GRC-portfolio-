import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Strengths />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
