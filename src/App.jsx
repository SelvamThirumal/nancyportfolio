import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Experience from "./src/components/Experience";
import Skills from "./src/components/Skills";
import Education from "./src/components/Education";
import Certification from "./src/components/Certification";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import ParticleBackground from "./src/components/ParticleBackground";
import AnimatedBlob from "./src/components/AnimatedBlob";
import ScrollTop from "./src/components/ScrollTop";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Background Animation */}
      <ParticleBackground />
      <AnimatedBlob />

      {/* Scroll Button */}
      <ScrollTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certification">
          <Certification />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;