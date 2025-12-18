/* src/app/servicos/[id]/page.js */
import { services } from '@/data/services';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */

// Isso gera as páginas estáticas no build (SSG) para cada ID
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.id.toString() === params.id);

  if (!service) {
    return <div>Serviço não encontrado</div>;
  }

  return (
    <main style={{ padding: '40px', maxWidth: '800px' }}>
      <Link href="/servicos" style={{ textDecoration: 'underline', color: '#4762FF' }}>
        &larr; Voltar para serviços
      </Link>
      
      <h1 style={{ fontSize: '48px', marginTop: '20px' }}>{service.title}</h1>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '40px' }}>
        <img 
            src={service.image} 
            alt={service.title} 
            style={{ width: '400px', borderRadius: '10px', objectFit: 'cover' }}
        />
        <div>
            <h3 style={{ fontSize: '24px', color: '#4762FF' }}>Valor estimado: {service.price}</h3>
            <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                {service.details}
            </p>
            <p style={{ marginTop: '20px', fontSize: '16px', color: '#666' }}>
                {service.description}
            </p>
            <Link href="/contato">
                <button className="hero__btn" style={{ marginTop: '30px' }}>
                    Agendar este serviço
                </button>
            </Link>
        </div>
      </div>
    </main>
  );
}