import axios from 'axios';

export function listproducts(){
    return async dispatch=>{
    dispatch(ProductListRequest());
    const { data } = await axios.get("http://localhost:5000/api/products");
    console.log("dajjjta",data);
     dispatch(ProductListSuccsess(data));
    }
}

export const ProductListRequest=()=>({
    type:"PRODUCT_LIST_REQUEST"
})

export const ProductListSuccsess=(data)=>({
    type: "PRODUCT_LIST_SUCSEES",
    payload:data
})

export function productdetails(productId){
    return async dispatch =>{
        dispatch(ProductDetailsRequest());
        const{data}=await axios.get("http://localhost:5000/api/products/" + productId);
        //  console.log("productdetails",data);
        dispatch(ProductDetailsSucsses(data))
    }
}

export const ProductDetailsRequest=(data)=>({
    type:"PRODUCT_DETAILS_REQUEST",
})

export const ProductDetailsSucsses=(data)=>({
    type:"PRODUCT_DETAILS_SUCCSESS",
    payload:data
})


// const listproducts = () => async(dispatch) => {
//     alert();
//     try {
       
//         dispatch({ type: PRODUCT_LIST_REQUEST });
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         console.log("data",data);
//         dispatch({ type: PRODUCT_LIST_SUCSEES, payload: data })
//     }
//     catch (error) {
//         dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
//     }

// }
