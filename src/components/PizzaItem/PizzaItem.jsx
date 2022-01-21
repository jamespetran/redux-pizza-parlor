import { useDispatch, useSelector } from 'react-redux';
import './PizzaItem.css';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function PizzaItem({ pizza }) {

  const dispatch = useDispatch();
  let cartPizzas = useSelector(storeInstance => storeInstance.cartReducer)

  let count = 0;
  // let [count, setCount] = useState(0)
  //add to cart state
  // cartReducer

  const handleAdd = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: pizza
    })
  }

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_PIZZA',
      payload: pizza
    })
  }

  // get pizza ID and compare to cart pizza ID
  const checkCartQty = () => {
    if (cartPizzas.length === 0) {
      console.log('cart empty')
      count = 0;
      return
    }
    for (let cartPizza of cartPizzas) {
      if (cartPizza.id === pizza.id) {
        console.log(pizza.id, ' <- id set to qty ->', cartPizza.qty)
        count = cartPizza.qty;
        console.log('count is', count)
        return;
      } else { count = 0; }
    }
  }

  //set count in .find cartPizzas

  useEffect(checkCartQty, [cartPizzas]);


  return (
    <Card className="pizza-card">
      <div className="pic-content">
        <CardMedia
          component="img"
          image={pizza.image_path}
          width="150"
          alt={pizza.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.description}
          </Typography>
          <div className="pizza-price">${pizza.price}</div>
        </CardContent>
      </div>
      <div className="button-container">

        <Button className="buy-button" variant="contained" onClick={handleRemove}><RemoveCircleIcon /></Button>
        {/* cartPizzas */}
        <Badge color="secondary" badgeContent={
          cartPizzas.filter(cartPizza => cartPizza.id === pizza.id).qty
        }>
          <ShoppingCartIcon />
        </Badge>

        <Button className="buy-button" variant="outlined" onClick={handleAdd}><AddCircleIcon /></Button>

      </div>
    </Card>
  )
}

export default PizzaItem;