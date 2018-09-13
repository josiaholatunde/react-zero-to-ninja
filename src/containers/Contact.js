import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      showContactInfo: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  handleClick (e) {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  deleteClick () {
    this.props.deleteClickHandler()
  }
  render () {
    const { name, email, phone } = this.props.contacts
    const { showContactInfo } = this.state
    return (
      <div>
        <div className="card card-body mb-3">
          <h4>
            {name} &nbsp;
            <i
              onClick={this.handleClick}
              className="fa fa-sort-down"
              style={{ cursor: 'pointer' }}
            />
            <i
              onClick={this.deleteClick}
              className="fa fa-times"
              style={{ float: 'right', cursor: 'pointer', color: 'red' }}
            />
          </h4>
          {showContactInfo && (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  contacts: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact
