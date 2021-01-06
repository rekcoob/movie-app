import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { AppCtx } from '../context/AppCtx';
// import { clearSerial, getSerials } from '../context/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getSerials } from '../store/actions';

import Moment from 'react-moment';

import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { Searchbox } from '../components/Searchbox';

export const SerialList: React.FC = () => {
	// const {
	// 	state: { loading, serials },
	// 	dispatch,
	// } = useContext(AppCtx);

	const dispatch = useDispatch();

	const serialList = useSelector((state: any) => state.serialList);
	const { loading, serials } = serialList;

	useEffect(() => {
		// getSerials(dispatch);
		dispatch(getSerials());
	}, [dispatch]);

	const handleClick = () => {
		// clearSerial(dispatch);
	};

	return (
		<>
			<Searchbox serials />
			<div className="container">
				{loading || serials === null ? (
					<Spinner />
				) : serials.length !== 0 ? (
					serials.map((serial: any) => (
						<div className="card" key={serial.id}>
							<Link onClick={handleClick} to={`/serial/${serial.id}`}>
								<img
									src={
										serial.poster_path ? IMG_API + serial.poster_path : NO_IMAGE
									}
									alt={serial.name}
								/>
								<h3>{serial.name}</h3>
								<p>
									<span>{serial.vote_average * 10}% |</span>
									<span>
										<Moment format="MMM D, YYYY">
											{serial.first_air_date}
										</Moment>
									</span>
								</p>
							</Link>
						</div>
					))
				) : (
					<h2 className="py-2">No Serials Found</h2>
				)}
			</div>
		</>
	);
};
