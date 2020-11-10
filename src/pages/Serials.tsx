import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { AppCtx } from '../context/AppCtx';
import { clearSerial, getSerials } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';

export const Serials: React.FC = () => {
	const {
		state: { loading, serials },
		dispatch,
	} = useContext(AppCtx);

	useEffect(() => {
		getSerials(dispatch);
		// eslint-disable-next-line
	}, []);

	const handleClick = () => {
		clearSerial(dispatch);
	};

	if (loading) return <Spinner />;

	return (
		<>
			{serials.map((serial) => (
				<div className="card" key={serial.id}>
					<Link onClick={handleClick} to={`/serial/${serial.id}`}>
						<img
							src={serial.poster_path ? IMG_API + serial.poster_path : NO_IMAGE}
							alt={serial.name}
						/>
						<h3>{serial.name}</h3>
						<p>
							<span>{serial.vote_average * 10}% |</span>
							<span>
								<Moment format="MMM D, YYYY">{serial.first_air_date}</Moment>
							</span>
						</p>
					</Link>
				</div>
			))}
		</>
	);
};
