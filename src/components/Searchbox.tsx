import React, { useState } from 'react';
import './Searchbox.scss';
import { useDispatch } from 'react-redux';
import { searchActors } from '../store/actions/actorActions';
import { searchMovies } from '../store/actions/movieActions';
import { searchSerials } from '../store/actions/serialActions';

type Props = {
	movies?: boolean;
	serials?: boolean;
	actors?: boolean;
};

export const Searchbox: React.FC<Props> = (props) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (query !== '') {
			if (props.movies) {
				dispatch(searchMovies(query));
			} else if (props.serials) {
				dispatch(searchSerials(query));
			} else {
				dispatch(searchActors(query));
			}
			setQuery('');
		}
	};

	return (
		<div className="search-box">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder={
						props.movies
							? 'Search movies...'
							: props.serials
							? 'Search serials...'
							: 'Search actors...'
					}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
		</div>
	);
};
