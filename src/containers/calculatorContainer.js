import React from 'react'
import parts from '../partsData'
// import DataForm from '../components/dataForm'
import SizeForm from '../components/sizeForm'
import AttachmentForm from '../components/attachmentForm'
import AddCartButton from '../components/addCartButton'
// import AddItemButton from '../components/addItemButton'
import PriceMenu from '../components/priceMenu'
import PartForm from '../components/partForm'
import {Form, Container, Grid, Divider} from 'semantic-ui-react'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: parts,
      currentPart: {},
      sizes: [],
      sizeInfo: {},
      cartItem: {},
      cart: []
    }
  }

  hashItOut = (e) => {
    const part = parts.filter(part => {
          return part.description === String(e.target.innerText)
        })

    this.setState({
      currentPart: part
    })
  }

  handlePart = (e) => {
    e.preventDefault()
    this.hashItOut(e)
  }



  handleAttachment = (e) => {
    e.preventDefault()
    const partList = this.state.currentPart[0].attachments
    if (String(e.target.innerText) !== '') {
        const selectedPart = partList.filter(part => {
        return part.name === String(e.target.innerText)
      })
      const sizes = selectedPart[0].sizes
      console.log(sizes);
      console.log(sizes[0])
      this.setState({
        sizes: sizes
      })
    }
  }

  handleSize = (e) => {
    e.preventDefault()
    console.log(String(e.target.innerText))
    const arr = this.state.sizes
        console.log(arr);
    if (String(e.target.innerText) !== '') {
      const sizeObj = arr.filter(size => {
        return Object.entries(size).join("").split(",")[0] === String(e.target.innerText)
      })[0][String(e.target.innerText)]

      this.setState({
        sizeInfo: sizeObj
      })
    }
  }

  handleAddCart = e => {
    e.preventDefault()
    console.log('hi');
    console.log("price:",this.state.sizeInfo, "sizes:", this.state.sizes, "part:" ,this.state.currentPart);
  }

  render() {
    return (
      <div>
        <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container>
            <PartForm parts={this.state.parts} handlePart={this.handlePart}/>
            <AttachmentForm part={this.state.currentPart} handleAttachment={this.handleAttachment}/>
            <SizeForm sizes={this.state.sizes} handleSize={this.handleSize} />

            </Container>
            <AddCartButton price={this.state.sizeInfo} handleAddCart={this.handleAddCart}/>
          </Grid.Column>
        <Divider horizontal />
          <Grid.Column mobile={16} tablet={8} computer={4}>

          </Grid.Column>
        </Grid>
        </Container>
      </div>
    )
  }
}

export default CalculatorContainer
// <PriceMenu price={this.state.sizeInfo}/>
