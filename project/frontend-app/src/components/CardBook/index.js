import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import { WORKER } from '../../constants/constants';

const CardBook = ({
  book: {
    titleBook, authorBook, series,
    publishing, description, _id,
  },
  onDelete, roleUser,
}) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const handleSubmit = () => setOpen(false);

  const handleCancel = () => setOpen(false);

  return (
    <div className="book-card">
      <div className="content-card">
        <button type="button" className="modal-open" onClick={openModal}>&#9776;</button>
        <Modal
          title={titleBook}
          isOpen={isOpen}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        >
          <p>
            Автор:
            {authorBook}
          </p>
          <p>
            Серия:
            {series}
          </p>
          <p>
            Издательство:
            {publishing}
          </p>
          {!description ? (
            <p>
              Описания:
              <span role="img" aria-label="empty" className="not-description">❌</span>
            </p>
          )
            : (
              <p>
                Описание:
                {description}
              </p>
            )}
          {roleUser === WORKER ? null
            : (
              <div className="modal-book-btn">
                <Link className="modal-edit-link" to={`/edit/${_id}`}>Редактировать</Link>
                <button type="button" className="modal-delete-btn" onClick={() => onDelete(_id)}>Удалить</button>
              </div>
            )
          }
        </Modal>
        <h2 className="card-title">
          Название:
          {titleBook}
        </h2>
        <span className="card-author">
          Автор:
          {authorBook}
        </span>
        <p className="card-description">
          Описание:
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardBook;

CardBook.propTypes = {
  book: PropTypes.shape({
    titleBook: PropTypes.string,
    authorBook: PropTypes.string,
    series: PropTypes.string,
    publishing: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  roleUser: PropTypes.string,
};

CardBook.defaultProps = {
  book: {
    titleBook: '',
    authorBook: '',
    series: '',
    publishing: '',
    description: '',
    _id: {},
  },
  onDelete: () => {
  },
  roleUser: '',
};
