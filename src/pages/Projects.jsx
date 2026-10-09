import SEO from '../components/SEO.jsx';
import Portfolio from '../components/Portfolio.jsx';

function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Case studies from Nonso Anukam's frontend portfolio, including a fintech remittance app, a personal finance tracker, and marketing pages built in React."
        path="/projects"
      />

      <section className="section page-header">
        <div className="container">
          <p className="eyebrow-plain">Projects</p>
          <h1>Work built to be shipped, not just shown.</h1>
          <p className="page-header__lede">
           Each project below started as a scope, not a template — problem first, then the build. 
           Every entry links to the live site and, where public, the source code.

          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Portfolio />
        </div>
      </section>
    </>
  );
}

export default Projects;
