import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './PizzaItem.css'


function PizzaItem({ pizza }) {

  //add to cart state

  return (
    <Card key={pizza.id} className="pizza-card">
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
      {/* add in conditional formatting to swap between these */}
      <div className="button-container">
        <Button className="buy-button" variant="outlined">Add</Button>
        <Button className="buy-button" variant="contained">Remove</Button>
      </div>
    </Card>
  )
}

export default PizzaItem;