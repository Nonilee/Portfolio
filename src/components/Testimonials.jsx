import testimonials from '../data/testimonials.js';

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__head">
          <h2>What clients say</h2>
         <p className="section-note">
            Sample reflections based on the projects shown above — real client quotes will
            replace these as work  completed.
         </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.id}>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__role">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
