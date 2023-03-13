import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

export default function NavbarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add</Link>
            <Link to={"/profile"}>Profile</Link>
        </Container>
    </Navbar>
  )
}
