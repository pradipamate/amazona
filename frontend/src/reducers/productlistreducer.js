const initialstate = [];
const Productlistreducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {
                loading: true, products: []
            };
        case 'PRODUCT_LIST_SUCSEES':
            return {
                loading: false, products: action.payload
            };
        case 'PRODUCT_LIST_FAIL':
            return {
                loading: false, error: action.payload
            };
        default:
            return state;
    }
}
export default Productlistreducer;



