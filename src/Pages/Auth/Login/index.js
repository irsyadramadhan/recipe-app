import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "../../../Components/NavbarMenu";
import { loginUser } from "../../../Storages/Actions/auth";
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state)=>state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postData = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        let data = {email, password};
        dispatch(loginUser(data, navigate));
    }
    return (
        <div>
            <NavbarMenu />
            <h2 className='text-center' style={{color: "#2E266F", marginBottom: "50px", marginTop: "50px"}}>Login</h2>
            <form onSubmit={postData} className="container" style={{width: "50%"}}>
                <input type="email" className="form-control my-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input type="password" className="form-control my-3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button type="submit" className="btn btn-warning my-3">Login</button>
                <p>Dont have an account? <Link to={'/register'}><span style={{color: "#EFC81A"}}>Create Account.</span></Link></p>
                {user.isLoading && <p>Loading...</p>}
                {user.errorMessage}
            </form>
        </div>
    )
}