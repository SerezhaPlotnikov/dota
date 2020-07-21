import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { League } from '../../store/leagues/types';
import { fetchRequest } from '../../store/leagues/actions';
import { ApplicationState } from '../../store';
//Styled
// import { HeroInfoBox } from '../../components/heroes/HeroInfoBox';
// import { Link } from 'react-router-dom';

interface PropsFromState {
	loading: boolean;
	data: League[];
	errors?: string;
}
interface PropsFromDispatch {
	fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromDispatch & PropsFromState;
// const API_ENDPOINT =
// 	process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com';

const LeaguesIndexPage: React.FC<AllProps> = (props) => {
	const { data, loading, fetchRequest } = props;
	useEffect(() => {
		fetchRequest();
	}, [fetchRequest]);
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>League ID</td>
						<td>Tier</td>
						<td>Name</td>
					</tr>
				</tbody>
			</table>
			{loading && data.length === 0 && <div>Loading...</div>}
			{data.map((league) => (
				<table key={league.leagueid}>
					<tbody>
						<tr>
							<td>{league.leagueid}</td>
							<td>{league.ticket}</td>
							<td>{league.banner}</td>
							<td>{league.tier}</td>
							<td>{league.name}</td>
						</tr>
					</tbody>
				</table>
			))}
		</div>
	);
};

const mapStateToProps = ({ leagues }: ApplicationState) => ({
	loading: leagues.loading,
	data: leagues.data,
	errors: leagues.errors,
});
const mapDispatchToProps = {
	fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesIndexPage);
