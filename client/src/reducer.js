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
        
        default: {
            return state;
        }
    }
} 