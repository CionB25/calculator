import React from 'react'
import DeleteButton from './deleteButton'
import {compressedArray, filteredArray} from './functions'
import {Button, Checkbox, Icon, Table, Input, Divider, Label} from 'semantic-ui-react'

const Cart = ({cart}) => {

  const carts = compressedArray(cart)
  const newBiz = filteredArray(cart,carts)

  const handleQty = (e) => {
    e.preventDefault()
    console.log("hi")
    console.log(e.target.value);
    console.log(e.target);
    console.log(e);
    console.log(newBiz);
  }

  let cartList
  let dButton = <DeleteButton/>

  if (cart.length > 0) {
    cartList = newBiz.map(item => {
      let i = 0
    console.log(item)
    //  return (<Table.Body key={item.attachment} >
    //    <CartItem key={item.attachment} item={item}/>
    //  </Table.Body>)
    return (<Table.Body><Table.Row><Table.Cell collapsing></Table.Cell>
      <Table.Cell key={item[0].value}><Input type={item[1].value}placeholder={item[1].count} key={item} size='mini'onChange={handleQty} /></Table.Cell>
      <Table.Cell key={item[0].part.name}>{item[0].part.name}</Table.Cell>
      <Table.Cell key={item[0].attachment.name}>{item[0].attachment.name}</Table.Cell>
      <Table.Cell key={item[0].size.name}>{item[0].size.sizeNumber}</Table.Cell>
      <Table.Cell key={item[0].size.price.price}>${item[0].size.price.price}</Table.Cell>
      <Table.Cell key={++i}>{dButton}</Table.Cell>
      </Table.Row></Table.Body>)
   })
  }

  // <Table.Cell>{item[1].count}</Table.Cell>
  // <Table.Cell>{item[0].attachment.name}</Table.Cell>
  // <Table.Cell>{item[0].part.name}</Table.Cell>
  // <Table.Cell>{item[0].size.name}</Table.Cell>
  // <Table.Cell>{item[0].size.name}</Table.Cell>
  console.log(cartList)
  console.log(cart);
  return (
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
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default Cart
