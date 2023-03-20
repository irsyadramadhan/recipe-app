import axios from "axios";

export const loginUser = (data, navigate) => async (dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_PENDING'});
        const result = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/login`, data);
        console.log(result);
        const user = result.data.data
        console.log(user);
        localStorage.setItem("token", user.token);
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", user.fullname);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
        navigate('/profile');
    } catch(err) {
        dispatch({type:'USER_LOGIN_FAILED', payload: err.response.data.message})
        console.log("loginUser Error");
        console.log(err);
    }
}

export const registerUser = (data, navigate) => async (dispatch) => {
    try {
        dispatch({type: 'USER_REGISTER_PENDING'});
        const result = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/register`, data);
        console.log(result);
        const user = result.data.data
        console.log(user);
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user});
        navigate('/login');
    } catch(err) {
        dispatch({type:'USER_REGISTER_FAILED', payload: err.response.data.message})
        console.log("loginUser Error");
        console.log(err);
    }
}