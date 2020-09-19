const initialstate = [];
const ProductDetailsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS_REQUEST':
            return {
                loading: true, products: []
            };
        case 'PRODUCT_DETAILS_SUCCSESS':
            return {
                loading: false,products: action.payload,
            };
        case 'PRODUCT_DETAILS_FAIL':
            return {
                loading: false, error: action.payload
            };
        default:
            return state;
    }
}
export default ProductDetailsReducer;



