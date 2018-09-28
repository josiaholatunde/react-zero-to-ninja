import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Todo from './containers/Todo'
import Theme from './containers/context/Theme'
import NavBar from './components/NavBar'
import Login from './containers/Login'
class App extends Component {
  render () {
    return (
      <div id="root-container">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/context" exact component={Theme} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
