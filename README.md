# 🚚 Euro Truck Service - Migração e Modernização Frontend

Este repositório contém o código-fonte do trabalho final da disciplina de Frontend, focado na migração de uma Landing Page legada (HTML/CSS/JS) para uma aplicação moderna utilizando **Next.js (App Router)**.

O projeto demonstra o domínio de estratégias de renderização híbrida (**SSG** e **CSR**), uso de **Rotas Dinâmicas** e arquitetura de componentes reutilizáveis.

---

## 🔗 Links do Projeto
* **Repositório:** [github.com/DaviSant0s/truck-service](https://github.com/DaviSant0s/truck-service)
* **Deploy (Vercel):** [truck-service-seven.vercel.app](https://truck-service-seven.vercel.app/)

---

**Desenvolvido por:**
* Antonio Davi Araújo dos Santos
* Sintik de Souza Rodrigues

---

## 📋 Sobre o Projeto

O **Euro Truck Service** é um site institucional para uma oficina especializada em manutenção de caminhões pesados. O objetivo da migração foi transformar um site estático monolítico em uma **Single Page Application (SPA)** performática, escalável e otimizada para SEO.

### Principais Evoluções na Versão Next.js:
- **Arquitetura Desacoplada:** Separação clara entre dados, lógica de interface e estilo.
- **Roteamento Avançado:** Uso do *File-system Routing* do Next.js.
- **Otimização de Imagens:** Carregamento otimizado com componentes nativos (preparado).
- **Estilização Modular:** CSS organizado por contexto para facilitar a manutenção.

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

### Página Home (`/`)
| Métrica | Projeto Original (HTML/JS) | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :---: | :--- |
| **Performance** | 98 | 97 | A estabilidade da nota deve-se ao SSG, que entrega o HTML pré-montado no build, mantendo o Time to First Byte (TTFB) extremamente baixo, similar ao estático puro. |
| **Acessibilidade** | 97 | 98 | A migração para componentes React permitiu encapsular regras de acessibilidade de forma mais rigorosa que no HTML monolítico, e uso de tags semânticas no JSX e o componente <Link> melhoraram a navegação. |
| **SEO** | 91 | 100 | A geração estática garantiu que o título e a descrição fossem indexáveis instantaneamente, superando o projeto original. |

### Página de Contato (`/contato`)
| Métrica | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :--- |
| **Performance** | 75 | Queda esperada devido ao CSR. O navegador precisou baixar e executar o JavaScript (use client) para montar o formulário interativo, aumentando o tempo de bloqueio (TBT). |
| **Acessibilidade** | 98 | O gerenciamento de estado (useState) garantiu feedback visual imediato nos inputs e labels, melhorando a experiência de uso (UX) e acessibilidade. |
| **SEO** | 100 | Mesmo sendo CSR, o Next.js gerou as meta-tags no servidor (via layout.js), garantindo SEO perfeito.|

### Página de Serviços (`/servicos`)
| Métrica | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :--- |
| **Performance** | 100 | Como a página é puramente informativa e estática, o servidor entregou apenas HTML e CSS otimizados, resultando em Load instantâneo. |
| **Acessibilidade** | 98 | Tags de imagem com atributos alt preenchidos e hierarquia de cabeçalhos correta (h1, h3). |
| **SEO** | 100 | O conteúdo textual da lista foi gerado estaticamente, tornando-o 100% legível para buscadores sem rendering budget extra. |


### Detalhes do Serviço (`/servicos/[id]`)
| Métrica | Migração Next.js (Vercel) | Análise |
| :--- | :---: | :--- |
| **Performance** | 100 | O uso de generateStaticParams permitiu que páginas dinâmicas se comportassem como estáticas no build, eliminando consultas ao banco de dados no momento do acesso. |
| **Acessibilidade** | 98 | A semântica do HTML5 foi mantida e aprimorada no JSX. |
| **SEO** | 100 | O SSG garantiu que todas as meta-tags fossem servidas estaticamente. |

## Conclusão
Este projeto materializa uma arquitetura de frontend desacoplado ao isolar a interface desenvolvida em React/Next.js da lógica de fornecimento de dados. Esta independência permite que o frontend comunique com APIs via JSON/HTTP e realize deploys e escalabilidade de forma individual. Como resultado, obtemos um sistema mais rápido, escalável e fácil de manter, alinhado com as práticas de mercado para soluções de alta performance.
