import React, { useContext, useState } from 'react';
import './Searchbox.scss';
import { AppCtx } from '../context/AppCtx';
import { searchActors, searchMovies, searchSerials } from '../context/actions';

type Props = {
	movies?: boolean;
	serials?: boolean;
	actors?: boolean;
};

export const Searchbox: React.FC<Props> = (props) => {
	const { dispatch } = useContext(AppCtx);
	const [query, setQuery] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (props.movies) {
			searchMovies(dispatch, query);
		} else if (props.serials) {
			searchSerials(dispatch, query);
		} else {
			searchActors(dispatch, query);
		}
		setQuery('');
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
