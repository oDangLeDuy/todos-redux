import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import getTodos from './actions/getTodos';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_HOST;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga);

store.dispatch(getTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
