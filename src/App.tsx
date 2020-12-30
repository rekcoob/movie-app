import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Movies } from './pages/Movies';
import { Serials } from './pages/Serials';
import { Actors } from './pages/Actors';
import { Movie } from './pages/Movie';
import { Serial } from './pages/Serial';
import { Actor } from './pages/Actor';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Movies />
				</Route>

				<Route path="/serials">
					<Serials />
				</Route>

				<Route path="/actors">
					<Actors />
				</Route>

				<Route path="/movie/:id">
					<Movie />
				</Route>

				<Route path="/serial/:id">
					<Serial />
				</Route>

				<Route path="/actor/:id">
					<Actor />
				</Route>

				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
