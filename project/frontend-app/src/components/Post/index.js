import React from 'react'
import UserInfo from '../UserInfo'

const Post = ({post: {title, body, author, date, _id}, onDelete, roleUser}) => {
    return (
        <div className="post-block">
            <h2 className="title">{title}</h2>
            <p className="message">{body}</p>
            <span className="author">Отправил: <UserInfo name={author}/></span>
            <span className="date">{date}</span>
            {roleUser === "Worker" ? null :
                <button className="btn-delete" title="Удалить сообщение" type="button" onClick={() => onDelete(_id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            }
        </div>
    );
};

export default Post;
