import React from 'react';
import axios from 'axios'

import logo from './logo.svg';
import bootstrap from 'bootstrap'
import './static/css/bootstrap.min.css'
import './App.css';
import UserList from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProjectList from './components/Project';
import { TodoList } from './components/Todo';

const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      projects: [],
      todos: [],
    }
  }

  componentDidMount() {
    axios.get(get_url('users/'))
      .then(response => {
        this.setState({ users: response.data })
      }).catch(error => console.log(error))

    axios.get(get_url('project/'))
      .then(response => {
        console.log(response.data)
        this.setState({ projects: response.data.results })
      }).catch(error => console.log(error))

    axios.get(get_url('todo/'))
      .then(response => {
        this.setState({ todos: response.data.results })
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
            <div class="container">
              <ProjectList projects={this.state.projects} />
            </div>
            <div class="container">
              <TodoList todos={this.state.todos} />
            </div>

          </main>
        </div>
        <Footer />

      </body>


    )
  }
}

export default App;
