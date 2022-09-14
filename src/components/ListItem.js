import React from 'react'

const ListItem = ({book, addToBasket }) => {

    const handleClick = (e)=>{
        addToBasket(book)
    }

  return (
    <li>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <p>£{book.price}</p>
        <img src={book.imageUrl}/>
        <button onClick={handleClick}>Add to basket</button>
    </li>
  )
}

export default ListItem