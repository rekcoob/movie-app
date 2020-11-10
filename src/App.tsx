import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context/AppCtx';

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
		<AppProvider>
			<BrowserRouter>
				<Navbar />
				<div className="container">
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

						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		</AppProvider>
	);
};

export default App;
