import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout'
import PizzaList from '../PizzaList/PizzaList'
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminPage from '../AdminPage/AdminPage'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

  <Router>

    <Route path="/" exact>
      <PizzaList />
    </Route>

    <Route path="/customerForm" exact>
      <CustomerForm />
    </Route>

    <Route path="/checkout" exact>
      <CustomerForm />
    </Route>

    <Route path="/admin" exact>
      <AdminPage />
    </Route>

  </Router>

  
    </div >
  );
}

export default App;
