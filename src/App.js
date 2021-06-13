import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Loading from './Components/Loading';

const Navbar = React.lazy(() => import('./Components/Navbar'))
const Footer = React.lazy(() => import('./Components/Footer'))
const ContactUs = React.lazy(() => import('./Pages/ContactUsPage'))

const ErrorPage = React.lazy(() => import('./Pages/ErrorPage'))
const CartoonPage = React.lazy(() => import('./Pages/CartoonPage'))
const GamesPage = React.lazy(() => import('./Pages/GamesPage'))
const HomePage = React.lazy(() => import('./Pages/HomePage'))
const QuizPage = React.lazy(() => import('./Pages/QuizPage'))
const LearningPage = React.lazy(() => import('./Pages/LearningPage'))
const LearningVideoPage = React.lazy(() => import('./Pages/LearningVideoPage'))
const CartoonsEpisodesPage = React.lazy(() => import('./Pages/CartoonsEpisodesPage'))
const CartoonVideoPage = React.lazy(() => import('./Pages/CartoonVideoPage'))
const SingleQuizPage = React.lazy(() => import('./Pages/SingleQuizPage'))
const QuizQuestionsPage = React.lazy(() => import('./Pages/QuizQuestionsPage'))
const QuizScorePage = React.lazy(() => import('./Pages/QuizScorePage'))
const Hangman = React.lazy(() => import('./Games/Hangman/Hangman'))
const Snake = React.lazy(() => import('./Games/Snake/snake'))
const Board = React.lazy(() => import('./Games/Breakout/Game/Board'))
const TicTacToe = React.lazy(() => import('./Games/TicTacToe/Game'))
const RockPaperScissor = React.lazy(() => import('./Games/RockPaperScissor/RockPaperScissor'))

class App extends Component {
	render() {
		return (
			<React.Suspense fallback={<Loading title="Loading..." />}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/contact-us' component={ContactUs} />
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
			</React.Suspense>
		)
	}
}

export default App;