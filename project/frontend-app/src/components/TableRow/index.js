import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class TableRow extends PureComponent {

    deleteBook = () => {
        axios.get('http://localhost:4200/book/delete/' + this.props.obj._id)
            .then(() => {
                console.log('Книга удалена');
                this.props.removeToListBook(this.props.obj);
            })
            .catch((err) => console.log( err));
    };

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.titleBook}
                </td>
                <td>
                    {this.props.obj.authorBook}
                </td>
                <td>
                    {this.props.obj.publishing}
                </td>
                <td>
                    {this.props.obj.series}
                </td>
                <td>{this.props.obj.idBook}</td>
                <td>
                    <button><Link to={"/edit/" + this.props.obj._id}>Редактировать</Link></button>
                </td>
                <td>
                    <button onClick={this.deleteBook}>Delete</button>
                </td>
            </tr>
        );
    }
}