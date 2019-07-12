import axios from "axios";

import { put, call, takeEvery, all } from "redux-saga/effects";
import { GET_TODOS_SUCCESS, GET_TODOS_REQUEST } from "../constants";


function fetchTodos() {
  return axios.get('/todos').then(response => response.data);
}

function* fetchTodoSagas() {
  const todos = yield call(fetchTodos);
  yield put({
    type: GET_TODOS_SUCCESS,
    todos
  })
}

function* fetchTodoWatcherSagas() {
  yield takeEvery(GET_TODOS_REQUEST, fetchTodoSagas);
}

export default function* rootSaga() {
  yield all([
    fetchTodoWatcherSagas(),
  ])
}
