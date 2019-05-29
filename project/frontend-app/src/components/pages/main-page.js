import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import logo from '../../static/img/phone-book-svgrepo-com.svg'
import "../../static/styles/main.scss"

//--start--- Тестовые компоненты
import SandBox from '../Modal/SandBox'
import TestDirectory from '../TestDirectory'
//--end---

import EditBook from "../../components/EditBook";
import AddBook from "../../components/AddBook";
import StoreBooks from '../../containers/StoreBooks'
import UserInfo from "../UserInfo"
import CreatePost from "../../components/CreatePost"
import Register from '../Register'
import Links from '../Links'
import CollectionBooks from '../../containers/CollectionBooks'
import {WORKER} from "../../constants/constants";

const MainPage = (props) => {
    return (
        <Router>
            <div className={'body'}>
                <header className='header'>
                    <Link to="/books"><img className="logotype" src={logo}
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
                            {props.role === WORKER ?
                                <Switch>
                                    <Route exact path={'/'} component={CollectionBooks}/>
                                    <Route path='/index' component={StoreBooks}/>
                                    <Route path='/post' component={CreatePost}/>
                                    <Route path='/books' component={CollectionBooks}/>
                                </Switch> :
                                <Switch>
                                    <Route exact path={'/'} component={CollectionBooks}/>
                                    <Route path='/add' component={AddBook}/>
                                    <Route path='/edit/:id' component={EditBook}/>
                                    <Route path='/register' component={Register}/>
                                    <Route path='/test' component={TestDirectory}/>
                                    <Route path='/index' component={StoreBooks}/>
                                    <Route path='/post' component={CreatePost}/>
                                    <Route path='/books' component={CollectionBooks}/>
                                </Switch>
                            }
                        </div>
                    </main>
                </section>
            </div>
        </Router>
    )
};

export default MainPage;