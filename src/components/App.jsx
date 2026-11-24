import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import ProfileSections from './ProfileSections';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const navigation = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['recognition', 'Recognition'],
  ['education', 'Education'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

function Sidebar() {
  return (
    <aside className="portfolio-sidebar">
      <div className="portfolio-sidebar__inner">
        <a className="portfolio-brand" href="#hero">AV<span>.</span></a>
        <p className="portfolio-sidebar__name">Avinash Verma</p>
        <p className="portfolio-sidebar__role">Senior Software Engineer</p>
        <p className="portfolio-sidebar__intro">I build thoughtful digital experiences and practical AI-powered products.</p>
        <nav className="portfolio-nav" aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`}><span />{label}</a>
          ))}
        </nav>
        <div className="portfolio-sidebar__socials">
          <a href="https://github.com/avi-verma-web" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/avinash-verma-ab0021b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://aviverma.hashnode.dev/" target="_blank" rel="noopener noreferrer">Hashnode</a>
        </div>
        <p className="portfolio-sidebar__location">Based in India · Available for good problems</p>
      </div>
    </aside>
  );
}

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <div className="portfolio-shell">
        <Sidebar />
        <main className="portfolio-content">
          <Hero />
          <About />
          <ProfileSections />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </PortfolioProvider>
  );
}

export default App;
