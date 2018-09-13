import React, { Component } from 'react'
import Header from './components/Header'
import Contacts from './containers/Contacts'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header brandName="DevCirclesNinja" />
        <div>
          <Contacts />
        </div>
      </div>
    )
  }
}

export default App
