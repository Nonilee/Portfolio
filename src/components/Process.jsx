const steps = [
  {
    step: '01',
    title: 'Scope',
    detail: 'We agree what the site needs to do, for whom, and by when — before any design or code.',
  },
  {
    step: '02',
    title: 'Build',
    detail: 'Pages come together section by section, checked against real content and real screen widths.',
  },
  {
    step: '03',
    title: 'Review',
    detail: 'You see working pages as they are built, not just a final reveal at the end.',
  },
  {
    step: '04',
    title: 'Launch',
    detail: 'Deployed, tested across devices, and handed over with the code or a live link.',
  },
];

function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section__head">
          <h2>How a project runs</h2>
        </div>
        <ol className="process__list">
          {steps.map((item) => (
            <li key={item.step}>
              <span className="process__step">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
