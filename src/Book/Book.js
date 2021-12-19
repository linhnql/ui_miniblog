import React, { Component } from 'react'
import "./book.css"

export default class Book extends Component {
    render() {
        return (
            <div className='choice__title'>
                <span className='book__detail'>{this.props.name} Books</span>
            </div>
        )
    }
}
