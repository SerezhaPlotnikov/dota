import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Store } from 'redux';
import { ApplicationState } from './store';

interface AppProps {
	store: Store<ApplicationState>;
	// history: History;
}

const App: React.FC<AppProps> = ({ store }) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes />
			</Provider>
		</BrowserRouter>
	);
};

export default App;
