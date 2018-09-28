import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todosArray: [],
      todo: {
        title: '',
        description: '',
        priority: 'Null',
        status: 'Null',
        dueDate: new Date().toISOString().slice(0, 10),
        dueTime: new Date().toTimeString().slice(0, 8)
      },
      isDelete: false,
      hasUpdate: false,
      hasUpdated: false,
      errors: false
    }
    this.submitTodoForm = this.submitTodoForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleChange (event) {
    var name = event.target.name
    var todo = this.state.todo
    todo[name] = event.target.value
    if (this.state.todosArray.length > 0) {
    }
    this.setState({ todo, errors: false, isDelete: false, hasUpdated: false })
    console.log(this.state.todo)
  }

  handleEdit (todo) {
    this.setState({ hasUpdate: true, todo })
  }

  handleDelete (todo) {
    let newTodosArray = this.state.todosArray.filter(
      item => item.id !== todo.id
    )
    let userResponse = window.confirm(
      'Are you sure you want to delete this item ?'
    )
    if (userResponse) {
      this.setState({
        todosArray: newTodosArray,
        errors: false,
        isDelete: true
      })
    }
  }

  submitTodoForm (e) {
    const { title, status, priority, description } = this.state.todo
    e.preventDefault()
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      status === 'Null' ||
      priority === 'Null'
    ) {
      this.setState({ errors: true })
    } else {
      if (this.state.hasUpdate) {
        let todo = this.state.todo
        this.state.todosArray.map(item => {
          if (item.id === todo.id) {
            item = todo
          }
        })
        this.setState({
          todosArray: [...this.state.todosArray],
          todo: {
            title: '',
            description: '',
            priority: todo.priority,
            status: todo.status,
            dueDate: new Date().toISOString().slice(0, 10),
            dueTime: new Date().toTimeString().slice(0, 8)
          },
          errors: false,
          isDelete: false,
          hasUpdated: true,
          hasUpdate: false
        })
      } else {
        let todo = this.state.todo
        todo['id'] = Date.now()
        this.setState({
          todosArray: [...this.state.todosArray, todo],
          todo: {
            title: '',
            description: '',
            priority: todo.priority,
            status: todo.status,
            dueDate: new Date().toISOString().slice(0, 10),
            dueTime: new Date().toTimeString().slice(0, 8)
          },
          errors: false,
          isDelete: false
        })
      }
    }
    console.log('You submitted form')
    console.log(this.state)
  }
  render () {
    return (
      <div className="container">
        <div className="form-group">
          <h1>Todo Form</h1>
        </div>
        {this.state.errors && (
          <div className="alert alert-danger">
            One or more inputs can not be empty before submission
          </div>
        )}
        {this.state.isDelete && (
          <div className="alert alert-success">
            Todo item has been deleted successfully
          </div>
        )}

        {this.state.hasUpdated && (
          <div className="alert alert-success">
            Todo item has been updated successfully
          </div>
        )}
        <TodoForm
          todo={this.state.todo}
          hasUpdate={this.state.hasUpdate}
          handleChange={this.handleChange}
          submitTodoForm={this.submitTodoForm}
        />
        <TodoList
          todosArray={this.state.todosArray}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}
