function PizzaItem({pizza}) {
  return (
    <div key={pizza.id} className="pizza-card">
      <img src={pizza.image_path} />
    </div>
  )
}

export default PizzaItem;