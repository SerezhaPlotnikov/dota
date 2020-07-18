import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Hero } from '../../store/heroes/types';
import { fetchRequest } from '../../store/heroes/actions';
import { ApplicationState } from '../../store';

interface PropsFromState {
	loading: boolean;
	data: Hero[];
	errors?: string;
}
interface PropsFromDispatch {
	fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromDispatch & PropsFromState;

class HeroesIndexPage extends Component<AllProps> {
	constructor(props: AllProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div>test</div>
			</div>
		);
	}
}

const mapStateToProps = ({ heroes }: ApplicationState) => ({
	loading: heroes.loading,
	data: heroes.data,
	errors: heroes.errors,
});
const mapDispatchToProps = {
	fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesIndexPage);
