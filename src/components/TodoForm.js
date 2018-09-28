import React from 'react'

const TodoForm = props => {
  const { handleSubmit, handleChange, title, description } = props

  return (
    <form onSubmit={handleSubmit} id="todo-form">
      <label htmlFor="todo" />
      <input
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        placeholder="Description"
        id="description"
        cols="30"
        rows="5"
        value={description}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  )
}

export default TodoForm
