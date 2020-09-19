const initalstate = [];
const UserActionReducer = (state = initalstate, action) => {
    switch (action.type) {
        case "USER_SIGNIN_REQUEST":
            return {
                loading: true
            }
        case "USER_SIGNIN_SUCCESS":
            return {
                loading: false, UserInfo:action.payload
            }
        case "USER_SIGNIN_FAIL":
            return {
                loading: false, error: action.payload
            }

          default:
         return state;

    }
}

const UserRegisterReducer = (state = initalstate, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST":
            return {
                loading: true
            }
        case "USER_REGISTER_SUCCESS":
            return {
                loading: false, UserInfo:action.payload
            }
        case "USER_REGISTER_FAIL":
            return {
                loading: false, error: action.payload
            }
          default:
         return state;

    }
}

export {UserActionReducer,UserRegisterReducer};