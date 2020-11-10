import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppCtx } from '../context/AppCtx';
import { clearActor, getActors } from '../context/actions';
import { Spinner } from '../components/Spinner';
import { IMG_API, NO_IMAGE } from '../globalVariables';

export const Actors: React.FC = () => {
	const {
		state: { loading, actors },
		dispatch,
	} = useContext(AppCtx);

	useEffect(() => {
		getActors(dispatch);
		// eslint-disable-next-line
	}, []);

	const handleClick = () => {
		clearActor(dispatch);
	};

	if (loading) return <Spinner />;

	return (
		<>
			{actors.map((actor) => (
				<div className="card" key={actor.id}>
					<Link onClick={handleClick} to={`/actor/${actor.id}`}>
						<img
							src={actor.profile_path ? IMG_API + actor.profile_path : NO_IMAGE}
							alt={actor.name}
						/>
						<h3>{actor.name}</h3>
						<p>{actor.birthday}</p>
					</Link>
				</div>
			))}
		</>
	);
};
