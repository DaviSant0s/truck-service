# Migração de Projeto Frontend - Euro Truck Service

## Descrição do Projeto
Este projeto consiste na migração de uma Landing Page institucional de serviços para caminhões (Euro Truck Service) desenvolvida originalmente em HTML/CSS/JS para o framework **Next.js**. O objetivo foi implementar uma arquitetura desacoplada, moderna e performática, utilizando estratégias de renderização adequadas para cada contexto.

## Estratégias de Renderização Adotadas

### 1. Página Home (`/`)
* **Estratégia:** SSG (Static Site Generation).
* **Justificativa Técnica:** A Home page possui conteúdo estático e informativo (serviços, "sobre nós", localização) que raramente sofre alterações. Optou-se pelo SSG (padrão dos Server Components no Next.js App Router) para que o HTML seja gerado no momento do build. Isso garante **SEO otimizado** (indexação rápida pelos buscadores) e **alta performance** (TTFB baixo), pois a página é servida via CDN sem processamento no servidor a cada requisição.

### 2. Página de Contato (`/contato`)
* **Estratégia:** CSR (Client-Side Rendering).
* **Justificativa Técnica:** Esta página contém um formulário interativo que depende de feedback imediato ao usuário e gestão de estado local (`useState`). Utilizou-se a diretiva `'use client'` para permitir o uso de hooks do React e manipulação de eventos do navegador (`onSubmit`), delegando a renderização da interatividade para o lado do cliente (navegador), proporcionando uma experiência de SPA (Single Page Application) fluida sem recarregamentos desnecessários.

## Comparativo Lighthouse (Performance)

| Métrica | Projeto Original (HTML/JS) | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :---: | :--- |
| **Performance** | (Coloque aqui) | (Coloque aqui) | O uso do componente Image e a CDN da Vercel melhoraram o carregamento. |
| **Acessibilidade** | (Coloque aqui) | (Coloque aqui) | A semântica do HTML5 foi mantida e aprimorada no JSX. |
| **SEO** | (Coloque aqui) | (Coloque aqui) | O SSG garantiu que todas as meta-tags fossem servidas estaticamente. |

## Conclusão
A migração para Next.js permitiu desacoplar a interface, aproveitando o ecossistema React para organização de código, enquanto o uso híbrido de renderização (SSG na Home e CSR no Contato) entregou a melhor performance possível para cada caso de uso.