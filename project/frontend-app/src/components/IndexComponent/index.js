import React, {Component} from 'react'
import axios from 'axios'
import TableRow from '../TableRow'

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    getRequest() {
        axios.get('http://localhost:4200/book/')
            .then(response => {
                this.setState({books: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        console.log('mount')
        this.getRequest();
    }

    componentDidUpdate() {
        this.getRequest();
        console.log('update')

    }

    removeToListBook = (item) => {
        this.setState({
            books: this.state.books.filter(el => el._id !== item._id)
        })
    }

    tabRow() {
        return this.state.books.map((object, i) => {
            return <TableRow obj={object}
                             key={i}
                             removeToListBook={this.removeToListBook}/>
        })
    }

    render() {
        return (
            <div className={"table-users"}>
                <div className={"header"}>Книги</div>
                <table cellSpacing="0">
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Автор</th>
                        <th>Издательство</th>
                        <th>Серия</th>
                        <th width="230">ID товара</th>
                    </tr>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}