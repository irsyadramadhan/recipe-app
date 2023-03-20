import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "../../../Components/NavbarMenu";
import { registerUser } from "../../../Storages/Actions/auth";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const user = useSelector((state)=>state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postData = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        let data = {email, password, fullname};
        dispatch(registerUser(data, navigate));
    }
    return (
        <div>
            <NavbarMenu />
            <h2 className='text-center' style={{color: "#2E266F", marginBottom: "50px", marginTop: "50px"}}>Create New Account!</h2>
            <form onSubmit={postData} className="container" style={{width: "50%"}}>
                <input type="email" className="form-control my-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input type="password" className="form-control my-3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <input type="text" className="form-control my-3" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Fullname" />
                <button type="submit" className="btn btn-warning my-3">Login</button>
            </form>
            {user.isLoading && <p>Loading...</p>}
            {user.errorMessage}
        </div>
    )
}