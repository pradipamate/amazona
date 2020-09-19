import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart,RemoveFormCartList} from '../action/AddToCartAction';

const CartScreen = (props) => {
    const cartproduct = useSelector(state => state.AddToCart);
    console.log("cartproduct", cartproduct.products);
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    console.log("qty", qty);
    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
            dispatch(addTocart(productId,qty));
        }
    }, [])

    const removerformcartlist=(productId)=>{
        
        console.log("remove",productId);
        dispatch(RemoveFormCartList(productId));
       
    }


    if (cartproduct.products !==undefined && cartproduct.products.data !==undefined) {
        var Cart =
            <div className="cart-container">
                <div className="cart-image">
                   <img src={cartproduct.products.data.image} alt="product" />
                </div>
                <div className="Cart-Name">
                    <div>
                        {cartproduct.products.data.name}
                    </div>
                    <div>
                        Qty:
                        <select value={cartproduct.products.qty} onChange={(e)=>dispatch(addTocart(cartproduct.products.data._id,e.target.value))}>
                           {[...Array(cartproduct.products.data.constInStocks).keys()].map(x=>
                            <option key={x+1} value={x+1}>{x+1}</option>    )} 
                        </select> 
                        <button class="add_to_cart_delete" onClick={()=>removerformcartlist(cartproduct.products.data._id)}>Delete</button>
                    </div>
                </div>
                <div class="cart-price">
                        {cartproduct.products.data.price}$
                </div>
            </div>
          var  price=<h3>SubTotal( {cartproduct.products.qty} Items):{cartproduct.products.qty}*{cartproduct.products.data.price}$</h3>
       }
    else {
        var Cart = <div>
            Cart Is Empty
        </div>
    }

    return (
        <div className="cart">
            <div className="cart-list">
                <ul class="cartlist_container">
                    <li>
                        <div>
                        <h2>Shoppimg Cart</h2>
                        </div>
                        <div className="cart-price">
                            Price
                      </div>
                    </li>
                    <li>
                    {Cart}
                    </li>
                </ul>
            </div>
            <div className="cart-action">
              {price}
                <button class="add_to_cart">Proceed to Checkout</button>
            </div>
        </div>
    )
}


export default CartScreen;
