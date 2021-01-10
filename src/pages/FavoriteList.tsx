import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/actions/movieActions';
import Moment from 'react-moment';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types/rootTypes';

export const FavoriteList: React.FC = () => {
	const dispatch = useDispatch();

	const favoriteList = useSelector((state: RootState) => state.favoriteList);
	const { favorites } = favoriteList;

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<>
			{favorites.length > 0 ? (
				<div className="list-container">
					{favorites.map((movie) => (
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
					))}
				</div>
			) : (
				<h2 className="py-2 text-center">No Movies Found</h2>
			)}
		</>
	);
};
