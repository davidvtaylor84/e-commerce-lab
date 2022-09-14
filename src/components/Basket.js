import React from 'react'
import BasketListItem from './BasketListItem'

const Basket = ({basket, removeFromBasket}) => {
    
    const basketList = basket.map((book, index)=>{
        return <BasketListItem book={book} removeFromBasket={removeFromBasket} key={index}/>
    })

  return (
    <div>
        <h1>Basket</h1>
        <ul>
            {basketList}
        </ul>
    </div>
  )
}

export default Basket