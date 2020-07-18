import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import App from './App';
import { createBrowserHistory } from 'history';

import configureStore from './configureStore';

const history = createBrowserHistory();

declare global {
	interface Window {
		INITIAL_REDUX_STATE: any;
	}
}

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
