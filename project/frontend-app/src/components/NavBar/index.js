import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../static/img/phone-book-svgrepo-com.svg';
import '../../static/styles/main.scss';

//--start--- Тестовые компоненты
//import SandBox from '../Modal/SandBox'
//import TestDirectory from '../TestDirectory'
//--end---

import EditBook from '../EditBook';
import AddBook from '../AddBook';
import StoreBooks from '../../containers/StoreBooks/StoreBooks';
import UserInfo from '../UserInfo';
import Posts from '../../containers/Posts';
import Register from '../Register';
import Menu from '../Menu';
import CardsBooks from '../../containers/CardsBooks/CardsBooks';
import NotFound from '../NotFound';
import { WORKER } from '../../constants/constants';

const NavBar = ({
  user, role, onLogout, avatar,
}) => {
  const getRoutes = () => (
    <Switch>
      <Route path="/" exact component={role === WORKER ? null : CardsBooks} />
      <Route path="/add" component={role === WORKER ? null : AddBook} />
      <Route path="/edit/:id" component={role === WORKER ? null : EditBook} />
      <Route path="/register" exact component={role === WORKER ? null : Register} />
      <Route path="/index" component={StoreBooks} />
      <Route path="/post" component={Posts} />
      <Route path="/books" component={CardsBooks} />
      <Route path="*" component={NotFound} />
    </Switch>
  );

  return (
    <Router>
      <div className="body">
        <header className="header">
          <Link to="/">
            <img
              className="logotype"
              src={logo}
              alt="Логотип"
            />
          </Link>
          <div className="header-worker">
            <UserInfo
              name={user}
              role={role}
              onLogout={onLogout}
              avatar={avatar}
            />
          </div>
        </header>

        <section className="wrapper">
          <aside className="sidebar">
            <Menu role={role} />
          </aside>

          <main className="content">
            <div className="feel-grid">
              {getRoutes()}
            </div>
          </main>
        </section>
      </div>
    </Router>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: PropTypes.string,
  role: PropTypes.string,
  onLogout: PropTypes.func,
  avatar: PropTypes.string,
};

NavBar.defaultProps = {
  user: '',
  role: '',
  onLogout: () => {},
  avatar: '',
};
