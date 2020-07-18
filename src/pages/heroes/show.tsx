import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { fetchRequest } from '../../store/heroes/actions';
import { Hero } from '../../store/heroes/types';
import { ApplicationState } from '../../store';

interface PropsFromState {
	loading: boolean;
	data: Hero[];
	error?: string;
}
interface RouteParams {
	name: string;
}

interface PropsFromDispatch {
	fetchHeroes: typeof fetchRequest;
}

interface State {
	selected?: Hero;
}

type AllProps = PropsFromDispatch &
	PropsFromState &
	RouteComponentProps<RouteParams>;

class ShowHeroesPage extends Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<div>
					<div>test</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = ({ heroes }: ApplicationState) => ({
	loading: heroes.loading,
	data: heroes.data,
	errors: heroes.errors,
});

const mapDispatchToProps = {
	fetchHeroes: fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHeroesPage);
