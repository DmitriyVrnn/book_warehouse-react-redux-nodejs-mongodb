import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { WORKER } from '../../constants/constants';

const Menu = ({ role }) => (
  <ul className="sidebar-list">
    <li className="sidebar-item">
      <NavLink to="/books">
        <i className="fas fa-book" />
        <span>Карточки книг</span>
      </NavLink>
    </li>
    <li className="sidebar-item">
      <NavLink to="/index">
        <i className="fas fa-database" />
        <span>Список книг</span>
      </NavLink>
    </li>
    <li className="sidebar-item">
      <NavLink to="/post">
        <i className="fas fa-comment" />
        <span>Переговорная</span>
      </NavLink>
    </li>
    {role === WORKER ? null
      : (
        <>
          <li className="sidebar-item">
            <NavLink to="/register">
              <i className="fas fa-user-plus" />
              <span>Добавить сотрудника</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/add">
              <i className="fas fa-plus" />
              <span>Добавить книгу</span>
            </NavLink>
          </li>
        </>
      )
            }
  </ul>
);

export default Menu;

Menu.propTypes = {
  role: PropTypes.string,
};

Menu.defaultProps = {
  role: '',
};
