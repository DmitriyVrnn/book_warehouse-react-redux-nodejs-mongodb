import React from 'react'
import UserInfo from '../UserInfo'

const Post = ({post: {title, body, author, _id}, onDelete}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <UserInfo name={author}/>
            <button type="button" onClick={() => onDelete(_id)}>
                Удалить
            </button>
        </div>
    );
};

export default Post;
