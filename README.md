# portifolio
Portfólio Ângelo Fávero
Este repositório contém o código fonte do meu site portfólio pessoal. Ele foi construído com HTML, CSS e um pouco de JavaScript para animar a experiência. O objetivo é apresentar meu perfil profissional, os projetos que desenvolvi, minha formação acadêmica e fornecer formas rápidas de contato.

Funcionalidades
Layout responsivo adaptado para diferentes tamanhos de tela (desktop, tablet e celular).

Efeito de digitação na seção de apresentação utilizando a biblioteca Typed.js, que anima a exibição de texto em loop.

Navegação intuitiva, com barra de navegação fixa no topo e menu “hambúrguer” para dispositivos móveis.

Seção de experiência listando projetos com miniaturas e as tecnologias utilizadas em cada um deles.

Seção de formação, incluindo graduação, cursos intensivos e idiomas, organizada em colunas.

Botão flutuante do WhatsApp que redireciona o usuário diretamente para uma conversa comigo.

Botão “voltar ao topo” visível após rolar a página para facilitar a navegação.

Animações que revelam elementos enquanto a página é rolada, proporcionando uma experiência mais dinâmica.

Links diretos para e‑mail, telefone, GitHub e LinkedIn na área de contato.

Estrutura do projeto
bash
Copiar
Editar
├── index.html         # Página principal do portfólio
├── style.css          # Estilos aplicados ao layout
├── img/               # Imagens e ícones utilizados no site
├── fonts/             # Fontes customizadas (familia Intro)
├── digitacao.js       # Script responsável pelo efeito de digitação (Typed.js)
├── navbar-mobile.js   # Lógica do menu para dispositivos móveis
├── scrol.js           # Aplica animações durante a rolagem
└── backToTop.js       # Controla o botão “voltar ao topo”
Executando localmente
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu‑usuario/nome‑do‑repositorio.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd nome‑do‑repositorio
Abra o arquivo index.html no seu navegador:

Basta dar dois cliques no arquivo index.html para visualizá‑lo; ou

Caso prefira usar um servidor local (opcional), execute:

bash
Copiar
Editar
# usando Python 3
python3 -m http.server 8000
# então abra http://localhost:8000 em seu navegador
