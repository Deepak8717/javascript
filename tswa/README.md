# The Star Wars API

## Features

- Select an item from the dropdown which list all characters fetched from an external API
- Upon selection, you will see list of all films that particular character featured in
- Upon selection, you will see most recent film and release date that particular character featured in

## Plugins

- React Bootstrap
- React Loading
- PropTypes

## Workflow

Older commits will show you how to solve the problem with basic hooks.

- `App` component holds all universal states
- Children components of the `App` component inherit universal states
- Usage of React Hooks, `useEffect`, `useState` concepts

Recent commits with the advice of [@sarngru](https://github.com/sarngru) shows how a Redux structure can be implemented to solve same problem. Case will show how to manage states, middleware and handling of network requests.

- Elimination of passing states from parent to child components
- Usage of React, React Redux, Redux Saga

## Examples

- [View Demo](https://tswa.netlify.app)
