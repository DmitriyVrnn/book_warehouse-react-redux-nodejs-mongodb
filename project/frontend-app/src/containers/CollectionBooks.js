import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import Loader from '../components/Loader'
import BookList from '../components/BookList'
import {fetchAllCollectionBooks, deleteBook} from "../actions/collectionBooks";

const CollectionBooks = ({fetchAllCollectionBooks, deleteBook,
                             booksCollection, loading, auth: {user}}) => {

    useEffect(() => {
        fetchAllCollectionBooks()
    }, []);

    if (loading) {
        return <Loader/>
    } else {
        return (
            <div className='container'>
                <BookList role={user.role}
                          onDelete={deleteBook}
                          booksCollection={booksCollection}/>
            </div>
        )
    }
};

export default connect((state) => ({
        booksCollection: state.booksCollection,
        loading: state.booksCollection.loading,
        auth: state.auth
    }),
    {
        fetchAllCollectionBooks,
        deleteBook
    })(CollectionBooks)

/*class CollectionBooks extends React.Component {

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
                <BookList role={user.role}
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
}), {fetchAllCollectionBooks, deleteBook})(CollectionBooks)*/