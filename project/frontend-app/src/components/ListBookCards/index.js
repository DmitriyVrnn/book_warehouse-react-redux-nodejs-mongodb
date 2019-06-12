import React from 'react';
import PropTypes from 'prop-types';

import CardBook from '../CardBook';

const ListBookCards = ({booksCards, onDelete, role}) => {
    if (!booksCards.length) {
        return (
            <p>
                Коллекция отсутсвует
            </p>
        )
    }
    return (
        <section className="books-grid">
            {booksCards.map(book => {
                return (
                    <CardBook roleUser={role} book={book} key={book._id} onDelete={onDelete}/>
                );
            })}
        </section>
    )
};

CardBook.PropTypes = {
  booksCards: PropTypes.array,
  onDelete: PropTypes.func,
  role: PropTypes.string,
};

CardBook.defaultProps = {
    booksCards: [],
    onDelete: () => {},
    role: '',
};

export default ListBookCards;