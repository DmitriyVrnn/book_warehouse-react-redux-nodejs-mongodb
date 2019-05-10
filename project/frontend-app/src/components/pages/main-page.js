import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import logo from '../../static/img/phone-book-svgrepo-com.svg'
import "../../static/styles/main.scss"

import EditBook from "../../components/EditBook";
import AddBook from "../../components/AddBook";
import StoreBooks from '../../containers/StoreBooks'
import UserInfo from "../UserInfo"
import CreatePost from "../../components/CreatePost"
import Register from '../Register'
import Links from '../Links'
import CollectionBooks from '../../containers/CollectionBooks'

const MainPage = (props) => {
    return (
        <Router>
            <div className={'body'}>
                <header>
                    <nav className="navigation">
                        <Link to="/books"><img className="logotype" src={logo}
                                          alt="Логотип"/></Link>
                        <ul className="categories">
                            <li className="category-item"><Link to={'/books'}><span
                                className="element-books">Книги</span></Link></li>
                            <li className="category-item"><Link to={'/'}>Авторы</Link></li>
                            <li className="category-item"><Link to={'/'}>Склады</Link></li>
                            <li className="category-item"><Link to={'/'}>Опции</Link></li>
                        </ul>
                    </nav>
                </header>

                <section className="wrapper">
                    <aside className="sidebar">
                        <div className="sidebar-worker">Пользователь:
                            <UserInfo name={props.user}/>
                            <Link to={"/"} onClick={props.onLogout}>Выход</Link>
                        </div>
                        <Links/>
                    </aside>

                    <main className={"content"}>
                        <div className="feel-grid">
                            <Switch>
                                <Route exact path='/add' component={AddBook}/>
                                <Route path='/edit/:id' component={EditBook}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/index' component={StoreBooks}/>
                                <Route path='/post' component={CreatePost}/>
                                <Route path='/books' component={CollectionBooks}/>
                            </Switch>
                        </div>
                    </main>
                </section>
            </div>
        </Router>
    )
};

export default MainPage;