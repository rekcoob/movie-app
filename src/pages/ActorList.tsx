import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActors } from '../store/actions';
import { Spinner } from '../components/Spinner';
import { Searchbox } from '../components/Searchbox';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { RootState } from '../store/types';

export const ActorList: React.FC = () => {
	const dispatch = useDispatch();

	const actorList = useSelector((state: RootState) => state.actorList);
	const { loading, actors } = actorList;

	useEffect(() => {
		dispatch(getActors());
	}, [dispatch]);

	const handleClick = () => {};

	return (
		<>
			<Searchbox actors />
			<div className="container">
				{loading || actors === null ? (
					<Spinner />
				) : actors.length > 0 ? (
					actors.map((actor: any) => (
						<div className="card" key={actor.id}>
							<Link onClick={handleClick} to={`/actor/${actor.id}`}>
								<img
									src={
										actor.profile_path ? IMG_API + actor.profile_path : NO_IMAGE
									}
									alt={actor.name}
								/>
								<h3>{actor.name}</h3>
								<p>{actor.birthday}</p>
							</Link>
						</div>
					))
				) : (
					<h2 className="py-2">No Actors Found</h2>
				)}
			</div>
		</>
	);
};
