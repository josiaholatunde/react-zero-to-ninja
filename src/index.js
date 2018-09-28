import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style/global.scss'

render(<App />, document.getElementById('root'))

// Portal Example
/*
 * Portal allows us to render a component in
 * another target
 * basically used in large applications
*/
