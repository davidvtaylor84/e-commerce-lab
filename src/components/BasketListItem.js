import React from 'react'

const BasketListItem = ({book, removeFromBasket}) => {

    const handleClick = (e)=>{
        removeFromBasket(e.target.value)
    }

  return (
    <div>
    <li>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <p>£{book.price}</p>
        <img src={book.imageUrl}/>
        <button onClick={handleClick} value={book.id}>Remove from basket</button>
    </li>
    </div>

  )
}

export default BasketListItem