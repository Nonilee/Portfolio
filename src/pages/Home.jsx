import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';


function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Anukam Chinonso is a frontend developer in Lagos building fast, responsive React interfaces. Explore case studies and get in touch about your next project."
        path="/"
      />
      <Hero />
        <Services />
      

      <section className="section">
        <div className="container">
          <div className="section__head section__head--split">
            <div>
              <h2>Selected work</h2>
              <p>Three projects, each built to be handed over — not just demoed.</p>
            </div>
            <NavLink to="/projects" className="link-arrow">View all projects</NavLink>
          </div>
          <Portfolio featuredOnly limit={2} />
        </div>
      </section>

      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
