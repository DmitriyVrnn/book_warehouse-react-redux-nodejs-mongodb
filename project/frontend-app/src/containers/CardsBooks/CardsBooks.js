import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader/index';
import ListBookCards from '../../components/ListBookCards/index';
import { fetchAllCollectionBooks, deleteBook } from "../../actions/collectionBooks";

const CardsBooks = ({fetchAllCollectionBooks, deleteBook,
                        booksCollection, loading, auth: {user}}) => {

    useEffect(() => {
        fetchAllCollectionBooks()
    }, []);

    if (loading) {
        return <Loader/>
    } else {
        return (
            <ListBookCards role={user.role}
                           onDelete={deleteBook}
                           booksCards={booksCollection}/>
        )
    }
};

export default connect((state) => ({
    booksCollection: state.booksCollection.booksItem,
    loading: state.booksCollection.loading,
    auth: state.auth
}), {fetchAllCollectionBooks, deleteBook})(CardsBooks)

CardsBooks.propTypes = {
    fetchAllCollectionBooks: PropTypes.func,
    deleteBook: PropTypes.func,
    booksCollection: PropTypes.array,
    loading: PropTypes.bool,
    user: PropTypes.string,
};

CardsBooks.defaultProps = {
    fetchAllCollectionBooks: () => {},
    deleteBook: () => {},
    booksCollection: [],
    loading: false,
    user: '',
};