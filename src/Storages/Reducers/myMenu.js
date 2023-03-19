const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false
}

const my_menu = (state=initialState, action) => {
    if (action.type === 'GET_MYMENU_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === 'GET_MYMENU_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    } else if (action.type === 'GET_MYMENU_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isLoading: false
        }
    } else {
        return state;
    }
}

export default my_menu;