import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { CartoonsProvider } from './Context/CartoonsContext';
import { LearningProvider } from './Context/LearningContext';
import { QuizzesProvider } from './Context/QuizContext';

ReactDOM.render(
  <React.StrictMode>
    <QuizzesProvider>
      <CartoonsProvider>
        <LearningProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LearningProvider>
      </CartoonsProvider>
    </QuizzesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
