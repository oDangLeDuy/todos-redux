import axios from "axios";

import { put, call, takeEvery } from "redux-saga/effects";
import { DELETE_TODO_SUCCESS, DELETE_TODO_REQUEST } from "../constants";


function deleteTodo(_id) {
  return axios.delete(`/todos/${_id}`).then(response => response.data);
}

function* deleteTodoSaga({ _id }) {
  const todo = yield call(deleteTodo, _id);
  yield put({
    type: DELETE_TODO_SUCCESS,
    todo,
  })
}

export function* deleteTodoWatcherSaga() {
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}
