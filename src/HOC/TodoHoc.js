import React, { Component } from 'react'

const Hoc = HocComponent =>
  class extends Component {
    render () {
      return <HocComponent {...this.props} />
    }
  }

export default Hoc
