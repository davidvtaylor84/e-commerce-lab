import React from 'react'
import ListItem from './ListItem'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'

const BookListStyle = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const ProductList = ({stockList, addToBasket}) => {

    const allStock = stockList.map((book)=>{
        return <ListItem key={book.id} book={book} addToBasket={addToBasket}/>
    })

  return (
    
    <BookListStyle>{allStock}</BookListStyle>
  )
}

export default ProductList