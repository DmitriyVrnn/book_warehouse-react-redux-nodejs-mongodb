import React from 'react'
import {connect} from 'react-redux'
import {addDescriptionBook} from "../../actions/collectionBooks";

class Test extends React.Component {
    state = {
        id: this.props.id,
        description: ''
    };

    /*componentWillReceiveProps(nextProps){
        this.setState({
            _id: nextProps.booksCollection._id,
        });
    }*/

    /*componentDidMount(){
        if (this.props.params._id) {
            this.props.addDescriptionBook(this.props.params._id);
        }
    }*/

    onChangeText = e => {
        const description = e.target.value;
        this.setState({
            description: description
        })
    };

    handleSubmit = e => {
        const {description, id} = this.state;
        e.preventDefault();
        console.log(`Что я передаю ${description}`);
        //this.props.onAdd(this.state._id);
        this.props.dispatch(this.props.onAddChange({description, id}))
        console.log(`desc ${description}`)
    };


    render() {
        const {description} = this.state
        console.log(description)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Описание"
                    onChange={this.onChangeText}
                    value={description}
                />
                <button type="submit">Сохранить</button>
            </form>
        )
    }
}

/*function mapStateToProps(state, props) {
    if (props.params._id) {
        return {
            booksCollection: state.booksCollection.find(item => item._id === props.params._id)
        }
    }
}*/


export default connect()(Test)
