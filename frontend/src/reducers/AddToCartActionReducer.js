const initiallstate = [];

const AddToCartActionReducer = (state = initiallstate, action) => {
    switch (action.type) {
        case 'PRODUCT_CART_REQUEST':
            return {
                loading: true, products: []
            };
        case "PRODCUT_CART_SUCCESSFLLY":
            var a = action.payload;
            console.log("A", a);
            return {
                loading: false, products: action.payload
            };
        case "PRODCUT_CART_REMOVE SUCCESSFULLY":
            var selected = action.payload;
            console.log("selected", selected);
            console.log("products", state)
            return {
                hostnames: state.products.filter(products => products._id !== action.payload)
            };
        default:
            return state
    }

}
export default AddToCartActionReducer;