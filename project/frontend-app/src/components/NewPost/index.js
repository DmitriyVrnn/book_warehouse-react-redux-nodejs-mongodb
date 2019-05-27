import React from 'react'
import PostList from '../PostList'
import UserInfo from "../UserInfo";

class NewPost extends React.PureComponent {
    state = {
        title: '',
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
        if ((this.state.title.trim() && this.state.body.trim()) || this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.setState({
                title: '',
                author:'',
                body: '',
            })
        }
    };

    render() {
        const {user} = this.props.auth;
        return (
            <div className="create-post">
                <form className="form-post" onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                    </div>
                    <textarea
                        cols="21"
                        rows="10"
                        placeholder="Body"
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


