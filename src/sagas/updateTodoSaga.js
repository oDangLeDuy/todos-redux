import axios from "axios";

import { put, call, takeEvery } from "redux-saga/effects";
import { UPDATE_TODO_SUCCESS, UPDATE_TODO_REQUEST } from "../constants";


function updateTodo(_id, payload) {
  return axios.patch(`/todos/${_id}`, payload).then(response => response.data);
}

function* updateTodoSaga({ _id, payload }) {
  const todo = yield call(updateTodo, _id, payload);
  yield put({
    type: UPDATE_TODO_SUCCESS,
    todo,
  })
}

export function* updateTodoWatcherSaga() {
  yield takeEvery(UPDATE_TODO_REQUEST, updateTodoSaga);
}
