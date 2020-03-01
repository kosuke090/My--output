import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Book from "./Components/Book";
import "./css/app.css"


const doMove=()=>{
  window.addEventListener('mousemove',e=>{
    const point = document.querySelector('.point');
    point.style.top = e.clientY + "px";
    point.style.left = e.clientX + "px";
  });

  
}



export default function App() {
  return (
    <Router>
      <div>
        <nav className="header">
          <h1>MY OUTPUT</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/book">book</Link>
            </li>
          </ul>
  
        </nav>
        <div className="point">
        </div>
        {doMove()}

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
         
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

