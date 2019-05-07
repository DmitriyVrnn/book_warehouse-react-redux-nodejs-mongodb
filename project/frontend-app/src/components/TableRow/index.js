import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const TableRow = ({obj, removeToListBook}) => {

    const deleteBook = () => {
        const confirm = window.confirm(`Вы уверены что хотите удалить книгу "${obj.titleBook}"?`);
        if (confirm) {
            axios.get('http://localhost:4200/book/delete/' + obj._id)
                .then(() => {
                    alert(`Книга "${obj.titleBook}" удалена`);
                    removeToListBook(obj);
                })
                .catch((err) => console.log(err));
        } else alert("Удаление отменено")
    };

    return (
        <tr>
            <td>
                {obj.titleBook}
            </td>
            <td>
                {obj.authorBook}
            </td>
            <td>
                {obj.publishing}
            </td>
            <td>
                {obj.series}
            </td>
            <td>{obj.idBook}</td>
            <td>
                <button><Link to={"/edit/" + obj._id}>Редактировать</Link></button>
            </td>
            <td>
                <button onClick={deleteBook}>Delete</button>
            </td>
        </tr>
    )
};

export default TableRow;