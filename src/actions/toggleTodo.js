import { UPDATE_TODO_REQUEST } from '../constants';

const toggleTodo = (_id, completed) => {
  return {
    type: UPDATE_TODO_REQUEST,
    _id,
    payload: {
      completed: !completed,
    }
  }
};

export default toggleTodo;
