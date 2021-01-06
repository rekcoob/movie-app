import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../store/actions';

import Moment from 'react-moment';
// import { AppCtx } from '../context/AppCtx';
// import {
// 	getMovie,
// 	addToFavorites,
// 	removeFromFavorites,
// } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { IGenre } from '../context/types';

export const MovieItem: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	// const {
	// 	state: { loading, movie, favorites },
	// 	dispatch,
	// } = useContext(AppCtx);
	// const {
	// 	title,
	// 	poster_path,
	// 	vote_average,
	// 	release_date,
	// 	overview,
	// 	genres,
	// } = movie;

	const dispatch = useDispatch();

	const movieItem = useSelector((state: any) => state.movieItem);
	const { loading, movie } = movieItem;
	const {
		title,
		poster_path,
		vote_average,
		release_date,
		overview,
		genres,
	} = movie;

	useEffect(() => {
		// getMovie(dispatch, +id);
		dispatch(getMovie(+id));
	}, [dispatch, id]);

	const addFav = (movie: any) => {
		// dispatch(addToFavorites(movie));
		console.log('add to favs');
	};
	const removeFav = (id: any) => {
		// dispatch(removeFromFavorites(id));
		console.log('remove from favs');
	};

	if (loading) return <Spinner />;
	return (
		<div className="details">
			<div className="wrapper">
				<img src={poster_path ? IMG_API + poster_path : NO_IMAGE} alt={title} />
				<div className="desc">
					<h2>
						{title}{' '}
						<span>
							{/* {favorites && favorites.find((fav: any) => fav.id === id) ? (
								<button
									onClick={() => removeFav(id)}
									style={{
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								>
									<i className="far fa-heart"></i>
								</button>
							) : (
								<button
									onClick={() => addFav(movie)}
									style={{
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								>
									<i className="fas fa-heart"></i>
								</button>
							)} */}
							<button
								onClick={() => removeFav(id)}
								style={{
									fontSize: '2.1rem',
									cursor: 'pointer',
								}}
							>
								<i className="far fa-heart"></i>
							</button>
							<button
								onClick={() => addFav(movie)}
								style={{
									fontSize: '2.1rem',
									cursor: 'pointer',
								}}
							>
								<i className="fas fa-heart"></i>
							</button>
						</span>
					</h2>

					<span>{vote_average * 10}% | </span>
					<span>
						<Moment format="MMM D, YYYY">{release_date}</Moment>
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
