/* src/app/servicos/page.js */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <main className="page-container">
      <h1 className="page-title">Nossos Serviços</h1>


      <div className="services-page__grid">
        {services.map((service) => (
          <div className="services-page-card">
            <div className="services-page-card__content">
              <h3 className="services-page-card__title">
                {service.title}
              </h3>
              <p className="services-page-card__description">
                {service.description}
              </p>

              <Link href={`/servicos/${service.id}`} style={{ marginTop: 'auto' }}>
                <button
                  className="services-page-card-btn"
                >
                  Ver Detalhes
                </button>
              </Link>

              <img
              src={service.image}
              className="services-page-card__image_1"
              alt=""
              style={{ width: '80px', opacity: 0.1 }}
            />
  
            </div>
          </div>

        ))}
        
      </div>

    </main>
  );
}
