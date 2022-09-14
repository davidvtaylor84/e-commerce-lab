import React from 'react'

const BasketTotal = ({basketTotal}) => {

  const displayPrice = Math.round((basketTotal+Number.EPSILON)*100)/100

  return (
    <div>
      <h3>Basket Total - £{displayPrice}</h3>
    </div>
  )
}

export default BasketTotal