/* src/app/servicos/[id]/page.js */
import { services } from '@/data/services';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */

// SSG com Rotas Dinâmicas

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}

export default async function ServiceDetail({ params }) {
  
  const { id } = await params;

  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className='service-details-not-found'>
        <h1>Serviço não encontrado</h1>
        <p>ID procurado: {id}</p>
        <Link href="/servicos" style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <main className='service-details-container'>
      <Link href="/servicos" className='service-details-back-link'>
        &larr; Voltar para serviços
      </Link>
      
      <h1 className='service-details-title'>{service.title}</h1>
      
      <div className='service-details-content'>
        <div>
            <h3 className='service-details-price'>Valor estimado: {service.price}</h3>
            <p className='service-details-details'>
                {service.details}
            </p>
            <p className='service-details-description'>
                {service.description}
            </p>
            <Link href="/contato">
                <button className="hero__btn service-details-button">
                    Agendar este serviço
                </button>
            </Link>
        </div>
      </div>
    </main>
  );
}