import React from 'react';
import { HashRouter, Route, Switch, Link, Router } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';


import logo from './logo.svg';
import bootstrap from 'bootstrap'
import './static/css/bootstrap.min.css'
import './static/css/styles.css'
import './App.css';

import UserList from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProjectList from './components/Project';
import { TodoList } from './components/Todo';
import ProjectDetailList from './components/ProjectDetail';
import LoginForm from './components/Auth';

const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      projects: [],
      todos: [],
      'token': '',
      'username': '',
    }
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  load_data() {
    const headers = this.get_headers()
    axios.get(get_url('users/'), { headers })
      .then(response => {
        this.setState({ users: response.data })
      }).catch(error => {
        console.log(error)
        this.setState({ users: [] })
      })

    axios.get(get_url('project/'), { headers })
      .then(response => {
        this.setState({ projects: response.data.results })
      }).catch(error => {
        console.log(error)
        this.setState({ projects: [] })
      })

    axios.get(get_url('todo/'), { headers })
      .then(response => {
        this.setState({ todos: response.data.results })
      }).catch(error => {
        console.log(error)
        this.setState({ todos: [] })
      })
  }

  set_token(token, username) {
    const cookies = new Cookies()
    cookies.set('token', token)
    cookies.set('username', username)
    this.setState({ 'username': username })
    this.setState({ 'token': token }, () => this.load_data())
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout() {
    this.set_token('', '')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')

    this.setState({ 'token': token }, () => this.load_data())
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', { username: username, password: password })
      .then(response => {
        console.log(response.data)
        this.set_token(response.data['token'], username)
        return username
      }).catch(error => alert('Неверный логин или пароль'))
  }

  componentDidMount() {
    this.get_token_from_storage()
    console.log(this.state.token)
  }

  deleteProject(id) {
    const headers = this.get_headers()
    axios.delete(get_url(`project/${id}`), { headers }).then(

      response => {
        this.load_data()

      }
    ).catch(error => {
      console.log(error)
      this.setState({ projects: [] })
    })

  }


  render() {
    return (
      <body class="d-flex flex-column min-vh-100">

        <div class="wrapper flex-grow-1">
          <header>
            <Menu
              is_authenticated={() => this.is_authenticated()}
              logout={() => this.logout()}
              username={this.state.username} />
          </header>
          <main role="main" class="flex-shrink-0">
            {/* <div class="container">
              <UserList users={this.state.users} />
            </div>
            <div class="container">
              <ProjectList projects={this.state.projects} />
            </div>
            <div class="container">
              <TodoList todos={this.state.todos} />
            </div> */}
            {/* Adding HashRoutes: */}
            <HashRouter>
              <Switch>
                <Route exact path='/' component={() => <ProjectList projects={this.state.projects } deleteProject={(id)=>this.deleteProject(id)} />} />
                <Route exact path='/users' component={() => <UserList users={this.state.users} />} />
                <Route exact path='/todos' component={() => <TodoList todos={this.state.todos} />} />
                <Route path="/project/:projectName">
                  <ProjectDetailList projects={this.state.projects}/>
                </Route>
                <Route exact path='/login' component={
                  () => <LoginForm
                    get_token={(username, password) => this.get_token(username, password)}
                    is_authenticated={() => this.is_authenticated()}
                  />} />
                <Route component={NotFound404} />
              </Switch>
            </HashRouter>



          </main>
        </div>
        <Footer />

      </body>


    )
  }
}

export default App;
