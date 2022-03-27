import React from "react";
import "../Cart/Cart.css";

const Cart = (props) => {
  const { cart, randomProduct, chooseOne, chooseAgain } = props;

  return (
    <div className="cart">
      <h2>
        Selected Bags:<span id="item-count">{cart.length}</span>
        <div className="cart-items">
          {cart.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))}
        </div>
      </h2>

      <button onClick={() => chooseOne()}>Choose any one</button>
        <h2 className="random" key={randomProduct.id}>{randomProduct.name}</h2>
      <button className="btn_chooseAgain" onClick={() => chooseAgain()}>
        Choose again
      </button>
    </div>
  );
};

export default Cart;
