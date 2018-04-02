import React from 'react'
import PriceUpdate from './priceUpdate'
import { Button, Header, Input, Modal, Icon } from 'semantic-ui-react'

const ModPage = (props) => {

  if (props.size) {
    return   (<Modal trigger={<Button>Edit Price</Button>}>
        <Modal.Header>New Price: <Input/><PriceUpdate/></Modal.Header>
        <Modal.Content>

          <Modal.Description>
            <Header>Part: {props.part} - {props.attachment} - {props.size.sizeNumber}</Header>
            <p>Price: {props.size.price}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>)
  } else {
    return (
      <Modal/>
    )
  }
}

export default ModPage
