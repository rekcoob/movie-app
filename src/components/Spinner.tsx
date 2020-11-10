import React from 'react';
// import spinner from '../assets/spinner.gif';
import './Spinner.scss';

export const Spinner: React.FC = () => (
	<div className="spinner">
		<div></div>
		<div></div>
	</div>
	// <img
	// 	src={spinner}
	// 	alt="Loading..."
	// 	// style={{ width: '200px', margin: 'auto', display: 'block' }}
	// 	style={{
	// 		width: '300px',
	// 		margin: 'auto',
	// 		paddingTop: '5rem',
	// 		display: 'block',
	// 	}}
	// />
);
