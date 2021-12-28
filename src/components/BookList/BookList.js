import React, { Component } from 'react'
import "./book.css"
import axios from 'axios'
import BookCover from '../BookCover/BookCover';
import Pagination from '@material-ui/lab/Pagination';

export default class BookList extends Component {
    constructor() {
        super();
        this.state = {
            book: [], 
        };
    }

    getData(){
        axios.get(`http://localhost:3000/books?category=${this.props.name}`)
            .then(res => { this.setState({ book: res.data }) })
            .catch(console.error());
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(){
        this.getData();
    }

    render() {
        const book = this.state.book;
        return (
            <div className='body'>
                <span className='title'>{this.props.name} Books</span>
                <div>
                    { book.map((data, index) =>
                        <div key={index}>
                            <BookCover book={data} />
                        </div>
                    )}
                    {/* <Pagination count={5} data={book} /> */}
                </div>
            </div>
        )
    }
}