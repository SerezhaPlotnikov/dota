import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, createRootReducer, rootSaga } from './store';

export default function configureStore(
	history: History,
	initialState: ApplicationState,
): Store<ApplicationState> {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		createRootReducer(),
		initialState,
		composeWithDevTools(
			applyMiddleware(routerMiddleware(history), sagaMiddleware),
		),
	);
	sagaMiddleware.run(rootSaga);
	return store;
}
