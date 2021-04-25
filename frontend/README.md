# ReadMe - Front End

Front End do projeto Sistema de divulgação de ICs.

## Como rodar o projeto?

No terminal execute os seguintes comandos:

* yarn install
* yarn start

Após isso, o projeto estará rodando na url http://localhost:3000.

## Esquema de pastas

```
├── public # Pasta para arquivos públicos
│ └── index.html # HTML template
├── src # Pasta principal
| |--- assets # Pasta para inserir os assets do projetos (pngs,svgs...)
│ |--- components # Pasta para os componentes
| |--- Hooks # Pasta para centralizar os React Custom Hooks.
| |--- Pages # Páginas da nossa aplicação
| |--- Routes # Arquivos relacionados as rotas da aplicação
| |--- Utils # Funções que podem ser utilizadas em diversos locais.
│ └── app.js # Main page file
│ └── index.js # React DOM, service worker config
├── webpack.config.js # Webpack config
├── babel.config.js # Babel config
```

## Exemplos de como construir a UI

Iremos utilizar Styled Components como ferramenta de estilização no projeto, caso não seja familiarizado com a ferramenta
basta olhar a documentação (https://styled-components.com/docs).

Dentro da pasta Pages estará uma página exemplo de uma possível forma de implementar uma página utilizando styledComponents.

## Prettier e ESLint

Prettier e ESLint são ferramentas úteis para auxiliar na padronização e qualidade de código, utilizaremos o padrão (DEFINIR PADRÃO)
Regras do ESLint que não fizerem sentido para o projeto podem ser ignoradas no arquivo eslint, mas deve-se evitar ao máximo remove-las.
