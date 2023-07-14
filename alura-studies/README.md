# Alura - React: Escrevendopo com Typescript

## My notes
O React tem duas premissas principais. 
- A primeira delas é a componentização. 
- A segunda premissa é o gerenciamento de estado. O React é "reativo", enquanto o Javascript normalmente é imperativo.

- O JSX é uma forma de "escrever HTML no JS", que é a forma que explicamos, mas não é exatamente isso.
O JSX não transforma o componente <Botao /> em HTML diretamente, antes disso, ele é transformado em uma elemento React

### Libs:
- Sass
    - typescript-plugin-css-modules
- UUid: `npm i uuid` AND for Typescript `npm i --save-dev @types/uuid`
- dentro do tsconfig adicionar: "downlevelIteration": true ... Trabalhar com desestruturação de minutos dezenas e unidades

## Ciclo de vida
Em geral um componente tem um ciclo de vida assim:

- componentWillMount (antes de ser montado)
- componentDidMount (acabou de ser montado)
- componentWillUpdate (componente vai ser atualizado)
- componentWillUnmount (componente vai ser desmontado)

**Para conhecimento, deixei alguns compoents como classe apenas para estudos.**

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
