# 🚚 Euro Truck Service - Migração e Modernização Frontend

Este repositório contém o código-fonte do trabalho final da disciplina de Frontend, focado na migração de uma Landing Page legada (HTML/CSS/JS) para uma aplicação moderna utilizando **Next.js (App Router)**.

O projeto demonstra o domínio de estratégias de renderização híbrida (**SSG** e **CSR**), uso de **Rotas Dinâmicas** e arquitetura de componentes reutilizáveis.

---

## 📋 Sobre o Projeto

O **Euro Truck Service** é um site institucional para uma oficina especializada em manutenção de caminhões pesados. O objetivo da migração foi transformar um site estático monolítico em uma **Single Page Application (SPA)** performática, escalável e otimizada para SEO.

### Principais Evoluções na Versão Next.js:
- **Arquitetura Desacoplada:** Separação clara entre dados, lógica de interface e estilo.
- **Roteamento Avançado:** Uso do *File-system Routing* do Next.js.
- **Otimização de Imagens:** Carregamento otimizado com componentes nativos (preparado).
- **Estilização Modular:** CSS organizado por contexto (`home`, `services`, `layout`) para facilitar a manutenção.

---

## 🚀 Estratégias de Renderização (Render Patterns)

Para maximizar a performance e a experiência do usuário, foram escolhidas estratégias de renderização específicas para cada rota, conforme detalhado abaixo:

### 1. Página Home (`/`)
- **Estratégia:** **SSG (Static Site Generation)**.
- **Implementação:** Utilizam *Server Components* padrão do Next.js.
- **Justificativa Técnica:** Como o conteúdo é puramente informativo e raramente muda (landing page), o HTML é gerado inteiramente no momento do *build*. Isso garante o menor *Time to First Byte* (TTFB) possível, alta disponibilidade via CDN (Vercel) e indexação perfeita para SEO.

### 2. Página de Contato (`/contato`)
- **Estratégia:** **CSR (Client-Side Rendering)**.
- **Implementação:** Uso da diretiva `'use client'` e React Hooks (`useState`, `onSubmit`).
- **Justificativa Técnica:** Esta página requer interatividade imediata do usuário (preenchimento de formulário, validação de inputs e feedback visual sem recarregamento). O CSR delega essa lógica para o navegador, proporcionando uma experiência fluida de SPA.

### 3. Página de Serviços (`/servicos`)
- **Estratégia:** SSG (Static Site Generation).
- **Justificativa:** Como o catálogo de serviços raramente muda, optamos por pré-renderizar a página no build. Isso garante máxima performance (TTFB baixo) e melhor indexação (SEO), entregando HTML estático via CDN sem exigir processamento do servidor a cada acesso.

### 3. ⭐ BÔNUS: Detalhes do Serviço (`/servicos/[id]`)
- **Estratégia:** **SSG com Rotas Dinâmicas (Dynamic Routes)**.
- **Implementação:** Utilização de `generateStaticParams` para pré-renderizar páginas estáticas baseadas em IDs de serviços.
- **Justificativa Técnica:** Permite escalar o site para centenas de serviços mantendo a performance de site estático. O Next.js gera uma página HTML física para cada serviço (ex: `/servicos/1`, `/servicos/2`) durante o build.

## Comparativo Lighthouse (Performance)

| Métrica | Projeto Original (HTML/JS) | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :---: | :--- |
| **Performance** | (Coloque aqui) | (Coloque aqui) | O uso do componente Image e a CDN da Vercel melhoraram o carregamento. |
| **Acessibilidade** | (Coloque aqui) | (Coloque aqui) | A semântica do HTML5 foi mantida e aprimorada no JSX. |
| **SEO** | (Coloque aqui) | (Coloque aqui) | O SSG garantiu que todas as meta-tags fossem servidas estaticamente. |



## Conclusão
A migração para Next.js permitiu desacoplar a interface, aproveitando o ecossistema React para organização de código, enquanto o uso híbrido de renderização entregou a melhor performance possível para cada caso de uso.
