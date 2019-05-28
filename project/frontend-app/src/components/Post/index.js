import React from 'react'
import {WORKER} from "../../constants/constants";

const Post = ({post: {body, author, date, _id}, onDelete, roleUser}) => {
    return (
        <div className="post-block">
            <p className="message">{body}</p>
            <span className="author">Отправил: {author}</span>
            <span className="date">{date}</span>
            {roleUser === WORKER ? null :
                <button className="btn-delete" title="Удалить сообщение" type="button" onClick={() => onDelete(_id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            }
        </div>
    );
};

export default Post;
