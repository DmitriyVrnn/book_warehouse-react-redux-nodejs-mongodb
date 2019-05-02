import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import logo from '../../static/img/phone-book-svgrepo-com.svg'
import "../../static/styles/main.scss"

import EditBook from "../../components/EditBook";
import AddBook from "../../components/AddBook";
import IndexComponent from "../../components/IndexComponent";
import UserInfo from "../UserInfo"
import CreatePost from "../../components/CreatePost"

const MainPage = (props) => {
    return (
        <Router>
            <div className={'body'}>
                <header>
                    <nav className="navigation">
                        <Link to="/"><img className="logotype" src={logo}
                                          alt="Логотип"/></Link>
                        <ul className="categories">
                            <li className="category-item"><Link to={'/books'}><span
                                className="element-books">Книги</span></Link></li>
                            <li className="category-item"><Link to={'/'}>Авторы</Link></li>
                            <li className="category-item"><Link to={'/'}>Склады</Link></li>
                            <li className="category-item"><Link to={'/'}>Опции</Link></li>
                        </ul>
                    </nav>
                    <div className="search-form">
                        <input type="search" name="search" id="search" placeholder="Поиск..."/>
                    </div>
                </header>

                <section className="wrapper">
                    <aside className="sidebar">
                        <div className="sidebar-worker">Пользователь:
                            <UserInfo name={props.user}/>
                            <Link to={"/"} onClick={props.onLogout}>Выход</Link>
                        </div>
                        <ul className="sidebar-list">
                            <li className="sidebar-item"><Link to={'/post'}>Стена</Link></li>
                            <li className="sidebar-item"><Link to={'/'}>Заказ</Link></li>
                            <li className="sidebar-item"><Link to={'/index'}>Хранилище</Link></li>
                            <li className="sidebar-item"><Link to={'/add'}>Добавить книгу</Link></li>
                        </ul>
                    </aside>

                    <main className={"content"}>
                        <div className="feel-grid">
                            <Switch>
                                <Route exact path='/add' component={AddBook}/>
                                <Route path='/edit/:id' component={EditBook}/>
                                <Route path='/index' component={IndexComponent}/>
                                <Route path='/post' component={CreatePost}/>
                            </Switch>
                        </div>
                    </main>
                </section>
            </div>
        </Router>
    )
};

export default MainPage;