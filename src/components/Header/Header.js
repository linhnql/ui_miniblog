import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import BookDetail from '../BookDetail/BookDetail';
import BookList from "../BookList/BookList"
import "../Header/header.css"

class Header extends Component { 
  render() {
    return (
      <div className="book">
        <Router>
          <div className="book__choice">
            <Link to="/">
              <i className="fas fa-book-open fa-lg" />
            </Link>
            <div className="header--choice">
              <ul className="choice--list">
                <li>
                  <Link className="choice__link" to="/books/category/html">HTML</Link>
                </li>
                <li>
                  <Link className="choice__link" to="/books/category/css">CSS</Link>
                </li>
                <li>
                  <Link className="choice__link" to="/books/category/javascript">JavaScript</Link>
                </li>
                <li>
                  <Link className="choice__link" to="/books/category/reactjs">ReactJS</Link>
                </li>
                <li className="one">
                  <Link className="choice__link" to="/books/category/nodejs">NodeJS</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="book__title">
            <Switch>
              <Route exact path="/books/category/css">
                <BookList name={"CSS"} />
              </Route>
              <Route exact path="/books/category/javascript">
                <BookList name={"JavaScript"} />
              </Route>
              <Route exact path="/books/category/reactjs">
                <BookList name={"Reactjs"} />
              </Route>
              <Route exact path="/books/category/nodejs">
                <BookList name={"Nodejs"} />
              </Route>
              <Route exact path="/books/:id" component={BookDetail} />
              <Route extract path="/">
                <BookList name={"HTML"} />
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Header;