import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { AppCtx } from '../context/AppCtx';
import { clearMovie, getMovies } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';

export const Movies: React.FC = () => {
	const {
		state: { loading, movies },
		dispatch,
	} = useContext(AppCtx);

	useEffect(() => {
		getMovies(dispatch);
		// eslint-disable-next-line
	}, []);

	const handleClick = () => {
		clearMovie(dispatch);
	};

	if (loading) return <Spinner />;

	return (
		<>
			{movies.map((movie) => (
				<div className="card" key={movie.id}>
					<Link onClick={handleClick} to={`/movie/${movie.id}`}>
						<img
							src={movie.poster_path ? IMG_API + movie.poster_path : NO_IMAGE}
							alt={movie.title}
						/>
						<h3>{movie.title}</h3>
						<p>
							<span>{movie.vote_average * 10}% |</span>
							<span>
								<Moment format="MMM D, YYYY">{movie.release_date}</Moment>
							</span>
						</p>
					</Link>
				</div>
			))}
		</>
	);
};
