# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:

```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del _package.json_
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel _babel.config.cjs_
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

_jest.config.js_
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

_jest.setup.js_
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```