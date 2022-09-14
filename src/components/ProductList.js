import React from 'react'
import ListItem from './ListItem'

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