import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TableRow from '../TableRow';
import { WORKER } from '../../constants/constants';

const TableBooks = ({ books, removeToListBook, role }) => {
  const elements = books.map((object, i) => (
    <TableRow
      key={i}
      obj={object}
      removeToListBook={removeToListBook}
      roleUser={role}
    />
  ));

  return (
    <Fragment>
      <div className="table-users">
        <div className="header-table">Книги</div>
        <table cellSpacing="0" id="table-to-xls">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Автор</th>
              <th>Издательство</th>
              <th>Серия</th>
              <th width="230">ID товара</th>
              {role === WORKER ? null
                : (
                  <>
                    <th />
                    <th />
                  </>
                )}
            </tr>
            {elements}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TableBooks;

TableBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
  removeToListBook: PropTypes.func.isRequired,
  role: PropTypes.string,
};

TableBooks.defaultProps = {
  books: [],
  role: '',
};
