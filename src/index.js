import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducer';
import rootSaga from './redux/saga';
import App from './App';
import "./main.css";
import Cookie from 'js-cookie';


const sagaMiddleware = createSagaMiddleware();

const persistedCookie = Cookie.get('selectedSize');
console.log("selectedSize22", persistedCookie);
const persistedState = persistedCookie || {};

const store = createStore(reducer, persistedState,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);



