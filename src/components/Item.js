import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function handleAddtoCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const itemClass = isInCart ? "in-cart" : ""
  const buttonClass = isInCart ? "remove" : "add"


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddtoCartClick}>{isInCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;


