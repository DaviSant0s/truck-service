/* src/layout.js */

// Imports de CSS Organizados
import './globals.css'; // Esse fica igual pois está na mesma pasta
import '@/styles/layout.css'; // O @ aponta para src/
import '@/styles/home.css';
import '@/styles/contact.css';
import '@/styles/services.css';
import '@/styles/service-detail.css';

/* eslint-disable @next/next/no-img-element */

// import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Euro Truck Service',
  description: 'Specialized truck service and parts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {/* HEADER GLOBAL */}
        <header>
          {/* Use /images/logo.png se estiver na pasta public */}
          <img
            src="/images/logo.png"
            alt="Logo"
            className="header__logo"
            style={{ width: '160px' }}
          />
          <nav className="header__nav">
            <Link href="/" className="header__nav-item">
              Home
            </Link>
            <Link href="/servicos" className="header__nav-item">
              Services
            </Link>
            <Link href="/contato" className="header__nav-item">
              Contact
            </Link>
          </nav>
          <Link href="/contato">
            <button className="header__cta-btn">Request a call</button>
          </Link>
        </header>

        {children}

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
              © 2025 Euro Truck Service. All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
