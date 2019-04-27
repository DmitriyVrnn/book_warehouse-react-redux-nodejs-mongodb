import React from 'react'
import PostList from '../PostList'
import {fetchAllPosts} from "../../actions/post";
import {connect} from 'react-redux';

class NewPost extends React.Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        this.props.dispatch(fetchAllPosts())
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
                body: ''
            })
        }
    };

    render() {
        return (
            <div className="create-post">
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
                <PostList/>
            </div>
        );
    }
}

const mapStateToProps = (dispatch) => {
    return {
        allPosts: id => {
            dispatch(fetchAllPosts())
        }
    }
};

export default connect(mapStateToProps)(NewPost)

