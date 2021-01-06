import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/actions';
import Moment from 'react-moment';
import { Spinner } from '../components/Spinner';
import { Searchbox } from '../components/Searchbox';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types';

export const MovieList: React.FC = () => {
	const dispatch = useDispatch();

	const movieList = useSelector((state: RootState) => state.movieList);
	const { loading, movies } = movieList;

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<>
			<Searchbox movies />
			<div className="container">
				{loading || movies === null ? (
					<Spinner />
				) : movies.length > 0 ? (
					movies.map((movie) => (
						<div className="card" key={movie.id}>
							<Link to={`/movie/${movie.id}`}>
								<img
									src={
										movie.poster_path ? IMG_API + movie.poster_path : NO_IMAGE
									}
									alt={movie.title}
								/>
								<h3>{movie.title}</h3>
								<p>
									<span>{movie.vote_average * 10}% | </span>
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
