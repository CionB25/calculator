import React from 'react'
import DeleteButton from './deleteButton'
// import {compressedArray, filteredArray} from './functions'
import {Button, Table, Input,Label} from 'semantic-ui-react'

// const Cart = ({cart, deleteCart}) => {

class Cart extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      qty: '',
      labor: '',
      discount: ''
    }
  }

  // componentDidMount() {
  //
  //   const cart = this.props.cart
  //
  //     if (cart.length > 0) {
  //
  //     console.log(cart)
  //
  //     const priceArr = cart.map(price => {
  //       return Object.values(price)[3]['price']
  //     })
  //
  //     const priceFloats = priceArr.map(price => {
  //       return parseFloat(price)
  //     })
  //
  //     // let  thing = String(priceFloats.reduce((a,b) => a + b, 0))
  //
  //     const thing = priceFloats.reduce((a,b) => a + b, 0)
  //
  //     const two = Math.round(thing *100)/100
  //
  //     const now = String(two)
  //
  //
  //
  //       this.props.whenLoaded
  //     }
  //     console.log(this.props.cart);
  //     console.log(this.props.whenLoaded);
  // }


  handleQty = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      qty: e.target.value
    })
  }

  handleDiscount = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    console.log(this.props.handleTotalDiscount)
    this.props.handleTotalDiscount
    this.setState({
      discount: e.target.value
    })
  }

  handleLabor = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      labor: e.target.value
    })
  }

  handleDelete = (e) => {
    e.preventDefault()
    console.log('hi');
  }


  render() {

    const cart = this.props.cart
    const total = this.props.total
    const deleteCart = this.props.deleteCart
    const deleteItem = this.props.deleteItem



    let cartList
    // let total

    if (cart.length > 0) {

    // console.log(cart)

    // const priceArr = cart.map(price => {
    //   return Object.values(price)[3]['price']
    // })
    //
    // const priceFloats = priceArr.map(price => {
    //   return parseFloat(price)
    // })
    //
    // const thing = priceFloats.reduce((a,b) => a + b, 0)
    // //
    // const two = Math.round(thing *100)/100
    // //
    // total = String(two)
      // total = String(priceFloats.reduce((a,b) => a + b, 0))


    //
    // console.log(total)

      cartList = cart.map(item => {

      console.log(item.size.id)
      //  return (<Table.Body key={item.attachment} >
      //    <CartItem key={item.attachment} item={item}/>
      //  </Table.Body>)
      return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
        <Table.Cell key={item.count} collapsing><Input value={this.state.qty} type='number' placeholder={item.count} key={item} size='mini'onChange={this.handleQty} collapsing/></Table.Cell>
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
            <Table.HeaderCell colSpan='2'>
            <Button span col icon labelPosition='right' primary size='small'>
              Invoice
            </Button>

            </Table.HeaderCell>
            <Table.HeaderCell>
              Discount
              <Input value={this.state.discount} onChange={this.handleDiscount, this.props.handleTotalDiscount} type="number" fluid placeholder='amt %' size='small'/>
            </Table.HeaderCell>
            <Table.HeaderCell>
              Labor
              <Input value={this.state.labor} onChange={this.handleLabor} type="number" fluid placeholder="hours"  size='small' />
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
