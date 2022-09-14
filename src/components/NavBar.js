import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <h1>Three Amigos Bookstore</h1>
    <ul>
       <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/basket">Basket</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
       
    </ul>
    </>
  )
}

export default NavBar