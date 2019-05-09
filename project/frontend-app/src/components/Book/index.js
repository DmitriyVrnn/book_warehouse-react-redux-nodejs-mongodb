import React from 'react'

const Book = ({book: {titleBook, authorBook, publishing, series}}) => {
    return (
        <div>
            <h2>{titleBook}</h2>
            <p>{authorBook}</p>
            <p>{publishing}</p>
            <span>{series}</span>
        </div>
    );
};

export default Book;