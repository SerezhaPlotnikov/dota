import React from 'react';
import { Route, Switch } from 'react-router';

import Header from './components/layout/Header';
import HeroesPage from './pages/heroes';

const Routes: React.SFC = () => (
	<>
		<Header title='OpenDota' />
		<Switch>
			<Route path='/heroes' component={HeroesPage} />
			<Route component={() => <div>Not Found</div>} />
		</Switch>
	</>
);

export default Routes;
