import React from 'react'
import Profile from '../Profile'

const Post = ({post: {title, body, _id}, onDelete}) => {
    return (
        <div>
            <h2>{title}</h2>

            <p>{body}</p>
            <button type="button" onClick={() => onDelete(_id)}>
                Удалить
            </button>
        </div>
    );
};

export default Post;