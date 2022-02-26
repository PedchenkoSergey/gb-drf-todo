import React from 'react'
import logo from '../static/img/android-chrome-512x512.png'



class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { login: '', password: '' }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        console.log(this.state.login + ' ' + this.state.password)
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <div className="text-center">
                <div className="container mt-4">
                    <form class="form-signin" onSubmit={(event) => this.handleSubmit(event)}>
                        <img class="mb-4" src={logo} alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label for="inputLogin" class="sr-only">Email address</label>
                        <input type="text" id="inputLogin" class="form-control" name="login" placeholder="Login" value={this.state.login} onChange={(event) => this.handleChange(event)} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        {/* <input type="submit" value="Login" /> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm