import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<>
			<div>{title}</div>
			<Link to='/heroes'>Heroes</Link>
			<Link to='/heroes'>Heroes</Link>
			<Link to='/heroes'>Heroes</Link>
		</>
	);
};

export default Header;
