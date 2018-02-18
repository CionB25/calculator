import React from 'react'
import parts from '../partsData'
import Cart from '../components/cart'
import SizeForm from '../components/sizeForm'
import AttachmentForm from '../components/attachmentForm'
import AddCartButton from '../components/addCartButton'
// import AddItemButton from '../components/addItemButton'
// import PriceMenu from '../components/priceMenu'
import PartForm from '../components/partForm'
import {Form, Container, Grid, Divider} from 'semantic-ui-react'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: parts,
      partObj: {},
      currentSize: {},
      sizes: [],
      sizeInfo: {},
      cart: [],
      currentPart: {
          id: "",
          name: ""
        },
      currentAttachement: {
        id: "",
        name: ""
      },
      currentSize: {
          id: "",
          sizeNumber: ""
      }
    }
  }

  handlePart = (e) => {
    e.preventDefault()
    const part = parts.filter(part => {
          return part.description === String(e.target.innerText)
        })
    this.setState({
      partObj: part,
      currentPart: {
        ...this.state.currentPart,
        name: String(e.target.innerText)
      }
    })
  }



  handleAttachment = (e) => {
    e.preventDefault()
    const partList = this.state.partObj[0].attachments
    if (String(e.target.innerText) !== '') {
        const selectedPart = partList.filter(part => {
        return part.name === String(e.target.innerText)
      })
      const sizes = selectedPart[0].sizes

      this.setState({
        sizes: sizes,
        currentAttachement: {
          ...this.state.currentAttachement,
          name: String(e.target.innerText)
        }
      })
    }
  }

  handleSize = (e) => {
    e.preventDefault()
    const arr = this.state.sizes
    if (String(e.target.innerText) !== '') {
      const sizeObj = arr.filter(size => {
        return Object.entries(size).join("").split(",")[0] === String(e.target.innerText)
      })[0][String(e.target.innerText)]

      this.setState({
        sizeInfo: sizeObj,
        currentSize: {
          ...this.state.currentSize,
          name: String(e.target.innerText)
        }
      })
    }
  }

  handleAddCart = e => {
    e.preventDefault()
    const item = {part: this.state.currentPart,
      attachment: this.state.currentAttachement,
      size: this.state.currentSize}
      
      this.setState(prevState => ({
      cart: [...this.state.cart, item]
    }))
  }

  render() {
    return (
      <div>
        <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container>
            <PartForm parts={this.state.parts} handlePart={this.handlePart}/>
            <AttachmentForm part={this.state.partObj} handleAttachment={this.handleAttachment}/>
            <SizeForm sizes={this.state.sizes} handleSize={this.handleSize} />

            </Container>
            <AddCartButton price={this.state.sizeInfo} handleAddCart={this.handleAddCart}/>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Cart cart={this.state.cart}/>
          </Grid.Column>
        </Grid>
        </Container>
      </div>
    )
  }
}

export default CalculatorContainer
// <PriceMenu price={this.state.sizeInfo}/>
