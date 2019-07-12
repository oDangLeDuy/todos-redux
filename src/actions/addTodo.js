import { ADD_TODO } from '../constants';

let nextTodoId = 0
const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export default addTodo;
