import React from 'react'
import Book from '../Book'

const BookList = ({booksCollection, onDelete}) => {
    if (!booksCollection.length) {
        return (
            <div>
                Коллекция отсутсвует
            </div>
        )
    }
    return (
        <div className="books-grid">
            {booksCollection.map(book => {
                return (
                    <Book book={book} key={book._id} onDelete={onDelete}/>
                );
            })}
        </div>
    )
};

export default BookList