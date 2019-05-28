import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Modal from '../Modal'
import {WORKER} from "../../constants/constants";

const Book = ({book: {
                titleBook,
                authorBook,
                series,
                publishing,
                description,
                _id
                }, onDelete, roleUser}) => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => setOpen(true);

    const handleSubmit = () => setOpen(false);

    const handleCancel = () => setOpen(false);

    return (
        <div className='book-card'>
            <div className="contend-card">
                <button className="modal-open" onClick={openModal}>&#9776;</button>
                <Modal title={titleBook}
                       isOpen={isOpen}
                       onCancel={handleCancel}
                       onSubmit={handleSubmit}>
                    <p>Автор: {authorBook}</p>
                    <p>Серия: {series}</p>
                    <p>Издательство: {publishing}</p>
                    {!description ? <p>Описания: <span className={"not-description"}>❌</span></p>
                        : <p>Описание: {description}</p>}
                    {roleUser === WORKER ? null :
                        <>
                            <Link className="modal-edit-link" to={`/edit/${_id}`}>Редактировать</Link>
                            <button onClick={() => onDelete(_id)}>Delete</button>
                        </>
                    }
                </Modal>
                <h2 className="card-title">Название: {titleBook}</h2>
                <div>Тут фото</div>
                <span className="card-author">Автор: {authorBook}</span>
                <p className="card-description">Описание: {description}</p>
            </div>
        </div>
    );
};

export default Book;
