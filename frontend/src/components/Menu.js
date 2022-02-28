import React from 'react'
import { HashRouter, Link, Router } from 'react-router-dom'
import Cookies from 'universal-cookie';

import logo from '../static/img/android-chrome-512x512.png'
import '../static/css/bootstrap.min.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">
                                <img src={logo} alt="" width="24" height="24" class="d-inline-block align-text-top" />
                                DRF To-Do List
                            </a>
                            <div class="container login-area" >
                                <HashRouter>
                                    {this.props.is_authenticated() ?
                                        <div className="row">
                                            <div className="col-sm navbar-brand">{this.props.username}</div>
                                            <button class="col-sm btn btn-primary" onClick={() => this.props.logout()}>Logout</button>
                                        </div> :
                                        <Link class="navbar-brand" to='/login'>Login</Link>
                                    }
                                    
                                </HashRouter>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <HashRouter>
                                        <ul>
                                            <li class="nav-item nav-link" >
                                                <Link class="nav-link active" to='/'>Projects</Link>
                                            </li>
                                            <li class="nav-item nav-link" >
                                                <Link class="nav-link active" to='/users'>Users</Link>
                                            </li>
                                            <li class="nav-item nav-link" >
                                                <Link class="nav-link active" to='/todos'>Todos</Link>
                                            </li>

                                        </ul>
                                    </HashRouter>
                                    {/* Navigation for the anchors: */}
                                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Users</a> */}
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;