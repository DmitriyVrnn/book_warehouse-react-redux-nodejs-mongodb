import React from 'react'
import PostList from '../PostList'
import UserInfo from "../UserInfo";

class NewPost extends React.PureComponent {
    state = {
        author: this.props.auth.user.name,
        body: '',
        date: new Date().toLocaleString()
    };

    componentDidMount() {
        this.props.allPosts()
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if ((this.state.body.trim()) || this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.setState({
                author: this.props.auth.user.name,
                body:'',
            })
        }
    };

    render() {
        const {user} = this.props.auth;
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
                <PostList author={user.name} role={user.role} date={this.state.date}/>
            </div>
        );
    }
}


export default NewPost;


