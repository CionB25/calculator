import React from 'react'
import Cart from '../components/cart'
import SizeForm from '../components/sizeForm'
import AttachmentForm from '../components/attachmentForm'
import AddCartButton from '../components/addCartButton'
import {fetchParts, fetchCarts, fetchAttachments} from '../components/functions'
import PartForm from '../components/partForm'
import PriceReg from '../components/priceReg'
import {Container, Grid} from 'semantic-ui-react'
import {Route} from 'react-router-dom'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: "",
      partObj: {},
      attachments: [],
      sizes: [],
      sizeInfo: {},
      cart: [],
      total: "",
      currentPart: {
          id: "",
          name: "",
          attachments: []
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
      this.setState({
        partObj: res
      },console.log(res[0]))
    })
  }

  handlePart = (e) => {
    e.preventDefault()
    const current = this.state.partObj
    const thisPart = current.filter(part => {
        return part.description === String(e.target.innerText)
      })

    if (String(e.target.innerText) !== '') {
      this.setState({
        currentPart: {
          ...this.state.currentPart,
          id: thisPart[0].id,
          name: thisPart[0].description,
          attachments: thisPart[0].attachments
        }
      },console.log(this.state.currentPart))
    }
  }

  handleAttachment = (e) => {
    e.preventDefault()
    const partList = this.state.currentPart.attachments

    if (String(e.target.innerText) !== '') {

        const selectedPart = partList.filter(part => {
        return part.name === String(e.target.innerText)
      })
      const search = selectedPart[0].id

      return fetchAttachments(search)
      .then(res => {

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

  clearCart = () => {
    this.setState({
      currentPart: {
        ...this.state.currentPart,
        attachments: []
      },
      currentSize: {
          ...this.state.currentSize,
          sizeNumber: ""
      },
      sizes: []
    })
  }

  handleDeleteCart = (e) => {
    e.preventDefault()
    this.setState({
      cart: []
    },this.handleTotal)
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
      }),function () {
        this.handleTotal()
        })
      })
    this.clearCart()
  }

  handleDeleteItemFromCart = (e) => {
    e.preventDefault()
    const sizes = this.state.cart

    const gucci = sizes.filter(eh => {

          return parseInt(eh.size.id, 10) !== parseInt(e.target.value,10)
      })

    this.setState({
      cart: gucci
    },this.handleTotal)
  }

  handleTotal = () => {
    const almostTotal = this.state.cart
      .map(price => Object.values(price)[3]['price'])
      .map(parseFloat)
      .reduce((a,b) => a + b, 0)

    const total = Math.round(almostTotal *100)/100

    this.setState(prevState => ({total: String(total)}))

  }

  calculateLabor = (amount, total) => {

    const newTotal = [amount, total]
      .filter(item => typeof item === 'string')
      .map(parseFloat)
      .reduce((a,b) => a + b, 0)
      .toFixed(2)

    this.setState({
      total: newTotal
    })
  }

  calculate = (labor, disc, total) => {

    const num = parseFloat(disc)
    const multi = parseFloat(this.state.total)
    const percent = 100 - num
    const newTotal = (multi * (percent / 100)).toFixed(2)

    this.calculateLabor(labor, num? newTotal : total)
  }

  cartState = (array) => {
    console.log(array);
    this.setState({
      cart: array
    }, this.handleTotal)
  }

  render() {
    return (
      <div>
        <Container>

        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Container>
            <h3>Add / Edit Item</h3>
            <PartForm parts={this.state.partObj} handlePart={this.handlePart}/>
            <AttachmentForm part={this.state.currentPart.attachments} handleAttachment={this.handleAttachment}/>
            <SizeForm sizes={this.state.sizes} handleSize={this.handleSize} />

            </Container>
            <AddCartButton price={this.state.sizeInfo} check={this.state.currentSize} handleAddCart={this.handleAddCart}/>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Cart cart={this.state.cart} deleteCart={this.handleDeleteCart} calculate={this.calculate}
            deleteItem={this.handleDeleteItemFromCart} total={this.state.total} cartState={this.cartState}
            updateQty={this.updateQty} updateDiscount={this.updateDiscount} updateLabor={this.updateLabor}/>
          </Grid.Column>

        </Grid>

        <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Container>

          <Route path="/admin" render={(props) => {
            return <PriceReg {...props} parts={this.state.partObj} handlePart={this.handlePart}
            part={this.state.currentPart.attachments} handleAttachment={this.handleAttachment}
            sizes={this.state.sizes} handleSize={this.handleSize}
            partSelected={this.state.currentPart.name}
            attachment={this.state.currentAttachement.name}
            size={this.state.currentSize}/>
          }} />
          </Container>

        </Grid.Column>
        </Grid>
        </Container>
      </div>
    )
  }
}

export default CalculatorContainer
