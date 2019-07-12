import { all } from 'redux-saga/effects'
import { fetchTodosWatcherSaga } from './sagas/fetchTodosSaga';
import { addTodoWatcherSaga } from './sagas/addTodoSaga';
import { deleteTodoWatcherSaga } from './sagas/deleteTodoSaga';
import { updateTodoWatcherSaga } from './sagas/updateTodoSaga';

export default function* rootSaga() {
  yield all([
    fetchTodosWatcherSaga(),
    addTodoWatcherSaga(),
    deleteTodoWatcherSaga(),
    updateTodoWatcherSaga(),
  ])
}
