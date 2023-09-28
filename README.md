# API-Github

Este desafio faz parte do módulo de Javascript avançado, dentro do curso [Dev Quest](https://dev-em-dobro.ticto.club/).

## Do que se trata esse desafio?
Trata-se de uma página de busca de usuários do github. 
Essa busca é feita através de uma requisição a [API DO GITHUB](https://docs.github.com/pt/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user)
usando o método fetch.

## Quais interações são feitas?
- Ao inserir o nome do usuário do github, é apresentado na tela dados como: 
  Imagem do usuário,nome,bio,quantidade de seguidores e quantidade de pessoas que este usuário segue.
  
- Também são mostrados dados dos últimos dez repositórios do usuário, tais como:
  Nome do repositório, quantidade de: estrelas, forks, watchers e linguagem utilizada.
  
- Também são mostradas as últimas dez atividades do usuário :
  Atividade em qual repositório e a mensagem do evento.

- Caso o usuário tente buscar sem preencher o campo do nome do usuário, um alerta é mostrado na tela.
- Caso o usuário do github pesquisado não tenha nome e/ou bio cadastrada,é informado através de uma mensagem na tela.
  
## Habilidades desenvolvidas:
- Uso de flexbox para ajustes dos elementos na tela.
- Uso e manipulação dos elementos no JavaScript através do DOM.
- Uso e manipulação dos métodos Fetch e Json para interação com a API.
- Uso dos métodos filter e map para manipulação de arrays.
- Uso de interpolação de strings para apresentação dos elementos na tela através do JS.
- Uso de funções assíncronas, eventos como addEventListener.
- Uso de mediaqueries para responsividade.

## Linguagens Utilizadas:
- HTML <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">

- CSS  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">

- JAVASCRIPT  <img align="center" alt="JS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          

## Veja como ficou:

### Mobile:
<img src="./src/images/api-github-mobile.gif" alt="video projeto tela mobile">

### Tablet:
<img src="./src/images/api-github-tablet.gif" alt="video projeto tela tablet">

### Desktop:
<img src="./src/images/api-github-desktop.gif" alt="video projeto tela desktop">

Para ver o projeto pronto, [CLIQUE AQUI!](https://jessica-os.github.io/API-Github/target="_blank")
