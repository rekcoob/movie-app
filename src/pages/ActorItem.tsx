import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActor } from '../store/actions/actorActions';
import Moment from 'react-moment';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types/rootTypes';

export const ActorItem: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();

	const actorItem = useSelector((state: RootState) => state.actorItem);
	const { loading, actor } = actorItem;
	const { name, profile_path, biography, birthday, place_of_birth } = actor;

	useEffect(() => {
		dispatch(getActor(+id));
	}, [dispatch, id]);

	if (loading) return <Spinner />;
	return (
		<div className="details">
			<img src={profile_path ? IMG_API + profile_path : NO_IMAGE} alt={name} />

			<div className="desc">
				<h2>{name}</h2>
				{birthday && (
					<span>
						<Moment format="MMMM D, YYYY">{birthday}</Moment> |{' '}
					</span>
				)}
				<span>{place_of_birth}</span>
				<p>{biography}</p>
			</div>
		</div>
	);
};
