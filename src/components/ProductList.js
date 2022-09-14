import React from 'react'
import ListItem from './ListItem'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const ProductList = ({stockList, addToBasket}) => {

    const allStock = stockList.map((book)=>{
        return <ListItem key={book.id} book={book} addToBasket={addToBasket}/>
    })

  return (
    <>
        <div>ProductList</div>
        <ul>{allStock}</ul>
    </>
  )
}

export default ProductList