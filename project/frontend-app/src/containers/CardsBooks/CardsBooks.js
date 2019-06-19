import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader/index';
import ListBookCards from '../../components/ListBookCards/index';
import { fetchAllCollectionBooks, deleteBook } from '../../actions/collectionBooks';

const CardsBooks = ({
  fetchAllCollectionBooksConnect, deleteBookConnect,
  booksCollection, loading, auth: { user: { role } },
}) => {
  useEffect(() => {
    fetchAllCollectionBooksConnect();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <ListBookCards
      role={role}
      onDelete={deleteBookConnect}
      booksCards={booksCollection}
    />
  );
};

export default connect(state => ({
  booksCollection: state.booksCollection.booksItem,
  loading: state.booksCollection.loading,
  auth: state.auth,
}), {
  fetchAllCollectionBooksConnect: fetchAllCollectionBooks,
  deleteBookConnect: deleteBook,
})(CardsBooks);

CardsBooks.propTypes = {
  fetchAllCollectionBooksConnect: PropTypes.func,
  deleteBookConnect: PropTypes.func,
  booksCollection: PropTypes.array,
  loading: PropTypes.bool,
  auth: PropTypes.shape({
    user: PropTypes.shape({
      role: PropTypes.string,
    }),
  }),
};

CardsBooks.defaultProps = {
  fetchAllCollectionBooksConnect: () => {
  },
  deleteBookConnect: () => {
  },
  booksCollection: {},
  loading: false,
  auth: {
    user: {
      role: '',
    },
  },
};
