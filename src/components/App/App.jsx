import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout'
import PizzaList from '../PizzaList/PizzaList'
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminPage from '../AdminPage/AdminPage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  let cart = useSelector(storeInstance => storeInstance.cartReducer)

  let total = () => {
    if (cart.length === 0) {
      console.log('cart empty: total$=0')
      return 0;
    } else {
      let newTotal = 0
      for (let pizza of cart) {
        newTotal = Number(newTotal) + Number(pizza.price * pizza.quantity);
      }
      console.log('cart NOT empty: total$=', newTotal)
      return newTotal;
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h3>Total: ${total()} </h3>
      </header>

      <Router>

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/customerForm" exact>
          <CustomerForm />
        </Route>

        <Route path="/checkout" exact>
          <Checkout 
            total = {total}
          />
        </Route>

        <Route path="/admin" exact>
          <AdminPage />
        </Route>

      </Router>


    </div >
  );
}

export default App;
