import React from 'react'
import parts from '../partsData'
import PartList from '../components/partList'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: parts,
      attachments: [],
      sizes: [],
      cart: []
    }
  }


  render() {

    return (
      <PartList parts={this.state.parts}/>
    )
  }
}

export default CalculatorContainer
