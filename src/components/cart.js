import React from 'react'
import DeleteButton from './deleteButton'
// import {compressedArray, filteredArray} from './functions'
import {Button, Table, Input,Label} from 'semantic-ui-react'

// const Cart = ({cart, deleteCart}) => {

class Cart extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      qty: {},
      labor: '',
      discount: ''
    }
  }

  updateCart = (num, item) => {
    const price = parseFloat(item.size.price)
    return num * price
  }

  newThing = () => {
    this.props.calculate(this.state.labor, this.state.discount, this.props.total)
  }

  handleQty = (id)=>(e) => {
    e.preventDefault()
    const cart = this.props.cart
    let newItem = {}

    const indexedArray = cart.map((thing, index) => {
      return {id: index, item: thing}
    })

    const cartItem = indexedArray.filter(thing => {
      return thing.item.size.id === id
    })

    const index = cartItem[0].id
    const itemCheck = cartItem[0].item

    newItem = {count: parseInt(e.target.value), part: itemCheck.part, attachment: itemCheck.attachment, size: {id: itemCheck.size.id, measurement: itemCheck.size.measurement, price: String(this.updateCart(e.target.value, itemCheck).toFixed(2)), created_at: itemCheck.size.created_at, updated_at: itemCheck.size.updated_at} }

    const arrayOne = cart.slice(0,index)
    const arrayTwo = cart.slice((index + 1))

    const newCartItem = [...arrayOne, newItem, ...arrayTwo]

    this.setState({
      qty: {[id]: e.target.value}
    }, this.props.cartState(newCartItem))
  }

  handleDiscount = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // this.props.handleTotalDiscount
    // this.props.updateDiscount(e.target.value)
    this.setState({
      discount: e.target.value
    })
  }

  handleLabor = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // this.props.updateLabor(e.target.value)
    this.setState({
      labor: e.target.value
    })
  }

  render() {

    const cart = this.props.cart
    const total = this.props.total
    const deleteCart = this.props.deleteCart
    const deleteItem = this.props.deleteItem

    let cartList

    if (cart.length > 0) {
      cartList = cart.map(item => {

      return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
        <Table.Cell key={item.count} collapsing><Input value={this.state.qty[item.size.id]} type='number' placeholder={item.count} key={item} size='mini'onChange={this.handleQty(item.size.id)} collapsing/></Table.Cell>
        <Table.Cell key={item.part}>{item.part}</Table.Cell>
        <Table.Cell key={item.attachment}>{item.attachment}</Table.Cell>
        <Table.Cell key={item.size.measurement}>{item.size.measurement}</Table.Cell>
        <Table.Cell key={item.size.price}>${item.size.price}</Table.Cell>
        <Table.Cell key={"2"}><DeleteButton cart={cart} value={item.size.id} item={item.size.id} deleteItem={deleteItem}/></Table.Cell>
        </Table.Row></Table.Body>)
     })
    }

    return (
      <Table celled compact definition >
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell value="qty">Qty.</Table.HeaderCell>
            <Table.HeaderCell>Part</Table.HeaderCell>
            <Table.HeaderCell>Attachement</Table.HeaderCell>
            <Table.HeaderCell>Size (in Inches)</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      {cartList}

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='1'>
            <Button span col icon labelPosition='right' primary size='small'>
              Invoice
            </Button>

            </Table.HeaderCell>

            <Table.HeaderCell>
              Discount(%)
              <Input value={this.state.discount} onChange={this.handleDiscount} type="number" fluid placeholder='amt %' size='small'/>
            </Table.HeaderCell>
            <Table.HeaderCell>
              Labor($)
              <Input value={this.state.labor} onChange={this.handleLabor} type="number" fluid placeholder="hours"  size='small' />
            </Table.HeaderCell>

            <Table.HeaderCell>
              <Button fluid col={1} icon labelPosition='right' primary size='small' onClick={this.newThing}>
                Calculate
              </Button>
            </Table.HeaderCell>

            <Table.HeaderCell>

              <Label fluid size="large">
                Total:
                <Label.Detail>${total}</Label.Detail>
              </Label>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Button fluid col={1} icon labelPosition='right' primary size='small' onClick={deleteCart}>
                Clear Cart
              </Button>
            </Table.HeaderCell>
          </Table.Row>

        </Table.Footer>
      </Table>
    )
  }

}

export default Cart
