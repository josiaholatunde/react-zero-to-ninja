import React, { Component } from 'react'
import { Switch, BrowserRouter, Router } from 'react-router-dom'
import Todo from './containers/Todo'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Todo />
      </div>
    )
  }
}

export default App
