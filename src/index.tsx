import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './configureStore'

const history = createBrowserHistory()

declare global {
  interface Window {
    INITIAL_REDUX_STATE: any
  }
}

const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
