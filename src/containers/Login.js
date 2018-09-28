import React, { Component } from 'react'

export default class Login extends Component {
  constructor () {
    super()
    this.login = this.login.bind(this)
  }
  login (event) {
    event.preventDefault()
  }
  render () {
    return (
      <div className="container">
        <form id="loginForm" onSubmit={this.login} style={{ marginTop: '3%' }}>
          <div className="form-group">
            <h3>Login Form</h3>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}
