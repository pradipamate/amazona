import React, { useState, useEffect,} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {listproducts} from '../action/productActionlist';
const HomeScreen = () => {
    // const [products, setproduct] = useState([]);
    const dispatch = useDispatch();
    const productlist = useSelector((state) => state.Productlist);
    console.log(productlist,"productlist");
    useEffect(() => {
         dispatch(listproducts());
    }, [])

    if(productlist.products!==undefined && productlist.products!=='' && productlist!==undefined){
    const { products, loading, error } = productlist.products;
     var productslist=productlist.products.map(product =>
        <li key={product._id}>
            <div className="product">
                <Link to={'/product/' + product._id}>
                    <img src={product.image} alt="product" />
                </Link>
                <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name} </Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}$</div>
                <div className="product-rating">{product.rating} stars{product.Numreviews}</div>
            </div>
        </li>
      )
   }
   else{
    var productslist=<div> Loading...</div>
   }

    return (
        <div>
            <ul className="products">
                {productslist}
            </ul>
        </div>
    )
}

export default HomeScreen;