import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { AppCtx } from '../context/AppCtx';
import { clearMovie, getMovies } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { Searchbox } from '../components/Searchbox';

export const Movies: React.FC = () => {
	const {
		state: { loading, movies },
		dispatch,
	} = useContext(AppCtx);

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);

	const handleClick = () => {
		clearMovie(dispatch);
	};

	return (
		<>
			<Searchbox movies />
			<div className="container">
				{loading || movies === null ? (
					<Spinner />
				) : movies.length !== 0 ? (
					movies.map((movie) => (
						<div className="card" key={movie.id}>
							<Link onClick={handleClick} to={`/movie/${movie.id}`}>
								<img
									src={
										movie.poster_path ? IMG_API + movie.poster_path : NO_IMAGE
									}
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
					))
				) : (
					<h2 className="py-2">No Movies Found</h2>
				)}
			</div>
		</>
	);
};
