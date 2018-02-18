import React from 'react'
import CartItem from './cartItem'
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react'

const Cart = ({cart}) => {


      // console.log(cart[0].attachment)
  //    const cartList = cart.map(item => {
  //      return (
  //     <Table.Body>
  //     //  <CartItem key={item.name} item={item}/>
  //     </Table.Body>
  //
  // })

  const cartList = cart.map(item => {

    return (<Table.Body>
      <CartItem key={item.name} item={item}/>
    </Table.Body>)
  })

  console.log(cartList)
  console.log(cart);
  return (
    <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Qty.</Table.HeaderCell>
          <Table.HeaderCell>Part</Table.HeaderCell>
          <Table.HeaderCell>Attachement</Table.HeaderCell>
          <Table.HeaderCell>Size</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

    {cartList}

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Add User
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default Cart
