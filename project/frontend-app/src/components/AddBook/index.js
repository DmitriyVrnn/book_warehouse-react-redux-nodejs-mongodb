import React, {Component} from 'react';
import axios from 'axios'

export default class AddBook extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titleBook: '',
            authorBook: '',
            publishing: '',
            series: '',
            idBook: '',
        }
    }

    onChangeTitleBook = (e) => {
        this.setState({
            titleBook: e.target.value
        })
    };

    onChangeAuthorBook = (e) => {
        this.setState({
            authorBook: e.target.value
        })
    };

    onChangePublishing = (e) => {
        this.setState({
            publishing: e.target.value
        })
    };

    onChangeSeriesBook = (e) => {
        this.setState({
            series: e.target.value
        })
    };

    onChangeIdBook = (e) => {
        this.setState({
            idBook: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const book = {
            titleBook: this.state.titleBook,
            authorBook: this.state.authorBook,
            publishing: this.state.publishing,
            series: this.state.series,
            idBook: this.state.idBook
        };
        axios.post('http://localhost:4200/book/add', book)
            .then(res => console.log(res.data))
        this.setState({
            titleBook: '',
            authorBook: '',
            publishing: '',
            series: '',
            idBook: ''
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
                                   onChange={this.onChangeTitleBook} required={true}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Автор:
                            <input type="text" className={"form-control"} value={this.state.authorBook}
                                   onChange={this.onChangeAuthorBook} required={true}/>
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
                        <input type="submit" value={"Добавить в базу"} className={"form-control"}/>
                    </div>
                </form>
            </>
        )
    }
}