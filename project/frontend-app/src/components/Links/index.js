import React from 'react'
import {Link} from 'react-router-dom'


const Links = () => {
    return (
        <ul className="sidebar-list">
            <li className="sidebar-item">
                <i className="fas fa-book"></i>
                <Link to={'/books'}>Карточки книг</Link>
            </li>
            <li className="sidebar-item">
                <i className="fas fa-database"></i>
                <Link to={'/index'}>Хранилище</Link>
            </li>
            <li className="sidebar-item">
                <i className="fas fa-comment"></i>
                <Link to={'/post'}>Стена</Link>
            </li>
            <li className="sidebar-item">
                <i className="fas fa-user-plus"></i>
                <Link to={'/register'}>Добавить пользователя</Link>
            </li>
            <li className="sidebar-item">
                <i className="fas fa-plus"></i>
                <Link to={'/add'}>Добавить книгу</Link>
            </li>
            <li className="sidebar-item">
                <Link to={'/test'}>Тестовый компонент</Link>
            </li>
        </ul>
    )
}

export default Links
