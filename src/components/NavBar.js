import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" style={style} href="#">
              TodoApp
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const style = {
  color: 'white',
  fontSize: '2em'
}

export default NavBar
