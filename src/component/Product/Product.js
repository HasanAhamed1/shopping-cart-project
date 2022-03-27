import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../Product/Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    const {id, name, price, img} = product;
    return (
        // CREATE HTML FOR SAME TYPE DATA
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
            <p>Name:{name}</p>
            <p>Id:{id}</p>
            <p>Price:{price}</p>
            </div>
            <div>
                {/* ADDED A BUTTON FOR ADDING TO CART ALSO WITH FUNCTIONALITIES */}
                <button className='button' onClick={()=>addToCart(product)}><p className='button_text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            
            </div>
        </div>
    );
};

export default Product;