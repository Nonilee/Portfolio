import { useState } from 'react';
import config from '../config.js';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sent'

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!values.email.trim()) {
      next.email = 'Enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = 'Say a little about the project (10+ characters).';
    }
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;

    setStatus('sent');
    setForm(initialForm);
  }

  return (
    <section className="section contact">
      <div className="container contact__grid">
        <div className="contact__form-col">
          <h2>Tell me about the project</h2>
          <p>
            Fill this in and it opens a pre-filled email to {config.email}. Prefer chat?
            Use the WhatsApp button in the corner instead.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </label>

            <label>
              Project details
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </label>

            <button type="submit" className="btn btn--primary">Send message</button>
            {status === 'sent' && (
              <p className="form-success" role="status">
                Your email app should be open now with the message ready to send.
              </p>
            )}
          </form>
        </div>

        <div className="contact__map-col">
          <h3>Based in {config.location}</h3>
          <div className="map-embed">
            <iframe
              src={config.mapEmbedSrc}
              title="Map showing general location in Lagos, Nigeria"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <ul className="contact-details">
            <li><strong>Email:</strong> <a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noreferrer">Message on WhatsApp</a></li>
            <li><strong>Resume:</strong> <a href={config.resumeUrl} download>Download PDF</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
