import React from 'react'
import DeleteButton from './deleteButton'
import InvoiceCreated from './invoiceCreated'
// import {compressedArray, filteredArray} from './functions'
import {Button, Table, Input,Label} from 'semantic-ui-react'

// const Cart = ({cart, deleteCart}) => {

class Cart extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      qty: {},
      labor: '',
      discount: '',
      ogLabor: '',
      ogDiscount: '',
      ogQty: ''
    }
  }

  updateCart = (num, item) => {
    const price = parseFloat(item.size.price)
    console.log(num);
    console.log(price);
    // SET THIS BIZ AS NUMBERS AND FIGURE OUT HOW TO ACCESS ONES & TENS. SET PRICES IN THE ITEM OBJECT. KEEP TRACK OF THE PREVIOUS NUMBER.
    // return num * price

    // switch (num) {
    //   case (num > 10)
    // }
    //
    // if (num > 10) {
    //   console.log(String(num).split(""))
    //   const ones = parseInt(String(num).split("")[1])
    //   console.log(ones);
    //   console.log(price);
    //   const newPrice = price / ones
    //   return num * newPrice
    // } else if (num > 100) {
    //   const tens = parseInt(String(num).slice(0, -1).join(""))
    //   const tens = parseInt(arr.slice(0,-1).join(""))
    //   const newPrice = price / tens
    //   console.log(tens);
    //   console.log(price);
    //   return num * newPrice
    // } else if  {
    //   return num * price
    // }

    if (num < 10) {
      return num * price
    // } else if (num >= 10){
    //   if (num >= 100) {
    //     const tens = parseInt(String(num).slice(0, -1).join(""))
    //     // const tens = parseInt(arr.slice(0,-1).join(""))
    //     const newPrice = price / tens
    //     console.log(tens);
    //     console.log(price);
    //     return num * newPrice
    //   } else {
    //     // console.log(String(num).split(""))
    //     const ones = parseInt(String(num).split("")[1])
    //     // console.log(ones);
    //     // console.log(price);
    //     const newPrice = price / ones
    //     return num * newPrice
    //   }
  } else if (num >= 10) {
      if (num >= 100) {
        console.log("eh");
        console.log(num);
        // console.log(parseInt(String(num).slice(0, -1).join("")));
        // console.log()
            const tens = parseInt((String(num).split("").slice(0, -1).join("")))
            // const tens = parseInt(arr.slice(0,-1).join(""))
            const newPrice = price / tens
            console.log(tens);
            console.log(price);
            return num * newPrice
      } else {
        // console.log(String(num).split(""))
        const ones = parseInt(String(num).split("")[0])
        console.log(price);
        console.log(ones);
        console.log(price);
        const newPrice = price / ones
        return num * newPrice
      }
    }
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

    newItem = {count: parseInt(e.target.value),
      part: itemCheck.part, attachment: itemCheck.attachment,
      size: {id: itemCheck.size.id, measurement: itemCheck.size.measurement,
      price: String(this.updateCart(e.target.value, itemCheck).toFixed(2)),
      created_at: itemCheck.size.created_at, updated_at: itemCheck.size.updated_at} }

    const arrayOne = cart.slice(0,index)
    const arrayTwo = cart.slice((index + 1))

    const newCartItem = [...arrayOne, newItem, ...arrayTwo]

    this.setState({
      qty: {[id]: e.target.value},
      ogQty: {[id]: e.target.value}
    }, this.props.cartState(newCartItem))
  }

  handleDiscount = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // this.props.handleTotalDiscount
    // this.props.updateDiscount(e.target.value)
    this.setState({
      discount: e.target.value,
      ogDiscount: e.target.value
    })
  }

  handleLabor = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // this.props.updateLabor(e.target.value)
    this.setState({
      labor: e.target.value,
      ogLabor: e.target.value
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

      return (<Table.Body key={item.size.id + 70000}><Table.Row key={item.size.id + 80000}><Table.Cell></Table.Cell>
        <Table.Cell key={item.size.id + 10000}><Input value={this.state.qty[item.size.id]} type='number' placeholder={item.count} key={item} size='mini'onChange={this.handleQty(item.size.id)}/></Table.Cell>
        <Table.Cell key={item.size.id + 20000}>{item.part}</Table.Cell>
        <Table.Cell key={item.size.id + 30000}>{item.attachment}</Table.Cell>
        <Table.Cell key={item.size.id + 40000}>{item.size.measurement}</Table.Cell>
        <Table.Cell key={item.size.id + 50000}>${item.size.price}</Table.Cell>
        <Table.Cell key={item.size.id + 60000}><DeleteButton cart={cart} value={item.size.id} item={item.size.id} deleteItem={deleteItem}/></Table.Cell>
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
            <InvoiceCreated deleteCart={this.props.deleteCart}/>

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
