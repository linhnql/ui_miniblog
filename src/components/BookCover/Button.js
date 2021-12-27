import React, { Component } from 'react';
import {
    Route,
    NavLink
} from "react-router-dom";
import BookDetail from "../BookDetail/BookDetail"

export default class Button extends Component {
    render() {
        const book = this.props.book;
        const id = book.id;

        return (
            <div>
                <NavLink to={`/books/${id}`}>
                    <button className='btn'>DETAIL</button>
                </NavLink>
                <Route exact path={`/books/${id}`}>
                    <BookDetail /> 
                </Route>
            </div>
        );
    }
}
