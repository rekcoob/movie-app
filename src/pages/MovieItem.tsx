import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavs, getMovie, removeFromFavs } from '../store/actions';
import Moment from 'react-moment';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types';

export const MovieItem: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();

	const movieItem = useSelector((state: RootState) => state.movieItem);
	const { loading, movie } = movieItem;
	const {
		title,
		poster_path,
		vote_average,
		release_date,
		overview,
		genres,
	} = movie;

	const favoriteList = useSelector((state: RootState) => state.favoriteList);
	const { favorites } = favoriteList;

	useEffect(() => {
		dispatch(getMovie(+id));
	}, [dispatch, id]);

	if (loading) return <Spinner />;
	return (
		<div className="details">
			<div className="wrapper">
				<img src={poster_path ? IMG_API + poster_path : NO_IMAGE} alt={title} />
				<div className="desc">
					<h2>
						{title}{' '}
						<span>
							{favorites && favorites.find((fav) => fav.id === +id) ? (
								<i
									className="fas fa-heart"
									onClick={() => dispatch(removeFromFavs(+id))}
									style={{
										color: '#EE515E',
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								></i>
							) : (
								<i
									className="far fa-heart"
									onClick={() => dispatch(addToFavs(movie))}
									style={{
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								></i>
							)}
							{/* <button
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
							</button> */}
						</span>
					</h2>

					<span>{vote_average * 10}% | </span>
					<span>
						<Moment format="MMM D, YYYY">{release_date}</Moment>
					</span>
					<div className="genres">
						{genres &&
							genres.map((genre, id) => (
								<span key={genre.id}>{(id ? ', ' : '') + genre.name} </span>
							))}
					</div>
					<p>{overview}</p>
				</div>
			</div>
		</div>
	);
};
