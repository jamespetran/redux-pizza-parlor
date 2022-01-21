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


  let [count, setCount] = useState(0)
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
    if (cartPizzas === []) {
      setCount(0);
    }
    for (let cartPizza of cartPizzas) {
      if (cartPizza.id === pizza.id) {
        setCount(cartPizza.qty);
        return;
      } else { setCount(0); }
    }
  }


  useEffect(checkCartQty , [cartPizzas])

  
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
        <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />
        </Badge>

        <Button className="buy-button" variant="outlined" onClick={handleAdd}><AddCircleIcon /></Button>

      </div>
    </Card>
  )
}

export default PizzaItem;