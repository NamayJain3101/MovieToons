import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import "./styles.scss";
import { Switch, Route } from "react-router-dom";

function RockPaperScissor() {
  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(localStorage.getItem(`movietoons-rockPaperScissor`) ? JSON.parse(localStorage.getItem(`movietoons-rockPaperScissor`)) : 0)

  useEffect(() => {
    const highscore = localStorage.getItem(`movietoons-rockPaperScissor`) ? JSON.parse(localStorage.getItem(`movietoons-rockPaperScissor`)) : 0
    if (score > highscore) {
      localStorage.setItem(`movietoons-rockPaperScissor`, JSON.stringify(score))
      setHighscore(score)
    }
  }, [score])

  return (
    <React.Fragment>
      <div className="container my-5">
        <Header score={score} highscore={highscore} />
        <Switch>
          <Route exact path={`/games/rock-paper-scissor/`}>
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path={`/games/rock-paper-scissor/play`}>
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default RockPaperScissor;
