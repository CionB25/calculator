import React from 'react'
import { Button } from 'semantic-ui-react'

const AddCartButton = ({price, check, handleAddCart}) => {

  const handleCart = (e) => {
      handleAddCart(e)
  }

    let thing

      if (check.id) {
        thing = <Button fluid icon={'add to cart'} content='add item to cart' color='green' onClick={handleCart}/>
      } else {
        thing = <Button fluid content='add item' />
      }

  return (
    <div>
      {thing}
    </div>
  )
}
export default AddCartButton
