import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MovieList } from './pages/MovieList';
import { SerialList } from './pages/SerialList';
import { ActorList } from './pages/ActorList';
import { MovieItem } from './pages/MovieItem';
import { SerialItem } from './pages/SerialItem';
import { ActorItem } from './pages/ActorItem';
import { FavoriteList } from './pages/FavoriteList';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<MovieList />
				</Route>

				<Route path="/serials">
					<SerialList />
				</Route>

				<Route path="/actors">
					<ActorList />
				</Route>

				<Route path="/favorites">
					<FavoriteList />
				</Route>

				<Route path="/movie/:id">
					<MovieItem />
				</Route>

				<Route path="/serial/:id">
					<SerialItem />
				</Route>

				<Route path="/actor/:id">
					<ActorItem />
				</Route>

				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
