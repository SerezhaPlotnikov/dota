import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import { ApplicationState } from '../store';

import LeaguesIndexPage from './leagues/index';
import { League } from '../store/leagues/types';

interface PropsFromState {
	loading: boolean;
	data: League[];
	errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const LeaguesPage: React.FC<AllProps> = ({ match }) => {
	return (
		<Switch>
			<Route exact path={`${match.path}/`} component={LeaguesIndexPage} />
		</Switch>
	);
};

const mapStateToProps = ({ leagues }: ApplicationState) => ({
	loading: leagues.loading,
	errors: leagues.errors,
	data: leagues.data,
});

export default connect(mapStateToProps)(LeaguesPage);
