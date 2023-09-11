# Alura - Projeto curso react

## Instalações e módulos usados
- `npm install -D typescript-plugin-css-modules`
- `npm install react-icons`
- `npm install classnames`

## Configurar caminho relativo
Dentro do tsconfig: ... `"baseUrl": "src"`   
com isso ao ivés de: import {ReactComponent as Logo} from '../../assets/logo.svg'   
Podemos: import {ReactComponent as Logo} from 'assets/logo.svg'  

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
**PARA CARREGAR O ARQUIVO SVG DE LOGO**
Gerar o build fisicamente, para levar o arquivo svg estático

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Alura - Conhecendo a biblioteca React Router

## Instalando ESlint
npm init @eslint/config
Need to install the following packages:
  @eslint/create-config@0.4.6
Ok to proceed? (y) y
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JSON
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · unix
√ Do you require semicolons? · No / Yes
Local ESLint installation not found.   
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now? · No / Yes

### Para corrigir as formatações de acordo com nossa configuração eslint
- npx eslint ./src --fix

## SPA - Rotas
React trabalha com uma arquiteitura e/ou estilo chamado SPA.
Se baseia em um unico html, e que a partir desse html tudo é resolvido por meio do javascript e injeta novamente no html que precisa ser renderizado.

- Instalação do React Router DOM: `npm i react-router-dom`