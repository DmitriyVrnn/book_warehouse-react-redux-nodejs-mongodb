import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Post from '../Post';
import { deletePost } from '../../actions/post';

const PostList = ({
  posts, deletePostConnect, author, date, role,
}) => {
  if (!posts.length) {
    return (
      <div>
          Сообщения отсутствуют
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post
          post={post}
          author={author}
          date={date}
          onDelete={deletePostConnect}
          roleUser={role}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default connect(state => ({
  posts: state.posts,
}), { deletePostConnect: deletePost })(PostList);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePostConnect: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

