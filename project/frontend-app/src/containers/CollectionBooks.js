import React from 'react'
import {connect} from 'react-redux'
import BookList from '../components/BookList'
import {fetchAllCollectionBooks} from "../actions/collectionBooks";

class CollectionBooks extends React.Component {

    componentDidMount(){
        this.props.allCollectionBooks()
    }

    render() {
        return (
            <div>
                <BookList/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allCollectionBooks: books => {
            dispatch(fetchAllCollectionBooks(books))
        }
    }
}


export default connect(null, mapDispatchToProps)(CollectionBooks)