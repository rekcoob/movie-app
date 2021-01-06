import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSerial } from '../store/actions';
import Moment from 'react-moment';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types';

export const SerialItem: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();

	const serialItem = useSelector((state: RootState) => state.serialItem);
	const { loading, serial } = serialItem;
	const {
		name,
		poster_path,
		first_air_date,
		vote_average,
		overview,
		genres,
	} = serial;

	useEffect(() => {
		dispatch(getSerial(+id));
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
