const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false
}

const user_register = (state=initialState, action) => {
    if (action.type === 'USER_REGISTER_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === 'USER_REGISTER_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    } else if (action.type === 'USER_REGISTER_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isLoading: false
        }
    } else {
        return state;
    }
}

export default user_register;