import {combineReducers} from 'redux';
import Productlistreducer from './productlistreducer';
import ProductDetailsReducer from './ProductDetailsReducer';
import AddToCartActionReducer from './AddToCartActionReducer';
import {UserActionReducer,UserRegisterReducer} from './UserActionReducer';


const Rootreducer = combineReducers({
   Productlist: Productlistreducer,
   ProductDetails: ProductDetailsReducer,
   AddToCart:AddToCartActionReducer,
   UserSignInfo:UserActionReducer,
   UserRegisterInfo:UserRegisterReducer
})

export default Rootreducer;