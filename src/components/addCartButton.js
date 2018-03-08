import React from 'react'
import { Button } from 'semantic-ui-react'

// class AddCartButton extends Component {

  // state = {}

const AddCartButton = ({price, check, handleAddCart}) => {
console.log(check);
  const handleBars = (e) => {
      handleAddCart(e)
      // handleClick(e)
  }

  // handleClick = ({sizeInfo,handleAddCart}) => this.setState({ active: !this.state.active })

  // render() {

    // const { active } = this.state
    let thing

      if (check.id) {
        console.log(check)
        thing = <Button fluid icon={'add to cart'} content='add item to cart' color='green' onClick={handleBars}/>
      } else {
        thing = <Button fluid content='add item' />
      }



    return (
      <div>
        {thing}
      </div>
    )
  // }
}
export default AddCartButton
