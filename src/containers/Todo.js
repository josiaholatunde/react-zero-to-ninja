import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import Portal from '../containers/portals/Portals'
import './todo.scss'

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      todo: {
        title: '',
        description: ''
      },
      text: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleChange (e) {
    // Getting the current input field name
    const name = e.target.name
    // creating a new todo
    const todo = this.state.todo
    // assigning a vale to the current fields i.e title or description
    // e.g todo[title] = <new value> or todo[description] = <new value>
    todo[name] = e.target.value

    this.setState({ todo, error: false })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { title, description } = this.state.todo
    if (title.trim().length === 0 || description.trim().length === 0) {
      this.setState({ error: true })
    } else {
      const newItem = {
        title: title,
        description: description,
        id: Date.now()
      }
      this.setState({
        todos: [...this.state.todos, newItem], // spreading the previous items and adding the newItem
        todo: {
          title: '',
          description: ''
        }
      })
      console.log('i submitted', this.state)
    }
  }

  removeItem (todo) {
    const todoItems = this.state.todos.filter(item => item.id !== todo.id)
    this.setState({ todos: todoItems })
  }

  render () {
    return (
      <div id="todo-container-wrappper">
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.todo.title}
          description={this.state.todo.description}
        />
        {this.state.error && (
          <span className="error"> You cannot enter an empty todo </span>
        )}
        {this.state.todos.length > 0 && (
          <div className="list-wrapper">
            <TodoList items={this.state.todos} removeItem={this.removeItem} />
          </div>
        )}
      </div>
    )
  }
}
export default Todo
