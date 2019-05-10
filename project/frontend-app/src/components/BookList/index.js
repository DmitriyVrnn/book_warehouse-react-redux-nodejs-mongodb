import React from 'react'
import {connect} from 'react-redux'
import Book from '../Book'

const BookList = ({booksCollection}) => {
    if(!booksCollection.length) {
        return (
            <div>
                Коллекция отсутсвует
            </div>
        )
    }

    return(
        <div className="books-grid">
            {booksCollection.map(book => {
                return (
                    <Book book={ book } key={ book._id }/>
                );
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        booksCollection: state.booksCollection,
    };
};

export default connect(mapStateToProps)(BookList)