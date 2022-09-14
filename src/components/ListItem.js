import React from 'react'
import Popup from 'reactjs-popup'

const ListItem = ({book, addToBasket }) => {

    const handleClick = (e)=>{
        addToBasket(book)
    }

    const Modal = () => (
        <Popup trigger={<button className="button"> View More Details </button>} modal>
          <span>
          <h3>{book.name}</h3>
          <h4>{book.author}</h4>
          <p>{book.description}</p>
          <p>£{book.price}</p>
          </span>
        </Popup>
      );


  return (
    <li>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <p>£{book.price}</p>
        <img src={book.imageUrl}/>
        <button onClick={handleClick}>Add to basket</button>
        <Modal/>
    </li>
  )
}

export default ListItem