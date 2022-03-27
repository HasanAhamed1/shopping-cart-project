// IMPORT ALL FILES
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "../Shop/Shop.css";
// DECLARE A GLOBAL VARIABLE ARRAY FOR THE SELECTED ITEMS
let newCart = [];
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [clearChossenProduct, setClearChoosenProduct] = useState(0);
  // FETCH JSON FILE
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    // ADDED NEW ITEMS TO THE ARRAY
    newCart = [...cart, product];
    setCart(newCart);
  };

  const [product, setProduct] = useState([]);

  const chooseOne = () => {
    //USED Math.random FOR SHOWING RANDOM ONE
    const newProduct = newCart[Math.floor(Math.random() * newCart.length)];
    setProduct(newProduct); //SET THE RANDOM ONE INTO THE USESTATE()
  };

  const chooseAgain = () => {
    newCart = [];
    console.log(newCart);
    // REMOVE HTML WHEN USED CHOOSE AGAIN

    // FOR REMOVING HTML FILE IN THE CART
    var paras = document.getElementsByClassName("cart-items");
    while (paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
    //REMOVE HTML FILE  SHOWED IN RANDOM
    var paras = document.getElementsByClassName("random");
    while (paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }

    const newChooseProduct = clearChossenProduct;
    setClearChoosenProduct(newChooseProduct);
  };

  return (
    <div className="container">
      {/* retrun product to the app.js file */}
      <div className="products_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      
      {/* retrun product to the cart.js file */}
      <div className="cart_container">
        {
          <Cart
            cart={cart}
            randomProduct={product}
            chooseOne={chooseOne}
            chooseAgain={chooseAgain}
          ></Cart>
        }
      </div>
    </div>
  );
};

export default Shop;
