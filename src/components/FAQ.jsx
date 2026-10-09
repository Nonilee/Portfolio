import { useState } from 'react';
import faqs from '../data/faqs.js';

function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section className="section faq">
      <div className="container">
        <div className="section__head">
          <h2>Questions clients ask</h2>
        </div>

        <div className="faq__list">
          {faqs.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.id}>
                <button
                  className="faq-item__question"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-item__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
