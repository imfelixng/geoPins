export default (state, { type, payload }) => {
    switch(type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                currentUser: payload
            }
        }

        case "LOGIN_ERROR": {
            return {
                ...state,
                currentUser: null
            }
        }

        case "IS_LOGGED_IN": {
            return {
                ...state,
                isAuth: payload,
            }
        }

        case "SIGN_OUT": {
            return {
                ...state,
                isAuth: false,
                currentUser: null,
            }
        }
        
        default: {
            return state;
        }
    }
} 