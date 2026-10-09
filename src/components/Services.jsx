import services from '../data/services.js';

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__head">
          <h2>What I build</h2>
          <p>Four kinds of work I take on most often — each scoped to ship, not just demo.</p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="tag-list">
                {service.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
