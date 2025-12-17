/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        {/* Lembre-se de colocar o logo em public/images/logo.png */}
        <img src="/images/logo.png" alt="Logo" className="header__logo" />
        <nav className="header__nav">
          <Link href="/" className="header__nav-item">About us</Link>
          <Link href="#services" className="header__nav-item">Why us?</Link>
          <span className="header__nav-item">And heres why</span>
          <Link href="/contato" className="header__nav-item">Contacts</Link>
        </nav>
        <Link href="/contato">
          <button className="header__cta-btn">Заказать звонок</button>
        </Link>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Affordable truck service</h1>
            <p className="hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <Link href="#services">
                <button className="hero__btn">Чета сделать</button>
            </Link>
          </div>
          <div className="hero__image-wrapper">
            <img src="/images/truck.png" alt="Truck" className="hero__image" />
          </div>
        </section>

        {/* Seção Services - Adicionei ID para o scroll funcionar */}
        <section id="services" className="services">
          <h2 className="services__title">Любые услуги за ваши денишки</h2>
          <p className="services__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
            odio in et, lectus sit lorem id integer.
          </p>
          <div className="services__grid">
            {/* Card 1 */}
            <div className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">
                  запчасти для грузовых <br /> авто из Европы
                </h3>
                <p className="service-card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
              <img src="/images/card_image1.png" alt="" className="service-card__image_1" />
            </div>
             {/* Card 2 */}
            <div className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">
                  запчасти для грузовых <br /> авто из Европы
                </h3>
                <p className="service-card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
              <img src="/images/card_image2.png" alt="" className="service-card__image_2" />
            </div>
            {/* Adicione os outros cards aqui seguindo o modelo acima se precisar */}
          </div>
        </section>

        {/* Seção About */}
        <section className="about">
          <div className="about__content">
            <h2 className="about__title">У вас вопрос кто мы а <br />кто мы блин</h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer
            </p>
            <br />
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
          </div>
          <img src="/images/brands.webp" alt="" className="about__image" />
        </section>

        {/* Seção Location */}
        <section className="location">
          <div className="location__content">
            <h2 className="location__title">Где мы?</h2>
            <p className="location__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="location__map-wrapper">
            <img src="/images/maps.png" alt="" className="location__map" />
          </div>
        </section>

        {/* Seção Gallery */}
        <section className="gallery">
          <h2 className="gallery__title">Фоточки</h2>
          <img src="/images/garagem.png" alt="" className="gallery__image" />
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
            <h4 className="footer__links-title">Главная</h4>
            <span className="footer__link">Это мы</span>
            <span className="footer__link">Кто мы</span>
            <span className="footer__link">Почему мы?</span>
            <span className="footer__link">Остались вопросы</span>
            <span className="footer__link">Контакты</span>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="footer__contacts">
            <h4 className="footer__contacts-title">Контакты</h4>
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
              <span className="footer__contact-text">г. Бишкек, ул. Ляляля 69</span>
            </div>
          </div>

          {/* Coluna 4: Social */}
          <div className="footer__social">
            <h4 className="footer__social-title">Следите за нами</h4>
            <div className="footer__social-item">
              {/* logo do facebook aqui */}
              <span className="footer__social-handle">truck_service_ofFicIaL</span>
            </div>
            <div className="footer__social-item">
              {/* logo do instagram aqui */}
              <span className="footer__social-handle">truck_service_ofFicIaL</span>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            Copyright © Truck Services 2022. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
