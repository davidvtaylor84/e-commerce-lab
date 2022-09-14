import React from 'react'
import BasketListItem from './BasketListItem'
import BasketTotal from './BasketTotal'

const Basket = ({basket, removeFromBasket, basketTotal}) => {
    
    const basketList = basket.map((book, index)=>{
        return <BasketListItem book={book} removeFromBasket={removeFromBasket} key={index}/>
    })

  return (
    <div>
        <h1>Basket</h1>
        <BasketTotal basketTotal={basketTotal}/>
        <ul>
            {basketList}
        </ul>
    </div>
  )
}

export default Basket