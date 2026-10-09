import SEO from '../components/SEO.jsx';
import Contact from '../components/Contact.jsx';

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Nonso Anukam about a frontend development project — by form, email, or WhatsApp."
        path="/contact"
      />

      <section className="section page-header">
        <div className="container">
          <p className="eyebrow-plain">Contact</p>
          <h1>Let's talk about what you're building.</h1>
          <p className="page-header__lede">
            The fastest way to reach me is WhatsApp. For anything longer, use the form below.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ContactPage;
