import React, {PureComponent} from 'react';
import axios from 'axios';
import '../AddBook/add-book.scss';

export default class EditBook extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            titleBook: '',
            authorBook: '',
            publishing: '',
            series: '',
            idBook: '',
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4200/book/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    titleBook: response.data.titleBook,
                    authorBook: response.data.authorBook,
                    publishing: response.data.publishing,
                    series: response.data.series,
                    idBook: response.data.idBook
                })
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangeTitleBook = (e) => {
        this.setState({
            titleBook: e.target.value
        })
    }

    onChangeAuthorBook = (e) => {
        this.setState({
            authorBook: e.target.value
        })
    }

    onChangePublishing = (e) => {
        this.setState({
            publishing: e.target.value
        })
    }

    onChangeSeriesBook = (e) => {
        this.setState({
            series: e.target.value
        })
    }

    onChangeIdBook = (e) => {
        this.setState({
            idBook: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const book = {
            titleBook: this.state.titleBook,
            authorBook: this.state.authorBook,
            publishing: this.state.publishing,
            series: this.state.series,
            idBook: this.state.idBook
        };

        axios.post('http://localhost:4200/book/update/' + this.props.match.params.id, book)
            .then(res => {
                console.log(res);
                this.props.history.push('/index/' + this.props.match.params.id)
            })
    };

    render() {
        return (
            <>
                <h1>Редактировать книгу</h1>
                <form className={"form_add-book"} onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>
                            Название:
                            <input type="text" className={"form-control"} value={this.state.titleBook}
                                   onChange={this.onChangeTitleBook} required={true}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Автор:
                            <input type="text" className={"form-control"} value={this.state.authorBook}
                                   onChange={this.onChangeAuthorBook}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Издательство:
                            <input type="text" className={"form-control"} value={this.state.publishing}
                                   onChange={this.onChangePublishing}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Серия:
                            <input type="text" className={"form-control"} value={this.state.series}
                                   onChange={this.onChangeSeriesBook}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            ID товара:
                            <input type="text" className={"form-control"} value={this.state.idBook}
                                   onChange={this.onChangeIdBook}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input type="submit" value={"Сохранить"} className={"form-control"}/>
                    </div>

                </form>
            </>
        )
    }
}