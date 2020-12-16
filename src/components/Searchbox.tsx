import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Searchbox.scss';

import { AppCtx } from '../context/AppCtx';
import { searchActors, searchMovies, searchSerials } from '../context/actions';

export const Searchbox: React.FC = () => {
	const { dispatch } = useContext(AppCtx);
	const [text, setText] = useState('');
	const location = useLocation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (location.pathname === '/') {
			searchMovies(dispatch, text);
			// console.log('movies');
		} else if (location.pathname === '/serials') {
			searchSerials(dispatch, text);
			// console.log('serials');
		} else {
			searchActors(dispatch, text);
			// console.log('actors');
		}
		setText('');
		// console.log(text);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	return (
		<div className="search-box">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search movies..."
					value={text}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};
