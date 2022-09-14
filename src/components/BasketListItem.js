import React from 'react'
import styled from 'styled-components'

const BasketItem = styled.li`
    padding: 2em;
    list-style: none;
    margin: 0;
    width: 25%;`


const BasketListItem = ({book, removeFromBasket}) => {

    const handleClick = ()=>{
    removeFromBasket(book)
    }

  return (
    <div>
    <BasketItem>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <p>£{book.price}</p>
        <button onClick={handleClick}>Remove from basket</button>
    </BasketItem>
    </div>

  )
}

export default BasketListItem