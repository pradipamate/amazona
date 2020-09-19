import axios from 'axios';

export function addTocart(productId,qty) {
  console.log("zxcxzxc",productId)
    return async dispatch =>{
      console.log(qty,"QTccY");
    dispatch(ProductCartRequest());
     const{data} = await axios.get("http://localhost:5000/api/products/" + productId);
     console.log("addtocart",data);
    
     dispatch(ProductCartSuccessfully(data,qty));
    }

}

const ProductCartRequest=()=>({
    type:"PRODUCT_CART_REQUEST",
  })

const ProductCartSuccessfully=(data,qty)=>({
  type:"PRODCUT_CART_SUCCESSFLLY",
  payload:{data,qty}
})

export const RemoveFormCartList=(productId)=>({
  type:"PRODCUT_CART_REMOVE SUCCESSFULLY",
  payload:productId
})