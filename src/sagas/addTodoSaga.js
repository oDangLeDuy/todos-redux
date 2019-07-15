import axios from "axios";

import { put, call, takeEvery } from "redux-saga/effects";
import { ADD_TODO_SUCCESS, ADD_TODO_REQUEST } from "../constants";


function addTodo(payload) {
  return axios.post('/todos', payload).then(response => response.data);
}

function* addTodoSaga({ payload }) {
  const todo = yield call(addTodo, payload);
  yield put({
    type: ADD_TODO_SUCCESS,
    todo,
  })
}

export function* addTodoWatcherSaga() {
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
}
