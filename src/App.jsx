import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import SideQuests from './components/SideQuests.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SparkleTrail from './components/SparkleTrail.jsx';

export default function App() {
  // Sections render after the browser's own #hash lookup, so a deep link
  // like /portfolio/#work would land at the top. Jump there once mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <SideQuests />
        <Contact />
      </main>
      <Footer />
      <SparkleTrail />
    </>
  );
}
