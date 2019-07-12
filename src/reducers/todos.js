import { 
  ADD_TODO_SUCCESS, 
  UPDATE_TODO_SUCCESS, 
  DELETE_TODO_SUCCESS, 
  GET_TODOS_SUCCESS,
} from '../constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return action.todos.data
    case ADD_TODO_SUCCESS:
      return [
        ...state,
        {
          _id: action.todo._id,
          content: action.todo.content,
          completed: action.todo.completed
        }
      ]
    case UPDATE_TODO_SUCCESS:
      return state.map(todo =>
        (todo._id === action.todo._id)
          ? {...action.todo}
          : todo
      )
    case DELETE_TODO_SUCCESS:
      return state.filter(todo =>
        (todo._id !== action.todo._id)
      )
    default:
      return state
  }
}

export default todos
