import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { WORKER } from '../../constants/constants';

const TableRow = ({ obj, removeToListBook, roleUser }) => {
  const {
    titleBook, authorBook, publishing, series, idBook, _id,
  } = obj;

  const deleteBook = () => {
    const confirm = window.confirm(`Вы уверены что хотите удалить книгу "${titleBook}"?`);
    if (confirm) {
      axios.get(`http://localhost:4200/book/delete/${_id}`)
        .then(() => {
          alert(`Книга "${titleBook}" удалена`);
          removeToListBook(obj);
        })
        .catch(err => console.log(err));
    } else alert('Удаление отменено');
  };

  return (
    <tr>
      <td>
        {titleBook}
      </td>
      <td>
        {authorBook}
      </td>
      <td>
        {publishing}
      </td>
      <td>
        {series}
      </td>
      <td>{idBook}</td>
      {roleUser === WORKER ? null
        : (
          <>
            <td>
              <button type="button" className="table-btn table-btn-edit" title="Редактировать">
                <Link to={`/edit/${_id}`}>
                  <i className="fas fa-edit" />
                </Link>
              </button>
            </td>
            <td>
              <button type="button" className="table-btn table-btn-delete" title="Удалить" onClick={deleteBook}>
                <i className="fas fa-trash-alt" />
              </button>
            </td>
          </>
        )
        }
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  obj: PropTypes.objectOf(PropTypes.any),
  removeToListBook: PropTypes.func.isRequired,
  roleUser: PropTypes.string,
};

TableRow.defaultProps = {
  obj: {},
  roleUser: '',
};
