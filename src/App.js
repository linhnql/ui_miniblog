import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Book from "./Book/Book";
import "./App.css"

export default function App() {
  return (
    <div className="book">
      <Router>
          <div className="book__title">
            <i class="fas fa-book-open fa-lg"/>
            <div className="choice">
              <ul className="book__title--choice">
                <li>
                  <Link className="link-choice" to="/">HTML</Link>
                </li>
                <li>
                  <Link className="link-choice" to="/css">CSS</Link>
                </li>
                <li>
                  <Link className="link-choice" to="/javascript">JavaScript</Link>
                </li>
                <li>
                  <Link className="link-choice" to="/reactjs">ReactJS</Link>
                </li>
                <li  className="one">
                  <Link className="link-choice" to="/nodejs">NodeJS</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="book__main">
            <Switch> 
              <Route exact path="/css">
                <Book name={"CSS"}/>
              </Route>
              <Route exact path="/javascript">
                <Book name={"JavaScript"}/>
              </Route>
              <Route exact path="/reactjs">
                <Book name={"ReactJS"}/>
              </Route>
              <Route exact path="/nodejs">
                <Book name={"NodeJS"}/>
              </Route>
              <Route path="/">
                <Book className="a" name={"HTML"}/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}
