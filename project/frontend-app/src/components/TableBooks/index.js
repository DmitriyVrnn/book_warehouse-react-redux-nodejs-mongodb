import React, {Fragment} from 'react'

import TableRow from '../TableRow'

const TableBooks = ({books, removeToListBook}) => {

    const elements = books.map((object, i) => {
        return (
            <TableRow obj={object}
                      key={i}
                      removeToListBook={removeToListBook}/>
        )
    });

    return (
        <Fragment>
            <div className={"table-users"}>
                <div className={"header-table"}>Книги</div>
                <table cellSpacing="0" id="table-to-xls">
                    <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Автор</th>
                        <th>Издательство</th>
                        <th>Серия</th>
                        <th width="230">ID товара</th>
                    </tr>
                    {elements}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
};

export default TableBooks;