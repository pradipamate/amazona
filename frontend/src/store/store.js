import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import Rootreducer from '../reducers/Rootreducer';


import Cookie from "js-cookie";
const userInfo =Cookie.getJSON("userInfo")||null;
const initiatlState={UserSignInfo:{userInfo}}

const store = createStore(Rootreducer,initiatlState,applyMiddleware(thunk))
export default store;
