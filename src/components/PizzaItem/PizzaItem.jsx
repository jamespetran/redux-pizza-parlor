function PizzaItem({pizza}) {
  return (
    <div key={pizza.id} className="pizza-card">
      <p>pizza item component</p>
      <img src={pizza.image_path} />
    </div>
  )
}

export default PizzaItem;