import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Ogunboyejo Olatunde',
          email: 'josiaholatunde17@gmail.com',
          phone: '999-999-888'
        },
        {
          id: 2,
          name: 'Adesanya Halimat',
          email: 'halimat.adesanya@xputertechnologies.com',
          phone: '555-555-555'
        },
        {
          id: 3,
          name: 'Adesokan Toyeeb',
          email: 'tayeeb@gmail.com',
          phone: '999-999-888'
        }
      ]
    }
  }

  deleteContact (id) {
    const { contacts } = this.state
    const newContacts = contacts.filter(contact => contact.id !== id)
    this.setState({ contacts: newContacts })
  }

  render () {
    const { contacts } = this.state
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            contacts={contact}
          />
        ))}
      </React.Fragment>
    )
  }
}
