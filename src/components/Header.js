import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = props => {
  const { brandName } = props
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            {brandName}
          </a>
          <ul className="navbar-nav mr py-3">
            <li className="nav-item">
              <a href="/" style={{ color: 'white' }} className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Register
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
