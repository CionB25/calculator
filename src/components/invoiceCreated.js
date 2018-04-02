import React from 'react'
import { Button, Modal } from 'semantic-ui-react'


const InvoiceCreated = (props) => (
  <Modal trigger={<Button color="blue" onClick={props.deleteCart}>Invoice</Button>}>
    <Modal.Header>Invoice Created!</Modal.Header>
  </Modal>
)

export default InvoiceCreated;
