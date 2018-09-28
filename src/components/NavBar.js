import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './nav.scss'

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/" style={style}>
              TodoApp
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="/login" style={navLinkStyle}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
const style = {
  color: 'white',
  fontSize: '1.7em'
}
const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.3em'
}
export default NavBar
