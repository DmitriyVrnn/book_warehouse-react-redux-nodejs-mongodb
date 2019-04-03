import React from 'react'

export default ({post: {title, body, id}, onDelete}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button type={"button"} onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}
