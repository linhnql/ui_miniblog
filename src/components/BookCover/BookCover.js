import React, { Component } from 'react'
import "./abook.css";
import Button from './Button';

export default class BookCover extends Component {

    render() {
        const book = this.props.book;
        return (
            <div className='a--book'>
                <img src={book.image} alt={book.category}/>
                <div className="book__name">{book.name}</div>
                <div className="book__author">
                    By <span className="book__author__name"> {book.author} </span>
                </div>
                <Button book={book}/>
            </div>
        )
    }
}