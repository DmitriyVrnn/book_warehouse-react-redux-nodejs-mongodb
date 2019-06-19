import React from 'react';
import PropTypes from 'prop-types';

import CardBook from '../CardBook';

const ListBookCards = ({ booksCards, onDelete, role }) => {
  if (!booksCards.length) {
    return (
      <p>
        Коллекция отсутсвует
      </p>
    );
  }
  return (
    <section className="books-grid">
      {booksCards.map(book => (
        <CardBook
          roleUser={role}
          book={book}
          key={book._id}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

export default ListBookCards;

ListBookCards.propTypes = {
  onDelete: PropTypes.func,
  role: PropTypes.string,
  booksCards: PropTypes.arrayOf(PropTypes.any),
};

ListBookCards.defaultProps = {
  booksCards: [],
  onDelete: () => {},
  role: '',
};
