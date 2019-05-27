import React from 'react'
import {connect} from 'react-redux'
import BookList from '../components/BookList'
import {fetchAllCollectionBooks, deleteBook} from "../actions/collectionBooks";

class CollectionBooks extends React.Component {

    componentDidMount(){
        this.props.fetchAllCollectionBooks()
    }

    render() {
        const {deleteBook, booksCollection} = this.props;

        return (
            <div className='container'>
                <BookList onDelete={deleteBook} booksCollection={booksCollection}/>
            </div>
        )
    }
}


export default connect(state => ({
    booksCollection: state.booksCollection
}), {fetchAllCollectionBooks, deleteBook})(CollectionBooks)