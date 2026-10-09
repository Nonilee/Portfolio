import SEO from '../components/SEO.jsx';

const skills = [
  { group: 'Core', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React'] },
  { group: 'Tooling', items: ['Vite', 'React Router', 'Git & GitHub', 'npm'] },
  { group: 'Also comfortable with', items: [ 'REST APIs', 'localStorage/sessionStorage'] },
];

function About() {
  return (
    <>
      <SEO
        title="About"
        description="Background, skills, and working style of Nonso Anukam, a frontend developer based in Lagos, Nigeria."
        path="/about"
      />

      <section className="section page-header">
        <div className="container">
          <p className="eyebrow-plain">About</p>
          <h1>Frontend developer, trained end-to-end and shipping real projects.</h1>
          <p className="page-header__lede">
           I completed a full year of frontend design training — HTML, CSS, JavaScript, and
           React — and have spent the time since building projects that go past tutorials:
           a fintech app wired to a live API, a coffee shop landing page, and a
           product-launch page built component by component.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about__grid">
          <div>
            <h2>How I approach a build</h2>
            <p>
              I treat every project the way a client hiring a frontend developer needs it
              treated: understand the goal first, then build in pieces that can be checked
              along the way, rather than disappearing and returning with a finished surprise.
            </p>
            <p>
              That habit came from building CosmoRemit, a remittance app, from a static
              layout into a working product wired to a live API — debugging deployment
              issues, structuring routes, and getting the responsive layout right across
              devices before calling it done.
            </p>
          </div>

          <div className="skills-block">
            <h2>Skills</h2>
            {skills.map((group) => (
              <div className="skills-block__group" key={group.group}>
                <p className="skills-block__label">{group.group}</p>
                <ul className="tag-list tag-list--mono">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
