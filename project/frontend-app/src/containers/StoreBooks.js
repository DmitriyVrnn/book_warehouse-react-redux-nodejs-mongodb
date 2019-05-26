import React, {PureComponent, Fragment} from 'react'
import axios from "axios";
import ReactToExcel from 'react-html-table-to-excel';

import TableBooks from '../components/TableBooks'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'
import SortButton from "../components/SortButton";

class StoreBooks extends PureComponent {

    state = {
        term: '',
        books: [],
        loading: true,
        sortDirection: 1, //1 - с большого, -1 - с меньшего
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

    compareBy = (key) => {
        return (a, b) => {
            if (key) {
                console.log(this.state.books.titleBook)
                if (a[key] > b[key]) return 1;
                if (a[key] < b[key]) return -1;
            }
            return 0;
        };
    };

    sortBy = (key) => {
        let booksCopy = [...this.state.books];
        console.log(booksCopy);
        booksCopy.sort(this.compareBy(key));
        this.setState({books: booksCopy});
    };

    /*sortDataTableByName = (direction) => {
        this.setState({sortDir: direction});
        this.state.books.sort((a, b) => {
            if (a.titleBook > b.titleBook) return this.state.sortDir ? 1 : -1;
            if (a.titleBook < b.titleBook) return this.state.sortDir ? 1 : -1;
            return 0;
        });
       this.setState({sortedData: this.state.books})
        console.log(this.state.sortedData)
    };*/

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

        if (loading) {
            return <Loader/>
        }
        return (
            <>
                <div className="table-dashboard">
                    <div className="table-dashboard-btn">
                            <ReactToExcel
                                className={'btn-excel'}
                                table="table-to-xls"
                                filename="books-table"
                                sheet="books"
                                buttonText=""
                            />
                        <SortButton sortBy={this.sortBy}/>
                    </div>
                    <SearchBar onSearchChange={this.onSearchChange}/>
                </div>
                <TableBooks books={visibleItems}
                            removeToListBook={this.removeToListBook}/>
            </>
        )
    }
}

export default StoreBooks