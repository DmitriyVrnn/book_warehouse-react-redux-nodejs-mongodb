import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

class EditBook extends PureComponent {
    state = {
      titleBook: '',
      authorBook: '',
      description: '',
      publishing: '',
      series: '',
      idBook: '',
    };

    componentDidMount() {
      const { match: { params: { id } } } = this.props;
      axios.get(`${API_URL}/book/edit/${id}`)
        .then((response) => {
          this.setState({
            titleBook: response.data.titleBook,
            authorBook: response.data.authorBook,
            description: response.data.description,
            publishing: response.data.publishing,
            series: response.data.series,
            idBook: response.data.idBook,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    handleTarget = type => (e) => {
      switch (type) {
        case 'titleBook':
          return this.setState({ titleBook: e.target.value });
        case 'authorBook':
          return this.setState({ authorBook: e.target.value });
        case 'publishingBook':
          return this.setState({ publishing: e.target.value });
        case 'seriesBook':
          return this.setState({ series: e.target.value });
        case 'idBook':
          return this.setState({ idBook: e.target.value });
        case 'descriptionBook':
          return this.setState({ description: e.target.value });
        default:
          return null;
      }
    };

    onSubmit = (e) => {
      const {
        titleBook, authorBook,
        description, publishing,
        series, idBook,
      } = this.state;
      const {
        match: { params: { id } },
        history,
      } = this.props;
      e.preventDefault();
      const book = {
        titleBook,
        authorBook,
        description,
        publishing,
        series,
        idBook,
      };
      axios.post(`${API_URL}/book/update/${id}`, book)
        .then(() => {
          history.push(`/index/${id}`);
        });
    };

    render() {
      const {
        titleBook, authorBook,
        description, publishing,
        series, idBook,
      } = this.state;
      return (
        <>
          <h1>Редактировать книгу</h1>
          <form className="form_add-book" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>
                Название:
                <input
                  type="text"
                  className="form-control"
                  value={titleBook}
                  onChange={this.handleTarget('titleBook')}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Автор:
                <input
                  type="text"
                  className="form-control"
                  value={authorBook}
                  onChange={this.handleTarget('authorBook')}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Издательство:
                <input
                  type="text"
                  className="form-control"
                  value={publishing}
                  onChange={this.handleTarget('publishingBook')}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Серия:
                <input
                  type="text"
                  className="form-control"
                  value={series}
                  onChange={this.handleTarget('seriesBook')}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                ID товара:
                <input
                  type="text"
                  className="form-control"
                  value={idBook}
                  onChange={this.handleTarget('idBook')}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Описание:
                <textarea
                  className="form-control"
                  onChange={this.handleTarget('descriptionBook')}
                  value={description}
                  name="description"
                  cols="30"
                  rows="10"
                />
              </label>
            </div>
            <div className="form-group">
              <input type="submit" value="Сохранить" className="form-control" />
            </div>
          </form>
        </>
      );
    }
}
export default EditBook;

EditBook.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
