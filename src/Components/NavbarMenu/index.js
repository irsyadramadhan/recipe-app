import React from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, Container } from 'react-bootstrap'

export default function NavbarMenu() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-start">
            <Link className='my-text-blue' to={"/"}><b>Home</b></Link>
            <Link className='my-text-blue' to={"/add"}><b>Add</b></Link>
            <Link className='my-text-blue' to={"/profile"}><b>Profile</b></Link>
          </div>    
          <div className="col-lg-6 text-end">
            
          </div>
        </div>
      </div>
    </nav>
  )
}

// {/* <Navbar bg='dark' variant='dark'>
// <Container>
//     <Link to={"/"}>Home</Link>
//     <Link to={"/add"}>Add</Link>
//     <Link to={"/profile"}>Profile</Link>
// </Container>
// </Navbar> */}