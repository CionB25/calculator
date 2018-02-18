import React from 'react'
import {Button, Checkbox, Icon, Table, Divider} from 'semantic-ui-react'

const CartItem = ({item}) => {

console.log(item)
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox slider />
      </Table.Cell>
      <Table.Cell>1</Table.Cell>
      <Table.Cell>{item.attachment.name}</Table.Cell>
      <Table.Cell>{item.part.name}</Table.Cell>
      <Table.Cell>{item.size.name}</Table.Cell>
      <Table.Cell>{item.size.name}</Table.Cell>
    </Table.Row>
  )

}

export default CartItem

// <Table celled compact definition>
// <Table.Body>
//   <Table.Row>
//     <Table.Cell>Jill Lewis</Table.Cell>
//     <Table.Cell>May 11, 2014</Table.Cell>
//     <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
//     <Table.Cell>Yes</Table.Cell>
//   </Table.Row>
// </Table.Body>
// </Table>

// <Table.Header fullWidth>
//   <Table.Row>
//     <Table.HeaderCell />
//     <Table.HeaderCell>Qty.</Table.HeaderCell>
//     <Table.HeaderCell>Part</Table.HeaderCell>
//     <Table.HeaderCell>Attachement</Table.HeaderCell>
//     <Table.HeaderCell>Size</Table.HeaderCell>
//     <Table.HeaderCell>Date</Table.HeaderCell>
//   </Table.Row>
// </Table.Header>
