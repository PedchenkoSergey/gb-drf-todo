import React from 'react';
import axios from 'axios'

import logo from './logo.svg';
import bootstrap from 'bootstrap'
import './static/css/bootstrap.min.css'
import './App.css';
import UserList from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';

const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(get_url('users/'))
      .then(response => {
        this.setState({ users: response.data })
      }).catch(error => console.log(error))

  }


  render() {
    return (
      <body class="d-flex flex-column min-vh-100">

        <div class="wrapper flex-grow-1">
          <header>
            <Menu />
          </header>
          <main role="main" class="flex-shrink-0">
            <div class="container">

              <UserList users={this.state.users} />
            </div>
          </main>
        </div>
        <Footer />

      </body>


    )
  }
}

export default App;
