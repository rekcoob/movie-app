import React from 'react';
import ReactDOM from 'react-dom';
// import { AppProvider } from './context/AppCtx';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
