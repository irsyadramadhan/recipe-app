const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false
}

const detail_menu = (state=initialState, action) => {
    if (action.type === 'GET_DETAILMENU_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === 'GET_DETAILMENU_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    } else if (action.type === 'GET_DETAILMENU_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isLoading: false
        }
    } else {
        return state;
    }
}

export default detail_menu;