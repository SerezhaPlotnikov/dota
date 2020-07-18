import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Hero } from '../../store/heroes/types';
import { fetchRequest } from '../../store/heroes/actions';
import { ApplicationState } from '../../store';
//Styled
import { HeroInfoBox } from '../../components/heroes/HeroInfoBox';
import { Link } from 'react-router-dom';

interface PropsFromState {
	loading: boolean;
	data: Hero[];
	errors?: string;
}
interface PropsFromDispatch {
	fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromDispatch & PropsFromState;
// const API_ENDPOINT =
// process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com';

const HeroesIndexPage: React.FC<AllProps> = (props) => {
	const { data, loading, fetchRequest } = props;
	useEffect(() => {
		fetchRequest();
	}, [fetchRequest]);
	return (
		<HeroInfoBox>
			<table>
				<tbody>
					<tr>
						<td>Hero</td>
						<td>PrimaryAttr</td>
						<td>AttackType</td>
					</tr>
				</tbody>
			</table>
			{loading && data.length === 0 && <div>Loading...</div>}
			{data.map((hero) => (
				<table key={hero.id}>
					<tbody>
						<tr>
							<td>
								{hero.id}
								<Link to={`/heroes/${hero.name}`}>{hero.name}</Link>
							</td>
							<td>{hero.primary_attr}</td>
							<td>{hero.attack_type}</td>
						</tr>
					</tbody>
				</table>
			))}
		</HeroInfoBox>
	);
};

const mapStateToProps = ({ heroes }: ApplicationState) => ({
	loading: heroes.loading,
	data: heroes.data,
	errors: heroes.errors,
});
const mapDispatchToProps = {
	fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesIndexPage);
