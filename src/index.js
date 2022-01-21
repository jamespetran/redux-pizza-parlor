import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// pizza list reducer
const pizzaListReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    //action.payload is already an array
    return action.payload;
  }
  return state;
}

// customer info reducer
const customerInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER_INFO':
      return [action.payload];
  }
  return state;
}
const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      state = action.payload
  }
  return state
}

// cart reducer
const cartReducer = (state = [], action) => {
  let pizzaToAdd = action.payload;
  if (action.type === 'ADD_PIZZA') {
    let exists = checkID(action.payload, state);
    if (state === []) {
      return [{...pizzaToAdd, qty: 1 }];
    } else if (exists) {
      return state
        .map(item => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
    } else if (!exists) {
      const pizzaToAdd = { ...action.payload, qty: 1 }
      return [...state, pizzaToAdd];
    }
  } else if (action.type === 'REMOVE_PIZZA') {
    return state 
      .map(item => (item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item))
      .filter(item => item.qty > 0);
      //this remove code is from https://stackoverflow.com/a/53892395
  }
  return state;
}

function checkID(pizzaToAdd, pizzaList) {
  for (let pizza of pizzaList) {
    if (pizza.id === pizzaToAdd.id) {
      return true;
    }
  }
  return false;
}

// Store
const storeInstance = createStore(
  combineReducers({
    customerInfoReducer,
    pizzaListReducer,
    ordersReducer,
    cartReducer
  }),
  applyMiddleware(logger)
);





ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));
