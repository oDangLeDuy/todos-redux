import axios from "axios";

import { put, call, takeEvery } from "redux-saga/effects";
import { GET_TODOS_SUCCESS, GET_TODOS_REQUEST } from "../constants";


function fetchTodos() {
  return axios.get('/todos').then(response => response.data);
}

function* fetchTodosSaga() {
  const todos = yield call(fetchTodos);
  yield put({
    type: GET_TODOS_SUCCESS,
    todos,
  })
}

export function* fetchTodosWatcherSaga() {
  yield takeEvery(GET_TODOS_REQUEST, fetchTodosSaga);
}
