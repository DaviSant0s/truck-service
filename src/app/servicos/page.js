/* src/app/servicos/page.js */
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <main className="page-container">
      <h1 className="page-title">Nossos Serviços</h1>
      
      <div className="services-page__grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            
            {/* Botão reposicionado para baixo com estilo inline mínimo apenas para espaçamento */}
            <Link href={`/servicos/${service.id}`} style={{marginTop: 'auto'}}>
                <button className="header__cta-btn" style={{marginTop: '20px', width: '100%'}}>
                    Ver Detalhes
                </button>
            </Link>
            
            {/* Mantendo as imagens decorativas originais do seu CSS, se quiser */}
            <img src={service.image} className="service-card__image_1" alt="" style={{width: '80px', opacity: 0.1}} />
          </div>
        ))}
      </div>
    </main>
  );
}