import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { AppCtx } from '../context/AppCtx';
import { getSerial } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { IGenre } from '../context/types';

type Params = {
	id: string;
};

export const Serial: React.FC = () => {
	const {
		state: {
			loading,
			serial: {
				name,
				poster_path,
				first_air_date,
				vote_average,
				overview,
				genres,
			},
		},
		dispatch,
	} = useContext(AppCtx);

	const { id } = useParams<Params>();

	useEffect(() => {
		getSerial(dispatch, +id);
	}, [dispatch, id]);

	if (loading) return <Spinner />;

	return (
		<div className="details">
			<div className="wrapper">
				<img src={poster_path ? IMG_API + poster_path : NO_IMAGE} alt={name} />
				<div className="desc">
					<h2>{name}</h2>
					<span>{vote_average * 10}% | </span>
					<span>
						<Moment format="MMM D, YYYY">{first_air_date}</Moment>
					</span>
					<div className="genres">
						{genres &&
							genres.map((genre: IGenre, id: number) => (
								<span key={genre.id}>{(id ? ', ' : '') + genre.name} </span>
							))}
					</div>
					<p>{overview}</p>
				</div>
			</div>
		</div>
	);
};