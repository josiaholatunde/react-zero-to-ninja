import React from 'react'

const TodoList = props => {
  return (
    <div className="container">
      {props.todosArray.length > 0 && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="7">Todos</th>
            </tr>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Due Date</td>
              <td>Due Time</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.todosArray.map((todo, index) => (
              <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.status}</td>
                <td>{todo.dueDate}</td>
                <td>{todo.dueTime}</td>
                <td>
                  <i
                    className="fa fa-pencil-square-o"
                    style={{ cursor: 'pointer', color: 'green' }}
                    onClick={() => props.handleEdit(todo)}
                  />
                  <i
                    className="fa fa-trash-o mr-3"
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => props.handleDelete(todo)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TodoList
