import React from 'react'
import ProductList from './ProductList'

const HomePage = ({stockList, addToBasket}) => {
  return (
    <div>
        <h2>HomePage</h2>
        <ProductList stockList={stockList} addToBasket={addToBasket}/>
    </div>
  )
}

export default HomePage