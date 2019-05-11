import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class ModalBookInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: this.props.description,
        }
    }

    /*componentDidMount() {
        axios.get('http://localhost:4200/book/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                });
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
    }*/

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const book = {
            description: this.state.description,
        };
        axios.post('http://localhost:4200/book/update/' + this.props.match.params.id, book)
        console.log(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.props.history.push('/index/' + this.props.match.params.id)
            })
    };

    render() {
        console.log(this.state.description)
        return (
            <>
                <h1>Редактирование</h1>
                <form onSubmit={this.onSubmit}>
                    <div className={"form-group"}>
                        <label>
                            Название:
                            <input type="text" value={this.state.titleBook}
                                   onChange={this.onChangeDescription} required={true}/>
                        </label>
                    </div>
                    <input type="submit" value={"Сохранить"} className={"form-control"}/>
                </form>
            </>
        )
    }

}

export default ModalBookInfo;