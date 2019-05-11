import React, {Component, Fragment} from 'react'
import axios from "axios";
import ReactToExcel from 'react-html-table-to-excel';

import TableBooks from '../components/TableBooks'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'

class StoreBooks extends Component {

    state = {
        term: '',
        books: [],
        loading: false
    };

    componentDidMount() {
        axios.get('http://localhost:4200/book/')
            .then(response => {
                this.setState({
                    books: response.data,
                    loading: false,
                })
            })
            .catch(error => {
                console.log(error)
            })
    };

    removeToListBook = (item) => {
        this.setState({
            books: this.state.books.filter(el => el._id !== item._id)
        })
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.titleBook.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({term});
    };

    render() {
        const {books, term, loading} = this.state;
        const visibleItems = this.search(books, term);

        if(loading){
            return <Loader/>
        }
        return (
            <Fragment>
                <SearchBar onSearchChange={this.onSearchChange}/>
                <ReactToExcel
                    table="table-to-xls"
                    filename="books-table"
                    sheet="books"
                    buttonText="Экпортировать в Excel"
                />
                <TableBooks books={visibleItems}
                            removeToListBook={this.removeToListBook}/>
            </Fragment>
        )
    }
}

export default StoreBooks