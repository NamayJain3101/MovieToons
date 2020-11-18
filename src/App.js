import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './Components/Navbar';
import CartoonPage from './Pages/CartoonPage';
import ErrorPage from './Pages/ErrorPage';
import GamesPage from './Pages/GamesPage';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import LearningPage from './Pages/LearningPage';
import CartoonsEpisodesPage from './Pages/CartoonsEpisodesPage';
import CartoonVideoPage from './Pages/CartoonVideoPage';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/cartoons' component={CartoonPage} />
					<Route exact path='/cartoons/:name' component={CartoonsEpisodesPage} />
					<Route exact path='/cartoons/:name/:episodeNo' component={CartoonVideoPage} />
					<Route exact path='/quiz' component={QuizPage} />
					<Route exact path='/games' component={GamesPage} />
					<Route exact path='/learning' component={LearningPage} />
					<Route component={ErrorPage} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default App;