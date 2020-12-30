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
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (props.movies) {
			searchMovies(dispatch, text);
		} else if (props.serials) {
			searchSerials(dispatch, text);
		} else {
			searchActors(dispatch, text);
		}
		setText('');
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
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</form>
		</div>
	);
};
