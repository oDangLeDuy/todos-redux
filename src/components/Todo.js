import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ toggleTodo, completed, text, deleteTodo }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type='checkbox' defaultChecked={completed} onClick={toggleTodo} />
    {text}
    <button onClick={deleteTodo}>X</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todo
