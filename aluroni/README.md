# Alura - Projeto curso react

## Instalações e módulos usados
- `npm install -D typescript-plugin-css-modules`
- `npm install react-icons`

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