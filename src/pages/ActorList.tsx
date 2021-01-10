import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addActors, getActors } from '../store/actions/actorActions';
import { IMG_API } from '../globalVariables';
import { Searchbox } from '../components/Searchbox';
import { Spinner } from '../components/Spinner';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { RootState } from '../store/types/rootTypes';

export const ActorList: React.FC = () => {
	const [page, setPage] = useState(2);
	const [dataLength, setDataLength] = useState(20);
	const [hasMore, setHasMore] = useState(true);

	const dispatch = useDispatch();

	const actorList = useSelector((state: RootState) => state.actorList);
	const { loading, actors, query, nextLoading, results, pages } = actorList;

	useEffect(() => {
		dispatch(getActors());
	}, [dispatch]);

	const fetchNextPage = () => {
		if (!query) {
			dispatch(addActors(page));
			setPage(page + 1);
			setDataLength(dataLength + 20);
			if (page === pages) {
				setHasMore(false);
			}
		}
	};

	return (
		<>
			<Searchbox actors />
			{loading ? (
				<Spinner />
			) : results !== 0 ? (
				<InfiniteScrolling
					dataLength={dataLength}
					next={fetchNextPage}
					hasMore={!nextLoading && hasMore}
				>
					<div className="list-container">
						{actors.map(
							(actor) =>
								actor.profile_path && (
									<div className="card" key={actor.id}>
										<Link to={`/actor/${actor.id}`}>
											<img
												src={IMG_API + actor.profile_path}
												alt={actor.name}
											/>
											<h3>{actor.name}</h3>
											<p>{actor.birthday}</p>
										</Link>
									</div>
								)
						)}
					</div>
				</InfiniteScrolling>
			) : (
				<h2 className="py-2 text-center">No Actors Found</h2>
			)}
		</>
	);
};
