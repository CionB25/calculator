import React from 'react'
// import parts from '../partsData'
import Cart from '../components/cart'
import SizeForm from '../components/sizeForm'
import AttachmentForm from '../components/attachmentForm'
import AddCartButton from '../components/addCartButton'
// import AddItemButton from '../components/addItemButton'
// import PriceMenu from '../components/priceMenu'
import {fetchParts, fetchCarts, fetchAttachments} from '../components/functions'
import PartForm from '../components/partForm'
import {Container, Grid} from 'semantic-ui-react'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: "",
      partObj: {},
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
          sizeNumber: "",
          price: {}
      }
    }
  }

  componentDidMount() {
    return fetchParts()
    .then(res => {
      console.log(res)
      this.setState({
        partObj: res
      })
    })
  }

  handlePart = (e) => {
    e.preventDefault()
    const current = this.state.partObj
    const thisPart = current.filter(part => {
        return part.description === String(e.target.innerText)
      })
console.log(thisPart)
    this.setState({
      currentPart: {
        ...this.state.currentPart,
        id: thisPart[0].id,
        name: thisPart[0].description
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
      const search = selectedPart[0].id
      return fetchAttachments(search)
      .then(res => {
        console.log(selectedPart)
        this.setState({
          sizes: res.sizes,
          currentAttachement: {
            ...this.state.currentAttachement,
            id: selectedPart[0].id,
            name: selectedPart[0].name
          }
        })
      })
    }
  }

  handleSize = (e) => {
    e.preventDefault()
    const arr = this.state.sizes
    if (String(e.target.innerText) !== '') {
      const sizeObj = arr.filter(size => {
        return size.measurement === String(e.target.innerText)
      })
      // console.log(sizeObj)
      // console.log(arr);
      // console.log(arr[0].measurement);
      // console.log(String(e.target.innerText));
      // console.log(e.target.innerText);
      this.setState({
        sizeInfo: sizeObj,
        currentSize: {
          ...this.state.currentSize,
          id: sizeObj[0].id,
          sizeNumber: String(e.target.innerText),
          price: sizeObj[0].price
        }
      })
    }
  }

  addPrice(value,array) {
    console.log(value, array)
  }

  clearCart = () => {
    this.setState({
      sizes: [],
      sizeInfo: []
    })
  }


  handleDeleteCart = (e) => {
    e.preventDefault()
    console.log('nah')
    this.setState({
      cart: []
    })
  }

  handleAddCart = e => {
    e.preventDefault()


    const item = {part: this.state.currentPart,
      attachment: this.state.currentAttachement,
      size: this.state.currentSize}

      fetchCarts(item)
      .then( res => {
        this.setState(prevState => ({
        cart: [...this.state.cart, res]
        }))
        console.log(this.state.cart)
      })

    this.clearCart()
  }

  render() {
    console.log(this.state.cart);
    return (
      <div>
        <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container>
            <PartForm parts={this.state.partObj} handlePart={this.handlePart}/>
            <AttachmentForm part={this.state.partObj} handleAttachment={this.handleAttachment}/>
            <SizeForm sizes={this.state.sizes} handleSize={this.handleSize} />

            </Container>
            <AddCartButton price={this.state.sizeInfo} check={this.state.currentSize} handleAddCart={this.handleAddCart}/>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Cart cart={this.state.cart} deleteCart={this.handleDeleteCart}/>
          </Grid.Column>
        </Grid>
        </Container>
      </div>
    )
  }
}

export default CalculatorContainer
// <PriceMenu price={this.state.sizeInfo}/>
