import React from 'react'
import ProductList from './ProductList'

const HomePage = ({stockList, addToBasket}) => {
  return (
    <div>
        <ProductList stockList={stockList} addToBasket={addToBasket}/>
    </div>
  )
}

export default HomePage