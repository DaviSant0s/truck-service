'use client'; // ISSO ATIVA O CSR

/* eslint-disable @next/next/no-img-element */

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
    <>
      <header>
        <img src="/images/logo.png" alt="Logo" className="header__logo" />
        <nav className="header__nav">
          <Link href="/" className="header__nav-item">
            Back to Home
          </Link>
        </nav>
      </header>

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
      <footer className="footer">
        <div className="footer__main">
          {/* Coluna 1: Marca */}
          <div className="footer__brand">
            <img src="/images/logo.png" alt="Logo" className="footer__logo" />
          </div>

          {/* Coluna 2: Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Menu</h4>
            <span className="footer__link">About us</span>
            <span className="footer__link">Who we are</span>
            <span className="footer__link">Why us?</span>
            <span className="footer__link">Questions?</span>
            <span className="footer__link">Contacts</span>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="footer__contacts">
            <h4 className="footer__contacts-title">Contacts</h4>
            <span className="footer__phone">+7 (708) 802 88 88</span>
            <span className="footer__phone">+7 (708) 803 88 88</span>
            <span className="footer__phone">+7 (708) 51 51 518</span>
            <span className="footer__phone">+7 (700) 51 51 518</span>
            <div className="footer__contact-item">
              {/* logo do whatsap aqui */}
              <span className="footer__contact-text">+7 (708) 802 88 88</span>
            </div>
            <div className="footer__contact-item">
              {/* logo de mapa aqui */}
              <span className="footer__contact-text">
                Bishkek city, Industrial St 69
              </span>
            </div>
          </div>

          {/* Coluna 4: Social */}
          <div className="footer__social">
            <h4 className="footer__social-title">Follow us</h4>
            <div className="footer__social-item">
              {/* logo do facebook aqui */}
              <span className="footer__social-handle">
                truck_service_official
              </span>
            </div>
            <div className="footer__social-item">
              {/* logo do instagram aqui */}
              <span className="footer__social-handle">
                truck_service_official
              </span>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            Copyright © Truck Services 2025. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}