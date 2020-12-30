import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

type Props = {
	icon?: string;
	title?: string;
};

export const Navbar: React.FC<Props> = ({
	title = 'MovieApp',
	icon = 'fas fa-video',
}) => {
	return (
		<nav>
			<div className="nav-container">
				<h1>
					<Link to="/">
						<i className={icon} /> {title}
					</Link>
				</h1>
				<ul>
					<li>
						<Link to="/">Movies</Link>
					</li>
					<li>
						<Link to="/serials">Serials</Link>
					</li>
					<li>
						<Link to="/actors">Actors</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
