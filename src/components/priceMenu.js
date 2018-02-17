import React from 'react'
import AddCartButton from './addCartButton'
import {Menu, Label, Icon} from 'semantic-ui-react'

const PriceMenu = ({price}) => {
let cost

  if (price.price) {
    cost = <Label.Detail>{price.price}</Label.Detail>
  } else {
    cost = <Label.Detail>0.00</Label.Detail>
  }

  return (
    <Menu>
      <Label postion="right">
        <Icon name='usd'/>
      </Label>
      <Label>
      {cost}
      </Label>
      <Label position="left">
        <Label.Detail>Add To Cart</Label.Detail>
      </Label>
      <AddCartButton/>
    </Menu>
  )
}


export default PriceMenu
