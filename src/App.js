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
import LearningVideoPage from './Pages/LearningVideoPage';
import SingleQuizPage from './Pages/SingleQuizPage';
import QuizQuestionsPage from './Pages/QuizQuestionsPage';
import QuizScorePage from './Pages/QuizScorePage';
import Hangman from './Games/Hangman/Hangman';
import Footer from './Components/Footer';
import Snake from './Games/Snake/snake';
import Board from './Games/Breakout/Game/Board';
import TicTacToe from './Games/TicTacToe/Game';
import RockPaperScissor from './Games/RockPaperScissor/RockPaperScissor';

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
					<Route exact path='/quiz/:name' component={SingleQuizPage} />
					<Route exact path='/quiz/:name/score' component={QuizScorePage} />
					<Route exact path='/quiz/:name/:ques' component={QuizQuestionsPage} />
					<Route exact path='/learning' component={LearningPage} />
					<Route exact path='/learning/:name' component={LearningVideoPage} />
					<Route exact path='/games' component={GamesPage} />
					<Route exact path='/games/hangman' component={Hangman} />
					<Route exact path='/games/snake' component={Snake} />
					<Route exact path='/games/breakout' component={Board} />
					<Route exact path='/games/tic-tac-toe' component={TicTacToe} />
					<Route path='/games/rock-paper-scissor' component={RockPaperScissor} />
					<Route component={ErrorPage} />
				</Switch>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App;