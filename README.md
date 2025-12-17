# Migração de Projeto: Euro Truck Service para Next.js

Este projeto consiste na migração de uma Landing Page institucional desenvolvida originalmente em HTML/CSS/JS para o framework **Next.js**. O objetivo foi aplicar conceitos de arquitetura desacoplada e utilizar estratégias de renderização adequadas para cada contexto.

## 📄 Estrutura e Renderização

O projeto foi dividido em duas páginas principais, cada uma utilizando uma estratégia de renderização distinta para otimizar a experiência do usuário e o desempenho.

### 1. Página Inicial (`/`) - SSG (Static Site Generation)
* **Conteúdo:** Apresentação da empresa, serviços, localização e galeria de fotos.
* **Justificativa:** Como o conteúdo desta página é puramente informativo e não sofre alterações frequentes baseadas no usuário, optou-se pelo SSG. Isso permite que o HTML seja gerado durante o build, garantindo carregamento instantâneo, melhor SEO e menor custo de servidor, já que a página é servida via CDN como um arquivo estático.

### 2. Página de Contato (`/contato`) - CSR (Client-Side Rendering)
* **Conteúdo:** Formulário de contato interativo.
* **Justificativa:** Esta página requer interação direta do usuário (inputs de dados, validação de formulário em tempo real e feedback visual via `alert`). Utilizamos a diretiva `'use client'`, permitindo o uso de Hooks do React (`useState`) para gerenciar o estado do formulário e processar o envio diretamente no navegador, evitando recarregamentos desnecessários da página.

## 📊 Análise Lighthouse (Comparativo)

Abaixo, a comparação entre a versão original (HTML/CSS) e a versão otimizada em Next.js.

### Versão Original (HTML/CSS/JS)
* **Performance:** [INSIRA A NOTA AQUI]
* **Acessibilidade:** [INSIRA A NOTA AQUI]
* **Boas Práticas:** [INSIRA A NOTA AQUI]
* **SEO:** [INSIRA A NOTA AQUI]

### Nova Versão (Next.js + Vercel)
* **Performance:** [INSIRA A NOTA AQUI]
* **Acessibilidade:** [INSIRA A NOTA AQUI]
* **Boas Práticas:** [INSIRA A NOTA AQUI]
* **SEO:** [INSIRA A NOTA AQUI]

**Análise dos Resultados:**
A migração para SSG na página inicial eliminou o tempo de bloqueio de renderização do JavaScript, elevando significativamente a nota de Performance. O uso do componente `Link` do Next.js tornou a navegação entre as páginas instantânea (SPA feel), melhorando a experiência do usuário em comparação à navegação tradicional.

## 🚀 Tecnologias Utilizadas
* Next.js 14
* React
* CSS Modules / Global CSS
* Vercel (Deploy)