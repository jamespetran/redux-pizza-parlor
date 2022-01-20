import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'



const customerInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER_INFO':
            return [...state, action.payload];
    }
    return state;
}






// Store
const storeInstance = createStore (
    combineReducers({
        customerInfoReducer
    }),
    applyMiddleware(logger)
);




 
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
