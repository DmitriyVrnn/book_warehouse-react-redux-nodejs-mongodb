import React from 'react'
import {Link} from 'react-router-dom'


const Links = () => {
    return(
        <ul className="sidebar-list">
            <li className="sidebar-item"><Link to={'/post'}>Стена</Link></li>
            <li className="sidebar-item"><Link to={'/register'}>Зарегистрировать</Link></li>
            <li className="sidebar-item"><Link to={'/index'}>Хранилище</Link></li>
            <li className="sidebar-item"><Link to={'/add'}>Добавить книгу</Link></li>
        </ul>
    )
}

export default Links
