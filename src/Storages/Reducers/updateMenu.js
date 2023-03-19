const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false
}

const update_menu = (state=initialState, action) => {
    if (action.type === 'UPDATE_MENU_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === 'UPDATE_MENU_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    } else if (action.type === 'UPDATE_MENU_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isLoading: false
        }
    } else {
        return state;
    }
}

export default update_menu;