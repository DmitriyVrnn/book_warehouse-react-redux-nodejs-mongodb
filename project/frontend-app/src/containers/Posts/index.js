import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import PostList from '../../components/PostList/index';
import {createPost, fetchAllPosts} from "../../actions/post";

class Posts extends PureComponent {
    state = {
        author: this.props.auth.user.name,
        body: '',
        date: new Date().toLocaleString()
    };

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if ((this.state.body.trim()) || this.state.body.trim()) {
            this.props.createPost(this.state);
            this.setState({
                author: this.props.auth.user.name,
                body: '',
            })
        }
    };

    render() {
        const {user: {name, role}} = this.props.auth;
        const {date} = this.state;
        return (
            <div className="create-post">
                <form className="form-post" onSubmit={this.handleSubmit}>
                    <textarea
                        className="textarea-message-input"
                        cols="21"
                        rows="10"
                        placeholder="Введите сообщение..."
                        name="body"
                        onChange={this.handleInputChange}
                        value={this.state.body}>
                        </textarea>
                    <button className="btn-add_post" type="submit">Отправить</button>
                </form>
                <PostList author={name}
                          role={role}
                          date={date}/>
            </div>
        );
    }
}

export default connect(state => ({
    auth: state.auth
}), {createPost, fetchAllPosts})(Posts);


