import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavbarMenu() {
  const user = useSelector((state) => state.user.data);
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(user);
  }, [user])

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate('/login');
  }

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/"}>Home</Link>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/add"}>Add</Link>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/profile"}>{name ? name : "Profile"}</Link>
              {name && <button onClick={() => logout()} style={{color: "#2E266F", fontWeight: "bold", float: 'right', background: "none", border: "none", padding: "none"}}>Logout</button>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}