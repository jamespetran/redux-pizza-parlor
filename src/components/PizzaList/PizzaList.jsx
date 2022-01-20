import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
  const [allPizzas, setAllPizzas] = useState([]);

  // axios call in function
  const getPizzas = () => {
    axios.get('/api/pizza')
      .then(res => {
        console.log('GET /api/pizza success', res.data)
        setAllPizzas(res.data);
      })
      .catch(err => {
        console.error('error in GET /api/pizza', err);
      })

  }
  useEffect(getPizzas, [])

  return (
    <div id="pizza-area">
      <p>pizza list component</p>
      {allPizzas.map(pizza => {
        <PizzaItem pizza={pizza} />
      })}
    </div>
  )
}

export default PizzaList;