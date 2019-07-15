import { ADD_TODO_REQUEST } from '../constants';

const addTodo = content => ({
  type: ADD_TODO_REQUEST,
  payload: {
    content,
  }
});

export default addTodo;
