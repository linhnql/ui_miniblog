import React, { Component } from 'react';
import "./bookDetail.css"
import axios from 'axios'
import Rating from './Rating';

export default class BookDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {
            }
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => { this.setState({ book: res.data }); })
            .catch(console.error());
    }
    
    render() {
        const book = this.state.book;
        
        return (
            <div className='book--body'>
                <img src={book.image} alt={book.category} className="image"/>
                <div className='book--main'>
                    <div className='book--name'>{book.name}</div>
                    <div className='book--author'>By <span className='book--author--name'>{book.author}</span></div>
                    <div className='book--detail'>{book.content}</div>
                </div>
                <Rating/>
            </div>
        );
    }
}
