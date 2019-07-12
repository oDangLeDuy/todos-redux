import { DELETE_TODO_REQUEST } from '../constants';

const deleteTodo = _id => ({
  type: DELETE_TODO_REQUEST,
  _id,
});

export default deleteTodo;
