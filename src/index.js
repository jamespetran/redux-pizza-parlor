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
      return [...state, action.payload];
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
const cart = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PIZZA':
      return [...state, action.payload];
    case 'REMOVE_PIZZA':
      const removeID = action.payload.id;
      return state
        .map(item => item.id === action.payload.id)
  }
}



// Store
const storeInstance = createStore (
    combineReducers({
        customerInfoReducer,
        pizzaListReducer,
        ordersReducer,
    }),
    applyMiddleware(logger)
);





ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));
