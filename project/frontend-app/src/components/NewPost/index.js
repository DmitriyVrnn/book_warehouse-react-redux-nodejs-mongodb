import React from 'react'
import PostList from '../PostList'
import {fetchAllPosts} from "../../actions/post";

export default class NewPost extends React.Component {
    state = {
        title: '',
        body: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                    </div>
                    <div>
                        <textarea
                            cols="21"
                            rows="10    "
                            placeholder="Body"
                            name="body"
                            onChange={this.handleInputChange}
                            value={this.state.body}>
                        </textarea>
                    </div>
                    <div>
                        <button type="submit">Добавить пост</button>
                        <button type="button" onClick={this.handleReset}>
                            Сбросить
                        </button>
                    </div>
                </form>
                {/*Подключение постов*/}
                <PostList/>
            </div>
        );
    }
}