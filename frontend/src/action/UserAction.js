import axios from "axios";
import Cookie from "js-cookie";

const signing = (email, password) => async (dispatch) => {
    dispatch({ type: "USER_SIGNIN_REQUEST"});
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/signin', { email, password });
      dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
        console.log("signdata",data);
       Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      console.log("error",error);
      dispatch({ type: "USER_SIGNIN_FAIL", payload: error.message });
    }
  }

//For Register 

  const register = (name,email, password,confirmpassword) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST"});
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/register', {name,email,password,confirmpassword});
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
       // console.log("signdata",data);
       Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: "USER_REGISTER_FAIL", payload: error.message });
    }
  }



  // export default signing;

export default {signing,register};