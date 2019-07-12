import { DELETE_TODO } from '../constants';

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export default deleteTodo;
