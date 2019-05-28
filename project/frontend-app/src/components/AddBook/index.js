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

    handleTarget = (type) => {
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
        e.preventDefault();
        const book = {
            titleBook: this.state.titleBook,
            authorBook: this.state.authorBook,
            description: this.state.description,
            publishing: this.state.publishing,
            series: this.state.series,
            idBook: this.state.idBook
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
        return (
            <>
                <h1>Добавить новую книгу</h1>
                <form className={"form_add-book"} onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>
                            Название:
                            <input type="text" className={"form-control"} value={this.state.titleBook}
                                   onChange={this.handleTarget('titleBook')} required={true}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Автор:
                            <input type="text" className={"form-control"} value={this.state.authorBook}
                                   onChange={this.handleTarget('authorBook')} required={true}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Издательство:
                            <input type="text" className={"form-control"} value={this.state.publishing}
                                   onChange={this.handleTarget('publishingBook')}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Серия:
                            <input type="text" className={"form-control"} value={this.state.series}
                                   onChange={this.handleTarget('seriesBook')}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            ID товара:
                            <input type="text" className={"form-control"} value={this.state.idBook}
                                   onChange={this.handleTarget('idBook')}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        {this.state.openForm ?
                            <textarea className="textarea-description" onChange={this.handleTarget('descriptionBook')}
                                      name="description" id="" cols="30" rows="10"/> : null}
                    </div>
                    <button
                        className="btn-toggle-form" type="button"
                        onClick={() => this.setOpenForm()}>{this.state.openForm ? 'Скрыть ▲' : 'Добавить описание ▼'}
                    </button>
                    <div className={"form-group"}>
                        <input type="submit" value={"Добавить в базу"} className={"form-control"}/>
                    </div>
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