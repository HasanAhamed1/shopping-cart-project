import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "../Shop/Shop.css";
let newCart = [];
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [clearChossenProduct, setClearChoosenProduct] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    newCart = [...cart, product];
    setCart(newCart);
  };

  const [product, setProduct] = useState([]);

  const chooseOne = () => {
    const newProduct = newCart[Math.floor(Math.random() * newCart.length)];
    setProduct(newProduct);
  };

  const chooseAgain = () => {
    newCart = [];
    console.log(newCart);
    var paras = document.getElementsByClassName("cart-items");
    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }

    var paras = document.getElementsByClassName("random");
    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }

    document.getElementById("item-count").innerHTML = newCart.length;
    
    const newChooseProduct = clearChossenProduct;
    setClearChoosenProduct(newChooseProduct);
  };

  return (
    <div className="container">
      <div className="products_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>

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
