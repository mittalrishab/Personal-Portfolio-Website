import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import EducationTimeline from './Components/Education/EducationTimeline';
import Projects from './Components/Projects/Projects';
import CertificatesSection from './Components/Certificates/CertificatesSection';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="bg-[#171d32] min-h-1.5">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="About" className="min-h-screen">
          <About />
        </section>
        <section id="education" className="min-h-screen">
          <EducationTimeline />
        </section>

        <section id="certificates" className="min-h-screen">
          <CertificatesSection />
        </section>
        <section id="Projects" className="min-h-screen">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
