import React, {PureComponent} from 'react';
import axios from 'axios';

export default class EditBook extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            titleBook: '',
            authorBook: '',
            description: '',
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
                    description: response.data.description,
                    publishing: response.data.publishing,
                    series: response.data.series,
                    idBook: response.data.idBook
                });
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
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
                                   onChange={this.handleTarget('titleBook')} required={true}/>
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Автор:
                            <input type="text" className={"form-control"} value={this.state.authorBook}
                                   onChange={this.handleTarget('authorBook')}/>
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
                        <label>
                            Описание:
                            <textarea  className="form-control" onChange={this.handleTarget('descriptionBook')}
                                       value={this.state.description}
                                 name="description" cols="30" rows="10"/>
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