import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Info from "../Info";
import About from "../About";
import style from "./styles.module.scss";
import Contact from "../Contact";
import BlogDetail from "../BlogDetail";
import Blog from "../Blog";
import BlogList from "../Blog/BlogList";
import AddBlog from "../BlogDetail/AddBlog";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className={style["header"]}>
            <Link className={style["header__name"]} to="/">
              Denali
            </Link>
            <div>
              <ul className={style["header__choice"]}>
                <li>
                  <Link className={style["header__choice__act"]} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={style["header__choice__act"]} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={style["header__choice__act"]} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={style["body"]}>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/blogs/:id" component={BlogDetail} />
              <Route path="/">
                <BlogList />
              </Route>
            </Switch>
            <Info />
          </div>
        </Router>
      </div>
    );
  }
}
