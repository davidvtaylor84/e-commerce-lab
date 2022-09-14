import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
font-size:5em;
font-family: Impact;
text-align: center;
color: black;
background-color: #fcdb03;
margin:0;
`

const Navigation = styled.ul`
font-size:2em;
display: flex;
list-style: none;
list-style-type: none;
margin: 5px 200px;
/* align-items: stretch; */
justify-content: space-between;
background-color: aquamarine;
`

const NavBar = () => {
  return (
    <>
    <Title>Three Amigos Bookstore</Title>
    <Navigation>
       <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/basket">Basket</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </Navigation>
    </>
  )
}

export default NavBar