import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActor } from '../store/actions';
import Moment from 'react-moment';
// import { AppCtx } from '../context/AppCtx';
// import { getActor } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';

export const Actor: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	// const {
	// 	state: {
	// 		loading,
	// 		actor: { name, profile_path, biography, birthday, place_of_birth },
	// 	},
	// 	dispatch,
	// } = useContext(AppCtx);
	const dispatch = useDispatch();

	const actorItem = useSelector((state: any) => state.actorItem);
	const { loading, actor } = actorItem;
	const { name, profile_path, biography, birthday, place_of_birth } = actor;

	useEffect(() => {
		// getActor(dispatch, +id);
		dispatch(getActor(+id));
	}, [dispatch, id]);

	if (loading) return <Spinner />;
	return (
		<div className="details">
			<div className="wrapper">
				<img
					src={profile_path ? IMG_API + profile_path : NO_IMAGE}
					alt={name}
				/>

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
		</div>
	);
};
