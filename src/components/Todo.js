import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ toggleTodo, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type='checkbox' defaultChecked={completed} onClick={toggleTodo} />
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
