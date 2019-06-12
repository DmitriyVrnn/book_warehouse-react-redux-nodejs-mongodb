import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class AddBook extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            titleBook: '',
            authorBook: '',
            description: '',
            publishing: '',
            series: '',
            idBook: '',
            error: false,
            success: false,
            openForm: false,
        }
    }

    componentDidUpdate() {
        const {error, success} = this.state;
        if (error) {
            NotificationManager.error('Невозможно добавить книгу', 'Ошибка!', 5000, () => {
                alert(`Книгу невозможно добавить, возможно она уже добавлена`);
            });
            this.setState({error: false})
        }
        if (success) {
            NotificationManager.success('Книга добавлена', 'Успешно!');
            this.setState({success: false})
        }
    }

    handleInputChange = (type) => {
        return (e) => {
            switch (type) {
                case 'titleBook':
                    return this.setState({titleBook: e.target.value});
                case 'authorBook':
                    return this.setState({authorBook: e.target.value});
                case 'publishingBook':
                    return this.setState({publishing: e.target.value});
                case 'seriesBook':
                    return this.setState({series: e.target.value});
                case 'idBook':
                    return this.setState({idBook: e.target.value});
                case 'descriptionBook':
                    return this.setState({description: e.target.value});
            }
        }
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    onSuccess = () => {
        this.setState({
            success: true
        })
    };

    onSubmit = (e) => {
        const {
            titleBook, authorBook, description,
            publishing, series, idBook
        } = this.state;
        e.preventDefault();
        const book = {
            titleBook: titleBook,
            authorBook: authorBook,
            description: description,
            publishing: publishing,
            series: series,
            idBook: idBook
        };
        axios.post(`http://localhost:4200/book/add`, book)
            .then(res => this.onSuccess(res))
            .catch(this.onError);
        this.setState({
            titleBook: '',
            authorBook: '',
            description: '',
            publishing: '',
            series: '',
            idBook: '',
            error: false
        })
    };

    setOpenForm = () => {
        this.setState({
            openForm: !this.state.openForm
        })
    };

    render() {
        const {
            titleBook, authorBook,
            publishing, series, idBook, openForm
        } = this.state;
        return (
            <>
                <form className="form_add-book" onSubmit={this.onSubmit}>
                    <h1 className="title-book">Добавить новую книгу</h1>
                    <ul>
                        <li className="form-group">
                            <label>
                                Название:
                                <input type="text" className="form-control" value={titleBook}
                                       onChange={this.handleInputChange('titleBook')} required={true}/>
                            </label>
                        </li>
                        <li className="form-group">
                            <label>
                                Автор:
                                <input type="text" className="form-control" value={authorBook}
                                       onChange={this.handleInputChange('authorBook')} required={true}/>
                            </label>
                        </li>
                        <li className="form-group">
                            <label>
                                Издательство:
                                <input type="text" className="form-control" value={publishing}
                                       onChange={this.handleInputChange('publishingBook')}/>
                            </label>
                        </li>
                        <li className="form-group">
                            <label>
                                Серия:
                                <input type="text" className="form-control" value={series}
                                       onChange={this.handleInputChange('seriesBook')}/>
                            </label>
                        </li>
                        <li className="form-group">
                            <label>
                                ID товара:
                                <input type="text" className="form-control" value={idBook}
                                       onChange={this.handleInputChange('idBook')}/>
                            </label>
                        </li>
                        <li className="form-group">
                            {this.state.openForm ?
                                <textarea className="textarea-description"
                                          onChange={this.handleInputChange('descriptionBook')}
                                          name="description" id="" cols="30" rows="10"/> : null}
                        </li>
                        <button
                            className="btn-toggle-form" type="button"
                            onClick={() => this.setOpenForm()}>{openForm ? 'Скрыть ▲' : 'Добавить описание ▼'}
                        </button>
                        <li className="form-group">
                            <input type="submit" value={"Добавить в базу"} className="form-control"/>
                        </li>
                    </ul>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}

AddBook.propTypes = {
    titleBook: PropTypes.string,
    authorBook: PropTypes.string,
    description: PropTypes.string,
    publishing: PropTypes.string,
    series: PropTypes.string,
    idBook: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    openForm: PropTypes.func,
};

AddBook.defaultProps = {
    titleBook: '',
    authorBook: '',
    description: '',
    publishing: '',
    series: '',
    idBook: '',
    error: false,
    success: false,
    openForm: () => {
    },
};