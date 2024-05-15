import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', isError: false}

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailed = error => {
    this.setState({errorMsg: error, isError: true})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailed(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, isError} = this.state

    return (
      <div className="app-container">
        <div className="loginform-container">
          <img
            className="website-logo-mobile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="website-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              className="website-logo-laptop"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="username-card">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="username"
                type="text"
                value={username}
                id="username"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-card">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="password"
                type="password"
                value={password}
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
            {isError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
