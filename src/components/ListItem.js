import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

const ListItem = ({book, addToBasket }) => {

    const ItemList = styled.li`
    padding: 2em;
    list-style: none;
    margin: 0;
    width: 25%;
    text-align: center;
    `
    const Button = styled.button`
    font-size: 1em;
    padding: 0.3em;
    margin: .5em;
    border: 2px solid #ced7e0;
    background: ${(props) => props.background || "#9ccddc"};
    `

    const Image = styled.img`
    border: solid 1px black;
    width:270px;
    height:400px;
    `

    const handleClick = (e)=>{
        addToBasket(book)
    }

    const Modal = () => (
        <Popup trigger={<Button className="button"> View More Details </Button>} modal>
          <span>
          <h3>{book.name}</h3>
          <h4>{book.author}</h4>
          <p>{book.description}</p>
          <p>£{book.price}</p>
          </span>
        </Popup>
      );


  return (
    <ItemList>
        <Image src={book.imageUrl}/>
        <Button onClick={handleClick}>Add to basket</Button>
        <Modal/>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <p>RRP: £{book.price}</p>
    </ItemList>
  )
}

export default ListItem

