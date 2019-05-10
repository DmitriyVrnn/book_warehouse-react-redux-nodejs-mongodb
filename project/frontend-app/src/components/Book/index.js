import React, {useState} from 'react'
import Modal from '../Modal'

const Book = ({book: {titleBook, authorBook, description}}) => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => setOpen(true);

    const handleSubmit = () => setOpen(false);

    const handleCancel = () => setOpen(false);

    const checkDescription = () => {
        if (!description) {
            return <span>Описания: нет</span>
        } else return <span>Описания: есть</span>
    };

    return (
        <div className='book-card'>
            <button className="modal-open" onClick={openModal}>&#9776;</button>
            <Modal title={titleBook}
                   isOpen={isOpen}
                   onCancel={handleCancel}
                   onSubmit={handleSubmit}>
                <p>Автор: {authorBook}</p>
                {description ? <p>Описание: {description}</p> : <p>Описание: отсутствует</p>}
            </Modal>
            {checkDescription()}
            <div>Тут фото</div>
            <h2>Название: {titleBook}</h2>
            <p>Автор: {authorBook}</p>
        </div>
    );
};

export default Book;


/*class Book extends Component {
    constructor(props){
        super(props)
        this.state = {
            book: {
                titleBook: '',
                authorBook: '',
            }
        }
    }


    render(){
        const {titleBook, authorBook} = this.state.book
        console.log(this.state.book.titleBook)
        return(
            <div className='book-card'>
                <div>Тут фото</div>
                <h2>Название: {titleBook}</h2>
                <p>Автор: {authorBook}</p>
            </div>
        )
    }
}

export default Book;*/


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