import React from "react";
import "../Cart/Cart.css";//IMPORT CART.CSS FILE BY USING IMPORT

const Cart = (props) => {
  const { cart, randomProduct, chooseOne, chooseAgain } = props;//DETUCTURING FROM THE PROPS

  return (
    <div className="cart">
      {/* SHOWED CHOOSEN PRODUCT INTO CART */}
      <h2>
        Selected Bags:
        <div className="cart-items">
          {cart.map((product) => (
            // GET PRODUCT NAME USING "product"
            <p key={product.id}>{product.name}</p>
          ))}
        </div>
      </h2>
      {/* ADDED BUTTON FOR FINDING RANDOM ONE */}
      <button onClick={() => chooseOne()}>Choose any one</button>
        <h2 className="random" key={randomProduct.id}>{randomProduct.name}</h2>

        {/* ADDED BUTTON FOR CHOOSING AGAIN */}
      <button className="btn_chooseAgain" onClick={() => chooseAgain()}>
        Choose again
      </button>
    </div>
  );
};

export default Cart;
