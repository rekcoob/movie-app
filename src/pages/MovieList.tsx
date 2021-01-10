import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, addMovies } from '../store/actions/movieActions';
import Moment from 'react-moment';
import { Searchbox } from '../components/Searchbox';
import { Spinner } from '../components/Spinner';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { IMG_API } from '../globalVariables';
import { RootState } from '../store/types/rootTypes';

export const MovieList: React.FC = () => {
	const [page, setPage] = useState(2);
	const [dataLength, setDataLength] = useState(20);
	const [hasMore, setHasMore] = useState(true);

	const dispatch = useDispatch();

	const movieList = useSelector((state: RootState) => state.movieList);
	const { loading, movies, query, nextLoading, results, pages } = movieList;

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	const fetchNextPage = () => {
		if (!query) {
			dispatch(addMovies(page));
			setPage(page + 1);
			setDataLength(dataLength + 20);
			if (page === pages) {
				setHasMore(false);
			}
		}
	};

	return (
		<>
			<Searchbox movies />
			{loading ? (
				<Spinner />
			) : results !== 0 ? (
				<InfiniteScrolling
					dataLength={dataLength}
					next={fetchNextPage}
					hasMore={!nextLoading && hasMore}
				>
					<div className="list-container">
						{movies.map(
							(movie) =>
								movie.poster_path && (
									<div className="card" key={movie.id}>
										<Link to={`/movie/${movie.id}`}>
											<img
												src={IMG_API + movie.poster_path}
												alt={movie.title}
											/>
											<h3>{movie.title}</h3>
											<p>
												<span>{movie.vote_average * 10}% | </span>
												<span>
													<Moment format="MMM D, YYYY">
														{movie.release_date}
													</Moment>
												</span>
											</p>
										</Link>
									</div>
								)
						)}
					</div>
				</InfiniteScrolling>
			) : (
				<h2 className="py-2 text-center">No Movies Found</h2>
			)}
		</>
	);
};
