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

export default function App() {
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
    </>
  );
}
