import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  function handleAddToCart(){
    console.log('pressed')
    setAddToCart((addToCart => !addToCart)
    )
  }
  const inCart = addToCart ? "Remove From Cart" : "Add to Cart"
  const removeFromCart = !addToCart ? "" : "in-cart"
  return (
    <li className={removeFromCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{inCart}</button>
    </li>
  );
}

export default Item;
