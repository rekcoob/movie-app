import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppCtx } from '../context/AppCtx';
import { clearActor, getActors } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';
import { Searchbox } from '../components/Searchbox';

export const Actors: React.FC = () => {
	const {
		state: { loading, actors },
		dispatch,
	} = useContext(AppCtx);

	useEffect(() => {
		getActors(dispatch);
	}, [dispatch]);

	const handleClick = () => {
		clearActor(dispatch);
	};

	return (
		<>
			<Searchbox actors />
			<div className="container">
				{loading || actors === null ? (
					<Spinner />
				) : actors.length !== 0 ? (
					actors.map((actor) => (
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
