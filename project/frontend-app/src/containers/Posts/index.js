import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList/index';
import { createPost, fetchAllPosts } from '../../actions/post';

class Posts extends PureComponent {
  constructor(props) {
    super(props);
    const { auth: { user: { name } } } = this.props;
    this.state = {
      author: name,
      body: '',
      date: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    const { fetchAllPostsConnect } = this.props;
    fetchAllPostsConnect();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { body } = this.state;
    const { createPostConnect } = this.props;
    const { auth: { user: { name } } } = this.props;
    e.preventDefault();
    if ((body.trim()) || body.trim()) {
      createPostConnect(this.state);
      this.setState({
        author: name,
        body: '',
      });
    }
  };

  render() {
    const { auth: { user: { name, role } } } = this.props;
    const { date, body } = this.state;
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
            value={body}
          />
          <button className="btn-add_post" type="submit">Отправить</button>
        </form>
        <PostList
          author={name}
          role={role}
          date={date}
        />
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}), {
  createPostConnect: createPost,
  fetchAllPostsConnect: fetchAllPosts,
})(Posts);

Posts.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any),
  fetchAllPostsConnect: PropTypes.func.isRequired,
  createPostConnect: PropTypes.func.isRequired,
};

Posts.defaultProps = {
  auth: ({}),
};
