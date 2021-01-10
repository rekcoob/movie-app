import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSerials, getSerials } from '../store/actions/serialActions';
import Moment from 'react-moment';
import { Searchbox } from '../components/Searchbox';
import { Spinner } from '../components/Spinner';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { IMG_API } from '../globalVariables';
import { RootState } from '../store/types/rootTypes';

export const SerialList: React.FC = () => {
	const [page, setPage] = useState(2);
	const [dataLength, setDataLength] = useState(20);
	const [hasMore, setHasMore] = useState(true);

	const dispatch = useDispatch();

	const serialList = useSelector((state: RootState) => state.serialList);
	const { loading, serials, query, nextLoading, results, pages } = serialList;

	useEffect(() => {
		dispatch(getSerials());
	}, [dispatch]);

	const fetchNextPage = () => {
		if (!query) {
			dispatch(addSerials(page));
			setPage(page + 1);
			setDataLength(dataLength + 20);
			if (page === pages) {
				setHasMore(false);
			}
		}
	};

	return (
		<>
			<Searchbox serials />

			{loading ? (
				<Spinner />
			) : results !== 0 ? (
				<InfiniteScrolling
					dataLength={dataLength}
					next={fetchNextPage}
					hasMore={!nextLoading && hasMore}
				>
					<div className="list-container">
						{serials.map(
							(serial) =>
								serial.poster_path && (
									<div className="card" key={serial.id}>
										<Link to={`/serial/${serial.id}`}>
											<img
												src={IMG_API + serial.poster_path}
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
								)
						)}
					</div>
				</InfiniteScrolling>
			) : (
				<h2 className="py-2 text-center">No Serials Found</h2>
			)}
		</>
	);
};
