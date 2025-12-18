/* src/page.js */

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Seção Hero */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Affordable truck service</h1>
          <p className="hero__description">
            We provide reliable maintenance, high-quality spare parts, and 24/7
            support to keep your fleet moving. Your trusted partner in logistics
            and transport efficiency.
          </p>
          <Link href="#services">
            <button className="hero__btn">Get Started</button>
          </Link>
        </div>
        <div className="hero__image-wrapper">
          <img src="/images/truck.png" alt="Truck" className="hero__image" />
        </div>
      </section>

      {/* Seção Services */}
      <section id="services" className="services">
        <h2 className="services__title">Premium services for you</h2>
        <p className="services__description">
          From routine check-ups to complex engine repairs, our expert mechanics{' '}
          <br />
          ensure your vehicles are always road-ready and compliant with safety
          standards.
        </p>
        <div className="services__grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">
                Truck parts <br /> from Europe
              </h3>
              <p className="service-card__description">
                We import original components directly from top European
                manufacturers to guarantee the best performance and durability
                for your heavy-duty vehicles.
              </p>
            </div>
            <img
              src="/images/card_image1.png"
              alt=""
              className="service-card__image_1"
            />
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <div className="service-card__content">
              <h3 className="service-card__title">
                Engine & <br /> Transmission
              </h3>
              <p className="service-card__description">
                Full diagnostics and repair services for engines and
                transmissions using state-of-the-art equipment to extend your
                trucks lifespan.
              </p>
            </div>
            <img
              src="/images/card_image2.png"
              alt=""
              className="service-card__image_2"
            />
          </div>
        </div>
      </section>

      {/* Seção About */}
      <section className="about">
        <div className="about__content">
          <h2 className="about__title">
            Who we are and <br />
            what we do
          </h2>
          <p className="about__text">
            Founded in 2010, Truck Services has grown from a small local garage
            to a regional leader in heavy vehicle maintenance. We understand
            that every minute off the road costs money.
          </p>
          <br />
          <p className="about__text">
            Our mission is to minimize downtime for drivers and companies
            through speed, transparency, and technical excellence. We treat your
            cargo carrier as if it were our own.
          </p>
        </div>
        <img src="/images/brands.webp" alt="" className="about__image" />
      </section>

      {/* Seção Location */}
      <section className="location">
        <div className="location__content">
          <h2 className="location__title">Where are we?</h2>
          <p className="location__text">
            Strategically located near the main industrial district, providing
            easy access for heavy trucks and trailers without navigating city
            traffic.
          </p>
        </div>
        <div className="location__map-wrapper">
          <img src="/images/maps.png" alt="" className="location__map" />
        </div>
      </section>

      {/* Seção Gallery */}
      <section className="gallery">
        <h2 className="gallery__title">Gallery</h2>
        <img src="/images/garagem.png" alt="" className="gallery__image" />
      </section>
    </main>
  );
}
