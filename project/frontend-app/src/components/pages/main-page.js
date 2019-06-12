import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import logo from '../../static/img/phone-book-svgrepo-com.svg';
import "../../static/styles/main.scss";

//--start--- Тестовые компоненты
import SandBox from '../Modal/SandBox'
import TestDirectory from '../TestDirectory'
//--end---

import EditBook from "../../components/EditBook";
import AddBook from "../../components/AddBook";
import StoreBooks from '../../containers/StoreBooks';
import UserInfo from "../UserInfo";
import CreatePost from "../../components/CreatePost";
import Register from '../Register';
import Links from '../Links';
import CardsBooks from '../../containers/CardsBooks';
import NotFound from '../NotFound';
import {WORKER} from "../../constants/constants";

const MainPage = (props) => {
    return (
        <Router>
            <div className={'body'}>
                <header className='header'>
                    <Link to="/"><img className="logotype" src={logo}
                                      alt="Логотип"/></Link>
                    <div className="header-worker">
                        <UserInfo name={props.user}
                                  role={props.role}
                                  onLogout={props.onLogout}
                                  avatar={props.avatar}/>
                    </div>
                </header>

                <section className="wrapper">
                    <aside className="sidebar">
                        <Links role={props.role}/>
                    </aside>

                    <main className={"content"}>
                        <div className="feel-grid">
                            <Switch>
                                <Route path={'/'} exact component={props.role === WORKER ? null: CardsBooks}/>
                                <Route path='/add' component={ props.role === WORKER ? null: AddBook}/>
                                <Route path='/edit/:id' component={props.role === WORKER ? null: EditBook}/>
                                <Route path='/register' exact component={props.role === WORKER ? null: Register}/>
                                <Route path='/index' component={StoreBooks}/>
                                <Route path='/post' component={CreatePost}/>
                                <Route path='/books' component={CardsBooks}/>
                                <Route path="*" component={NotFound}/>
                            </Switch>
                        </div>
                    </main>
                </section>
            </div>
        </Router>
    )
};

export default MainPage;