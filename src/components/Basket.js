import React from 'react'
import BasketListItem from './BasketListItem'

const Basket = ({basket, removeFromBasket}) => {
    
    const basketList = basket.map((book)=>{
        return <BasketListItem book={book} removeFromBasket={removeFromBasket}/>
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