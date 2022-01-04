import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// import Data from './data';
let 초기값 = [
  { id: 0, name: 'White and Black', quan: 1, price: 120000 },
  { id: 1, name: 'Red Knit', quan: 1, price: 210000 }
];
// let 초기값 = Data;
function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {
    let found = state.findIndex((a) => { return a.id === 액션.데이터.id });

    if (found >= 0) {
      alert('해당상품이 이미 장바구니에 있어요.');
      let copy = [...state];
      copy[found].quan++;
      return copy
    } else {
      let copy = [...state];
      copy.push(액션.데이터);
      return copy
    }
  } else if (액션.type === '수량증가') {
    let copy = [...state];
    // copy[액션.데이터].quan++;
    // return copy
    let found = state.findIndex((a) => {
      return a.id === 액션.데이터;
    });
    if (copy[found].quan >= 10) {
      copy[found].quan = 10;
    } else {
      copy[found].quan++;
    }
    return copy;

  } else if (액션.type === '수량감소') {
    let copy = [...state];
    // copy[액션.데이터].quan -= ((copy[액션.데이터].quan === 1) ? 0 : 1);
    // return copy
    let found = state.findIndex((a) => {
      return a.id === 액션.데이터;
    });
    if (copy[found].quan <= 1) {
      copy[found].quan = 1;
    } else {
      copy[found].quan--;
    }
    return copy;
  }
  else if (액션.type === '상품삭제') {
    let copy = [...state];
    let copy2 = copy.filter(a => a.id !== 액션.데이터);
    return copy2
  }
  else {
    return state
  }
}
let alert초기값 = true;
function reducer2(state = alert초기값, 액션) {
  if (액션.type === 'alert닫기') {
    state = false;
    return state;
  } else {
    return state
  }
}
let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
