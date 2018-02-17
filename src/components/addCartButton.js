import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class AddCartButton extends Component {

  state = {}


  handleBars = (e) => {
      this.props.handleAddCart(e)
      this.handleClick(e)
  }

  handleClick = ({sizeInfo,handleAddCart}) => this.setState({ active: !this.state.active })

  render() {

    const { active } = this.state
    let thing

      if (this.props['price']['price']) {
        thing = <Button fluid icon={'add to cart'} content='add to cart' toggle active={active} onClick={this.handleBars}/>
      } else {
        thing = <Button fluid loading/>
      }


    console.log(this.props['price']['price'])
    return (
      <div>
        {thing}
      </div>
    )
  }
}
export default AddCartButton
