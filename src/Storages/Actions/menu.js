import axios from "axios";

export const getMenu = () => async (dispatch) => {
    try {
        dispatch({type: 'GET_MENU_PENDING'});
        const result = await axios.get(`${process.env.REACT_APP_API_KEY}/recipe`);
        console.log(result);
        const menu = result.data.data
        console.log(menu);
        dispatch({type: 'GET_MENU_SUCCESS', payload: menu});
    } catch(err) {
        dispatch({type:'GET_MENU_FAILED', payload: err.response.data.message})
        console.log("getMenu Error");
        console.log(err);
    }
}

export const getMyMenu = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let headers  = {
            headers: {"Authorization": `Bearer ${token}`}
        }
        dispatch({type: 'GET_MYMENU_PENDING'});
        const result = await axios.get(`${process.env.REACT_APP_API_KEY}/recipe/myrecipe`, headers);
        console.log(`testing ${result}`);
        const menu = result.data.data
        console.log(`testing ${menu}`);
        dispatch({type: 'GET_MYMENU_SUCCESS', payload: menu});
    } catch(err) {
        dispatch({type:'GET_MYMENU_FAILED', payload: err.response.data.message})
        console.log("getMenu Error");
        console.log(err);
    }
}

export const addMenu = (data, navigate) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let headers  = {
            headers: {"Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}`}
        }
        dispatch({type: 'ADD_MENU_PENDING'});
        const result = await axios.post(`${process.env.REACT_APP_API_KEY}/recipe`, data, headers);
        console.log(result);
        const payload = result.data
        console.log(payload);
        dispatch({type: 'ADD_MENU_SUCCESS', payload});
        navigate('/profile');
    } catch(err) {
        dispatch({type:'ADD_MENU_FAILED', payload: err.response.data.message})
        console.log("loginUser Error");
        console.log(err);
    }
}

export const deleteMenu = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let headers  = {
            headers: {"Authorization": `Bearer ${token}`}
        }
        dispatch({type: 'DELETE_MENU_PENDING'});
        const result = await axios.delete(`${process.env.REACT_APP_API_KEY}/recipe/${id}`,headers);
        console.log(result);
        const menu = result.data
        console.log(menu);
        dispatch({type: 'DELETE_MENU_SUCCESS', payload: menu});
    } catch(err) {
        dispatch({type:'DELETE_MENU_FAILED', payload: err.response.data.message})
        console.log("getMenu Error");
        console.log(err);
    }
}