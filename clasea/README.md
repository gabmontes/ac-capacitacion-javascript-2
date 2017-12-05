# Redux

Es una librería que permite manipular el estado de una aplicación.

## Instalación

```
$ npm install --save redux
```

Otros paquetes notables: [`react-redux`](https://github.com/reactjs/react-redux) y [`redux-devtools`](https://github.com/gaearon/redux-devtools).

## Conceptos principales

- Store: es un objeto que contiene el estado de la aplicación.
- Acciones: son objetos que se despachan al *store* para actualizar el estado.
- Reducers: son funciones que reciben las acciones y alteran el estado.

### Ejemplo

```js
import { createStore } from 'redux'

function users(state = [], action) {
  switch (action.type) {
  case 'PUSH':
    return state.concat(action.user)
  case 'POP':
    return state.slice(0, state.length - 1)
  default:
    return state
  }
}

const store = createStore(users)

store.subscribe(function ()
  console.log(store.getState())
)

store.dispatch({ type: 'PUSH', user: { name: "Juan" } })
store.dispatch({ type: 'PUSH', user: { name: "Pedro" } })
store.dispatch({ type: 'POP' })
```

## Temario

- Combinar *reducers*
- Tipos de acciones (constantes)
- *Action creators*
- Uso con React (mapStateToProps, mapDispatchToProps, connect, Provider)
