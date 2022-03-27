import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../Product/Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    const {id, name, price, img} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
            <p>Name:{name}</p>
            <p>Id:{id}</p>
            <p>Price:{price}</p>
            </div>
            <div>
                <button className='button' onClick={()=>addToCart(product)}><p className='button_text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            
            </div>
        </div>
    );
};

export default Product;