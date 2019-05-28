import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {WORKER} from "../../constants/constants";

const Links = ({role}) => {
    return (
        <ul className="sidebar-list">
            <li className="sidebar-item">
                <NavLink to={'/books'}>
                    <i className="fas fa-book"></i>
                    <span>Карточки книг</span>
                </NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to={'/index'}>
                    <i className="fas fa-database"></i>
                    <span>Хранилище</span>
                </NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to={'/post'}>
                    <i className="fas fa-comment"></i>
                    <span>Стена</span>
                </NavLink>
            </li>
            {role === WORKER ? null :
                <>
                    <li className="sidebar-item">
                        <NavLink to={'/register'}>
                            <i className="fas fa-user-plus"></i>
                            <span>Добавить пользователя</span>
                        </NavLink>
                    </li>
                    < li className="sidebar-item">
                        <NavLink to={'/add'}>
                            <i className="fas fa-plus"></i>
                            <span>Добавить книгу</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to={'/test'}>Тестовый компонент</NavLink>
                    </li>
                </>
            }
        </ul>
    )
}

export default Links
