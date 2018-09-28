import React from 'react'

const TodoForm = props => {
  const { title, description, dueDate, dueTime } = props.todo
  return (
    <div>
      <form onSubmit={props.submitTodoForm}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            onChange={props.handleChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={props.handleChange}
            id="description"
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            className="form-control"
            onChange={props.handleChange}
            id="priority"
          >
            <option value="Null">Select the priority level</option>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Important">Important</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            className="form-control"
            onChange={props.handleChange}
            id="status"
          >
            <option value="Null">Select the Status</option>
            <option value="Done">Done</option>
            <option value="Not Done">Not Done</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            className="form-control"
            name="dueDate"
            onChange={props.handleChange}
            id="dueDate"
            value={dueDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueTime">Due Time</label>
          <input
            type="time"
            className="form-control"
            name="dueTime"
            onChange={props.handleChange}
            id="dueTime"
            value={dueTime}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {props.hasUpdate ? 'UPDATE' : 'ADD'} TODO
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
