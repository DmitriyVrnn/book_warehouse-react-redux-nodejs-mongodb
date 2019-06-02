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
                    <span>Список книг</span>
                </NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to={'/post'}>
                    <i className="fas fa-comment"></i>
                    <span>Переговорная</span>
                </NavLink>
            </li>
            {role === WORKER ? null :
                <>
                    <li className="sidebar-item">
                        <NavLink to={'/register'}>
                            <i className="fas fa-user-plus"></i>
                            <span>Добавить сотрудника</span>
                        </NavLink>
                    </li>
                    < li className="sidebar-item">
                        <NavLink to={'/add'}>
                            <i className="fas fa-plus"></i>
                            <span>Добавить книгу</span>
                        </NavLink>
                    </li>
                </>
            }
        </ul>
    )
}

export default Links
