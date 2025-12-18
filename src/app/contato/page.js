/* src/contato/page.js */

'use client'; // ISSO ATIVA O CSR

/* eslint-disable @next/next/no-img-element */

// CSR (Formulário interativo)

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please fill in all fields.');
    } else {
      alert('Thank you! We will contact you soon.');
      setName('');
      setPhone('');
    }
  };

  return (
      <main
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1129px',
          width: '100%',
        }}
      >
        <section className="contact-form" style={{ marginTop: 0 }}>
          <div className="contact-form__wrapper">
            <h2 className="contact-form__title">Still have questions?</h2>
            <p className="contact-form__description">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="contact-form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="contact-form__input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit" className="contact-form__submit-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
  );
}