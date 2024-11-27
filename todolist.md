# To-Do List para o Desenvolvimento do Site "Onda Elétrica" ⚡

## Etapas do Desenvolvimento com Melhores Práticas

### 1. Configuração Inicial e Boas Práticas
1. **Planejamento do Projeto:**
   - Documentar os requisitos e fluxos das páginas.
   - Criar wireframes ou protótipos básicos das páginas.

2. **Configuração do Ambiente de Desenvolvimento:**
   - Instalar ferramentas necessárias:
     - Editor de código (VS Code recomendado).
     - Node.js (para ferramentas de automação).
     - Git (para controle de versão).
   - Configurar o projeto:
     - Criar repositório Git (local e remoto, como GitHub).
     - Criar arquivo `.gitignore` para ignorar arquivos desnecessários (e.g., `node_modules`, cache do editor).

3. **Estruturação do Diretório do Projeto:**
   - **Estrutura organizada e escalável:**
     ```
     /assets
       /images  (imagens do site)
       /icons   (ícones SVG ou PNG)
       /fonts   (tipografias personalizadas)
     /css       (estilos CSS)
       style.css
     /js        (scripts JavaScript)
       script.js
     /pages     (arquivos HTML de páginas adicionais)
     index.html (página inicial)
     README.md  (documentação do projeto)
     roadmap.md (detalhes do planejamento)
     todolist.md (este arquivo)
     ```
   - Nomear arquivos e pastas com convenção clara (`snake_case` ou `kebab-case`).

4. **Configuração de Ferramentas Auxiliares:**
   - Configurar um linter (e.g., ESLint) e um formatter (e.g., Prettier) para garantir código limpo.
   - Adicionar ferramentas de automação (e.g., Gulp ou Webpack, se necessário).
   - Criar um ambiente de desenvolvimento local com Live Server.

---

### 2. Criar Componentes Comuns a Todas as Páginas
1. **Estruturar Componentes Reutilizáveis:**
   - Criar arquivos HTML para o **cabeçalho** e **rodapé** (usando frameworks ou templates para facilitar reaproveitamento).
   - Exemplo:
     - `header.html` (menu de navegação).
     - `footer.html` (informações de contato e redes sociais).
   - Usar **HTML parcial** ou frameworks como Handlebars.js para facilitar inclusão.

2. **Menu de Navegação:**
   - Links: Página Inicial, Processo Seletivo, Atividades, Minicursos, Equipe, Pesquisas Publicadas.
   - Design responsivo:
     - Adicionar barra de navegação colapsável para dispositivos móveis.
     - Usar classes utilitárias (e.g., `nav-item`, `active`) para estilização.

3. **Rodapé:**
   - Informações:
     - Contato e localização.
     - Links para redes sociais.
   - Design:
     - Dividido em colunas para melhor organização (usando flexbox ou grid).

4. **SEO e Acessibilidade:**
   - Configurar metadados (`<meta>` tags) em todas as páginas para SEO básico.
   - Usar atributos `alt` em imagens e descrições nos ícones.
   - Adicionar suporte para navegação por teclado.

---

### 3. Homepage (`index.html`)
1. **Título e Introdução:**
   - Usar hierarquia correta de cabeçalhos (`<h1>` para o título principal).
   - Adicionar breve texto introdutório.

2. **Imagem em Destaque:**
   - Inserir imagem ilustrativa otimizada (formato WebP preferencial).
   - Usar `lazy-loading` para carregamento eficiente.

3. **Cards (Ensino, Extensão e Pesquisa):**
   - Estruturar com HTML semântico (`<article>` ou `<section>`).
   - Adicionar ícones SVG com textos breves.

4. **Destaque do Último Evento:**
   - Criar carrossel de imagens responsivo com navegação por teclado.
   - Garantir que o carrossel não impacte negativamente o desempenho.

---

### 4. Página Processo Seletivo (`pages/processo-seletivo.html`)
1. **Título e Descrições:**
   - Hierarquia correta de textos: `<h1>`, `<h2>`, e parágrafos bem estruturados.

2. **Cards:**
   - Usar CSS Grid ou Flexbox para alinhar os dois cards lado a lado.
   - Adicionar botões acessíveis (`<button>` ou `<a>` com classes para estilização).

3. **Tabela do Calendário:**
   - Criar uma tabela com semântica correta (`<thead>`, `<tbody>`).
   - Garantir responsividade para telas menores.

---

### 5. Página Atividades (`pages/atividades.html`)
1. **Título:**
   - Usar `<h1>` com texto "Atividades".

2. **Galeria de Cards:**
   - Implementar CSS Grid para exibir 2 colunas e n linhas.
   - Adicionar hover effects e links nos cards.

---

### 6. Página Minicursos (`pages/minicursos.html`)
1. **Título:**
   - Usar `<h1>` com texto "Minicursos".

2. **Galeria de Cards:**
   - Reaproveitar componentes criados para a página de Atividades.

---

### 7. Página Equipe (`pages/equipe.html`)
1. **Título:**
   - Texto "Equipe" com `<h1>`.

2. **Galeria de Cards:**
   - Estruturar com CSS Grid para exibir 4 colunas.
   - Adicionar informações:
     - Foto.
     - Semestre de ingresso (UFBA e Onda Elétrica).
     - E-mail clicável.

---

### 8. Página Pesquisas Relacionadas (`pages/pesquisas.html`)
1. **Título:**
   - Texto "Pesquisas" com `<h1>`.

2. **Galeria de Cards:**
   - Estruturar com CSS Grid.
   - Cada card deve ter:
     - Imagem representativa.
     - Botão para acessar o PDF.

---

### 9. Estilização e Otimização
1. **Estilização Global:**
   - Usar variáveis CSS (`:root`) para cores e fontes consistentes.
   - Implementar um sistema de espaçamento padronizado (e.g., escala de 8px).

2. **Responsividade:**
   - Adicionar `media queries` para ajustes em dispositivos móveis.

3. **Performance:**
   - Minificar arquivos CSS e JS.
   - Usar CDN para bibliotecas externas (e.g., FontAwesome, Bootstrap).
   - Otimizar imagens para carregamento rápido.

---

### 10. Testes e Publicação
1. **Testes:**
   - Verificar:
     - Navegação entre páginas.
     - Responsividade e acessibilidade.
     - Carregamento rápido (Google Lighthouse ou PageSpeed Insights).

2. **Publicação:**
   - Hospedar o site em plataformas gratuitas (e.g., GitHub Pages, Netlify).
   - Configurar HTTPS para segurança.
   - Divulgar o link final para a equipe.

---

### Considerações Finais
Este plano garante um desenvolvimento organizado e alinhado às melhores práticas, resultando em um site eficiente, funcional e visualmente atrativo.
