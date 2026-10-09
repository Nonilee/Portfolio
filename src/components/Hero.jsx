import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__location">Frontend Developer.Building Responsive, User-Focused Interfaces · Open to Remote Opportunities Worldwide</p>
          <h1 className="hero__headline">
            I turn designs into React interfaces clients can actually launch.
          </h1>
          <p className="hero__sub">
            A year of focused frontend training and four shipped projects later, I build
            responsive, well-structured  interfaces and hand them over ready to deploy — not
            half-finished for someone else to fix.
          </p>
          <div className="hero__actions">
            <NavLink to="/projects" className="btn btn--primary">See the work</NavLink>
            <NavLink to="/contact" className="btn btn--ghost">Talk about a project</NavLink>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>Projects shipped</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Open to work</dd>
            </div>
            <div>
              <dt>Response time</dt>
              <dd>Within 24h </dd>
            </div>
          </dl>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="code-panel">
            <div className="code-panel__bar">
              <span /><span /><span />
              <span className="code-panel__filename">Hero.jsx</span>
            </div>
            <pre className="code-panel__body">
<span className="tok-kw">const</span> <span className="tok-fn">Developer</span> = {'{'}
  name: <span className="tok-str">'Nonso'</span>,
  role: <span className="tok-str">'Frontend Developer'</span>,
  stack: [<span className="tok-str">'React'</span>, <span className="tok-str">'JavaScript'</span>, <span className="tok-str">'CSS'</span>],
  focused: <span className="tok-kw">true</span>,
{'}'};

<span className="tok-kw">export default</span> Developer;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
