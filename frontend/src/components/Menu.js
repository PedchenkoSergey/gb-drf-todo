import React from 'react'
import logo from '../static/img/android-chrome-512x512.png'
import '../static/css/bootstrap.min.css'

const Menu = () => {
    return (
        <div class="row justify-content-md-center">
            <div class="col-6">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="24" height="24" class="d-inline-block align-text-top" />
                            DRF To-Do List
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Users</a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu;