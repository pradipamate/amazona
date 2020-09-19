import React, { useEffect, useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productdetails } from '../action/productActionlist';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const ProductDetails = useSelector(state => state.ProductDetails);

  console.log("ProductDetailslist", ProductDetails.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productdetails(props.match.params.id));
  }, [])

  // for AddToCart section//
  const handlerAddToCart=()=>{
    props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
  }

  if (ProductDetails.products !== undefined) {
    var Product =
      <div className="details">
        <div className="product-image">
          <img src={ProductDetails.products.image} alt="product_details_image" ></img>
        </div>
        <div className="details-info">
          <ul>
            <li><h4>{ProductDetails.products.name}</h4> </li>
            <li> {ProductDetails.products.rating} Stars ({ProductDetails.products.Numreviews} Reviews)</li>
            <li> Price : <b>{ProductDetails.products.price}$</b></li>
            <li> Description : {ProductDetails.products.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price : {ProductDetails.products.price}</li>
            <li>Status : {ProductDetails.products.Numreviews}</li>
            <li>Price : {ProductDetails.products.price}</li>
            <li>Qty : 
              <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                {[...Array(ProductDetails.products.constInStocks).keys()].map(x =>
                  <option key={x + 1} value={x + 1}>{x + 1}</option>)}
              </select>
            </li>
            {ProductDetails.products.constInStocks > 0 ?
            <li><button class="add_to_cart" onClick={handlerAddToCart}>Add To Cart</button></li>
            : 
            <li><button class="add_to_cart">Out Of Stock</button></li>
            }
            </ul>
        </div>
      </div>
  }
  else {
    var Product = <div> Loading...</div>
  }
  return (
    <div>
      <div className="back-to-results">
        <Link to="/"> Back to results</Link>
      </div>
      {Product}
    </div>
  )
}

export default ProductScreen;