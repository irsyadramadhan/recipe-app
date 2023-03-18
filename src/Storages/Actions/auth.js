import axios from "axios";

export const loginUser = (data, navigate) => async (dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_PENDING'});
        const result = await axios.post('http://localhost:4000/auth/login', data);
        // console.log(result);
        const user = result.data.data
        //console.log(user);
        localStorage.setItem("token", user.token);
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", user.fullname);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
        navigate('/profile');
    } catch(err) {
        console.log("loginUser Error");
        console.log(err);
    }
}