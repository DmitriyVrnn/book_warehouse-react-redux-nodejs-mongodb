import React, { PureComponent } from 'react';
import axios from 'axios';
import ReactToExcel from 'react-html-table-to-excel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableBooks from '../../components/TableBooks/index';
import SearchBar from '../../components/SearchBar/index';
import Loader from '../../components/Loader/index';
import SortButton from '../../components/SortButton/index';
import { API_URL } from '../../constants/constants';

class StoreBooks extends PureComponent {
  state = {
    term: '',
    books: [],
    loading: true,
  };

  componentDidMount() {
    axios.get(`${API_URL}/book/`)
      .then((response) => {
        this.setState({
          books: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeToListBook = (item) => {
    const { books } = this.state;
    this.setState({
      books: books.filter(el => el._id !== item._id),
    });
  };

  compareBy = key => (a, b) => {
    if (key) {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
    }
    return 0;
  };

  sortBy = (key) => {
    const { books } = this.state;
    const booksCopy = [...books];
    booksCopy.sort(this.compareBy(key));
    this.setState({ books: booksCopy });
  };

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => item.titleBook.toLowerCase().indexOf(term.toLowerCase()) > -1
        || item.authorBook.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  render() {
    const { books, term, loading } = this.state;
    const visibleItems = this.search(books, term);
    const { auth: { user } } = this.props;

    if (loading) {
      return <Loader />;
    }
    return (
      <>
        <div className="table-dashboard">
          <div className="table-dashboard-btn">
            <ReactToExcel
              className="btn-excel"
              table="table-to-xls"
              filename="books-table"
              sheet="books"
              buttonText=""
            />
            <SortButton sortBy={this.sortBy} />
          </div>
          <SearchBar onSearch={this.onSearchChange} />
        </div>
        <TableBooks
          books={visibleItems}
          removeToListBook={this.removeToListBook}
          role={user.role}
        />
      </>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}))(StoreBooks);

StoreBooks.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any),
};

StoreBooks.defaultProps = {
  auth: ({}),
};
