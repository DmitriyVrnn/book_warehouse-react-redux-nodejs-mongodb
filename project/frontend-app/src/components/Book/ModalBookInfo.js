import React, {useState} from 'react'
import {connect} from 'react-redux'

import {addDescriptionBook} from "../../actions/collectionBooks";

const ModalBookInfo = (props) => {
    const [description, setDescription] = useState('');
    const [_id, setId] = useState(props.book ? props.book._id : null);

    const onChangeText = e => {
        const description = e.target.value;
        setDescription(description);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Что я передаю ${_id}`);
        props.onAdd(_id);
        console.log(_id)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className={"form-control"} value={description}
                   onChange={this.onChangeText} required={true}/>
            <button type="submit">Отправить</button>
        </form>
    )
};

function mapStateToProps(state, props) {
    if (props.params._id) {
        return {
            booksCollection: state.booksCollection.find(item => item._id === props.params._id)
        }
    }

    return { booksCollection: null };
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: description => {
            dispatch(addDescriptionBook(description))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBookInfo)