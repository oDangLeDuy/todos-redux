import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, GET_TODOS_SUCCESS } from '../constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return [
        ...state,
        ...action.todos.data
      ]
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case DELETE_TODO:
      return state.filter(todo =>
        (todo.id !== action.id)
      )
    default:
      return state
  }
}

export default todos
