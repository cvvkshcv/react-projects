import React from "react";
import "./product.css";

const Product = React.memo(({ name, addToCart }) => {
  console.log(`${name} prod comp re-rendered`);
  return (
    <div className="product">
      <h1>{name}</h1>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
});

export default Product;
