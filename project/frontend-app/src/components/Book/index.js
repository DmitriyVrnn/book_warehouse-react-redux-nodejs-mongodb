import React, {useState} from 'react'
import {connect} from 'react-redux'

import Modal from '../Modal'
import Test from './Test'
import {addDescriptionBook} from "../../actions/collectionBooks";

const Book = ({book: {titleBook, authorBook, description, _id}}) => {
    console.log(_id);
    const [isOpen, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const openModal = () => setOpen(true);

    const handleSubmit = () => setOpen(false);

    const handleCancel = () => setOpen(false);

    const toggleInput = () => {
        setToggle(false)
    };

    console.log(description)

    const checkDescription = () => {
        if (!description) {
            return (
                <>
                    {toggle ?
                        <div>
                            <Test id={_id}
                                  description={description}
                                  onAddChange={addDescriptionBook}/>
                        </div>
                        :
                        <div>
                            <span>Описания: нет</span>
                            <button onClick={toggleInput}>Добавить описание</button>
                        </div>
                    }
                </>
            )
        } else
            return <span>Описания: {description}</span>
    };

    return (
        <div className='book-card'>
            <button className="modal-open" onClick={openModal}>&#9776;</button>
            <Modal title={titleBook}
                   isOpen={isOpen}
                   onCancel={handleCancel}
                   onSubmit={handleSubmit}>
                <p>Автор: {authorBook}</p>
                {checkDescription()}
            </Modal>
            {!description ?
                <span>Описания: нет</span> :
                <span>Описание: есть</span>}
            <div>Тут фото</div>
            <h2>Название: {titleBook}</h2>
            <p>Автор: {authorBook}</p>
        </div>
    );
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        onAddDescription: description => {
            dispatch(addDescriptionBook(description))
        }
    }
}*/

export default connect()(Book);


/*const Book = ({book: {titleBook, authorBook, description}}) => {
    return (
        <div className='book-card'>
            <div>Тут фото</div>
            <h2>Название: {titleBook}</h2>
            <p>Автор: {authorBook}</p>
        </div>
    );
};

export default Book;*/