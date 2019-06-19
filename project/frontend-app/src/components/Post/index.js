import React from 'react';
import PropTypes from 'prop-types';

import { WORKER } from '../../constants/constants';

const Post = ({
  post: {
    body, author, date, _id,
  }, onDelete, roleUser,
}) => (
  <div className="post-block">
    <span className="author">
Отправил:
      {author}
    </span>
    <span className="date">{date}</span>
    <p className="message">{body}</p>
    {roleUser === WORKER ? null
      : (
        <button className="btn-delete" title="Удалить сообщение" type="button" onClick={() => onDelete(_id)}>
          <i className="fas fa-trash-alt" />
        </button>
      )
            }
  </div>
);

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    _id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  roleUser: PropTypes.string,
};

Post.defaultProps = {
  post: {},
  onDelete: () => {},
  roleUser: '',
};
