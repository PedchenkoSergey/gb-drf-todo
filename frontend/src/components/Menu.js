import React from 'react'
import { HashRouter, Link, Router } from 'react-router-dom'
import logo from '../static/img/android-chrome-512x512.png'
import '../static/css/bootstrap.min.css'

const Menu = () => {
    return (
        <div class="row justify-content-md-center">
            <div class="col-6">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src={logo} alt="" width="24" height="24" class="d-inline-block align-text-top" />
                            DRF To-Do List
                        </a>
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
                                        <li class="nav-item nav-link" >
                                            <Link class="nav-link active" to='/login'>Login</Link>
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

export default Menu;