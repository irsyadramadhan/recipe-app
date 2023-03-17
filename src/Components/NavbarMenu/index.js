import React from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, Container } from 'react-bootstrap'

export default function NavbarMenu() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/"}>Home</Link>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/add"}>Add</Link>
              <Link style={{color: "#2E266F", fontWeight: "bold"}} to={"/profile"}>Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}