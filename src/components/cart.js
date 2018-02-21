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

  // let cartList
  // let dButton = <DeleteButton cart={cart} onClick={deleteCart}/>

//   if (cart.length > 0) {
// console.log(cart)
//       // const carts = compressedArray(cart)
//       // const newBiz = filteredArray(cart,carts)
// // console.lo
// // console.log(carts)
//     cartList = cart.map(item => {
//       let i = 0
//     console.log(item.size.id)
//     //  return (<Table.Body key={item.attachment} >
//     //    <CartItem key={item.attachment} item={item}/>
//     //  </Table.Body>)
//     return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
//       <Table.Cell key={item.count}><Input value={"2"} type={item.count}placeholder={item.count} key={item} size='mini'onChange={this.handleQty} /></Table.Cell>
//       <Table.Cell key={item.part}>{item.part}</Table.Cell>
//       <Table.Cell key={item.attachment}>{item.attachment}</Table.Cell>
//       <Table.Cell key={item.size.measurement}>{item.size.measurement}</Table.Cell>
//       <Table.Cell key={item.size.price}>${item.size.price}</Table.Cell>
//       <Table.Cell key={"2"}><DeleteButton value={eh} item={item.size.id} onClick={deleteCart}/></Table.Cell>
//       </Table.Row></Table.Body>)
//    })
//   }

  // <Table.Cell>{item.count}</Table.Cell>
  // <Table.Cell>{item[0].attachment.name}</Table.Cell>
  // <Table.Cell>{item[0].part.name}</Table.Cell>
  // <Table.Cell>{item[0].size.name}</Table.Cell>
  // <Table.Cell>{item[0].size.name}</Table.Cell>
  // console.log(cartList)
  // console.log(cart);

  render() {

    const cart = this.props.cart
    const deleteCart = this.props.deleteCart
    const deleteItem = this.props.deleteItem
    let cartList

    if (cart.length > 0) {
    console.log(cart)
        // const carts = compressedArray(cart)
        // const newBiz = filteredArray(cart,carts)
    // console.lo
    // console.log(carts)
      cartList = cart.map(item => {

      console.log(item.size.id)
      //  return (<Table.Body key={item.attachment} >
      //    <CartItem key={item.attachment} item={item}/>
      //  </Table.Body>)
      return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
        <Table.Cell key={item.count}><Input value={this.state.qty} type='number' placeholder={item.count} key={item} size='mini'onChange={this.handleQty} /></Table.Cell>
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
              <Label size="large">
                Total Price:
                <Label.Detail>$25</Label.Detail>
              </Label>

            </Table.HeaderCell>
            <Table.HeaderCell>
              Discount
              <Input value={this.state.discount} onChange={this.handleDiscount} type="number" fluid placeholder='amt %' size='small'/>
            </Table.HeaderCell>
            <Table.HeaderCell>
              Labor
              <Input value={this.state.labor} onChange={this.handleLabor} type="number" fluid placeholder="hours"  size='small' />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Button fluid icon labelPosition='right' primary size='small'>
                Place Order
              </Button>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Button fluid icon labelPosition='right' primary size='small' onClick={deleteCart}>
                Clear Cart
              </Button>
            </Table.HeaderCell>
          </Table.Row>

        </Table.Footer>
      </Table>
    )
  }

/*
before return
*************************************************
let cartList
let dButton = <DeleteButton cart={cart} onClick={deleteCart}/>

if (cart.length > 0) {
console.log(cart)
    // const carts = compressedArray(cart)
    // const newBiz = filteredArray(cart,carts)
// console.lo
// console.log(carts)
  cartList = cart.map(item => {
    let i = 0
  console.log(item.size.id)
  //  return (<Table.Body key={item.attachment} >
  //    <CartItem key={item.attachment} item={item}/>
  //  </Table.Body>)
  return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
    <Table.Cell key={item.count}><Input value={"2"} type={item.count}placeholder={item.count} key={item} size='mini'onChange={this.handleQty} /></Table.Cell>
    <Table.Cell key={item.part}>{item.part}</Table.Cell>
    <Table.Cell key={item.attachment}>{item.attachment}</Table.Cell>
    <Table.Cell key={item.size.measurement}>{item.size.measurement}</Table.Cell>
    <Table.Cell key={item.size.price}>${item.size.price}</Table.Cell>
    <Table.Cell key={"2"}><DeleteButton value={eh} item={item.size.id} onClick={deleteCart}/></Table.Cell>
    </Table.Row></Table.Body>)
 })
}


console.log(cartList)
console.log(cart);

after return
*************************************************
<Table celled compact definition >
  <Table.Header fullWidth>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell value="qty">Qty.</Table.HeaderCell>
      <Table.HeaderCell>Part</Table.HeaderCell>
      <Table.HeaderCell>Attachement</Table.HeaderCell>
      <Table.HeaderCell>Size</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
    </Table.Row>
  </Table.Header>

{cartList}



  <Table.Footer fullWidth>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell colSpan='2'>
        <Label size="large">
          Total Price:
          <Label.Detail>$25</Label.Detail>
        </Label>

      </Table.HeaderCell>
      <Table.HeaderCell>
        Discount
        <Input  fluid placeholder='amt %' size='small'/>
      </Table.HeaderCell>
      <Table.HeaderCell>
        Labor
        <Input fluid placeholder="hours"  size='small' />
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Button fluid icon labelPosition='right' primary size='small'>
          Place Order
        </Button>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Button fluid icon labelPosition='right' primary size='small' onClick={deleteCart}>
          Clear Cart
        </Button>
      </Table.HeaderCell>
    </Table.Row>

  </Table.Footer>
</Table>
*************************************************

*/


//   return (
//     <Table celled compact definition >
//       <Table.Header fullWidth>
//         <Table.Row>
//           <Table.HeaderCell />
//           <Table.HeaderCell value="qty">Qty.</Table.HeaderCell>
//           <Table.HeaderCell>Part</Table.HeaderCell>
//           <Table.HeaderCell>Attachement</Table.HeaderCell>
//           <Table.HeaderCell>Size</Table.HeaderCell>
//           <Table.HeaderCell>Price</Table.HeaderCell>
//           <Table.HeaderCell></Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>
//
// {cartList}
//
//
//
//       <Table.Footer fullWidth>
//         <Table.Row>
//           <Table.HeaderCell />
//           <Table.HeaderCell colSpan='2'>
//             <Label size="large">
//               Total Price:
//               <Label.Detail>$25</Label.Detail>
//             </Label>
//
//           </Table.HeaderCell>
//           <Table.HeaderCell>
//             Discount
//             <Input  fluid placeholder='amt %' size='small'/>
//           </Table.HeaderCell>
//           <Table.HeaderCell>
//             Labor
//             <Input fluid placeholder="hours"  size='small' />
//           </Table.HeaderCell>
//           <Table.HeaderCell>
//             <Button fluid icon labelPosition='right' primary size='small'>
//               Place Order
//             </Button>
//           </Table.HeaderCell>
//           <Table.HeaderCell>
//             <Button fluid icon labelPosition='right' primary size='small' onClick={deleteCart}>
//               Clear Cart
//             </Button>
//           </Table.HeaderCell>
//         </Table.Row>
//
//       </Table.Footer>
//     </Table>
//   )
// console.log(cart.attachment)
//   return (
//     <div>"hi"</div>
//   )
}

export default Cart
