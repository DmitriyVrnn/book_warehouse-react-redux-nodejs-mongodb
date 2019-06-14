import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../components/Loader';
import ListBookCards from '../components/ListBookCards';
import {fetchAllCollectionBooks, deleteBook} from "../actions/collectionBooks";

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

/*class CardsBooks extends React.Component {

    componentDidMount() {
        this.props.fetchAllCollectionBooks()
    }

    render() {
        const {deleteBook, booksCollection, loading} = this.props;
        const {user} = this.props.auth;

        if (loading) {
            return <Loader/>
        }

        return (
            <div className='container'>
                <ListBookCards role={user.role}
                          onDelete={deleteBook}
                          booksCollection={booksCollection}/>
            </div>
        )
    }
}

export default connect((state) => ({
    booksCollection: state.booksCollection,
    loading: state.booksCollection.loading,
    auth: state.auth
}), {fetchAllCollectionBooks, deleteBook})(CardsBooks)*/