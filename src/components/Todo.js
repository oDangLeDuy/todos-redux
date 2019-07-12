import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ toggleTodo, completed, content, deleteTodo }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type='checkbox' defaultChecked={completed} onClick={toggleTodo} />
    {content}
    <button onClick={deleteTodo}>X</button>
  </li>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
