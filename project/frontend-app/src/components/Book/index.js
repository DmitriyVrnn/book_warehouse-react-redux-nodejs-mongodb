import React from 'react'

const Book = ({book: {titleBook, authorBook}}) => {
    return (
        <div className='book-card'>
            <div>Тут фото</div>
            <h2>Название: {titleBook}</h2>
            <p>Автор: {authorBook}</p>
        </div>
    );
};

export default Book;