import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useDispatch, useSelector } from 'react-redux'

function PizzaList() {
  const dispatch = useDispatch();
  let allPizzas = useSelector(storeInstance => storeInstance.pizzaListReducer)
  
  // axios call in function
  const getPizzas = () => {
    axios.get('/api/pizza')
      .then(res => {
        console.log('GET /api/pizza success', res.data)
        dispatch({
          type: 'SET_PIZZA_LIST',
          payload: res.data
        });
      })
      .catch(err => {
        console.error('error in GET /api/pizza', err);
      })

  }
  useEffect(getPizzas, [])

  return (
    <div id="pizza-area" className="container">
      {allPizzas.map(pizza => {
        return <PizzaItem pizza={pizza} />
      })}
    </div>
  )
}

export default PizzaList;