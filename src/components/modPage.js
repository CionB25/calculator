import React from 'react'
import { Button, Header, Input, Modal } from 'semantic-ui-react'

const ModPage = (props) => {
  console.log(props)
  if (props.size) {
    return   (<Modal trigger={<Button>Edit Price</Button>}>
        <Modal.Header>New Price: <Input/></Modal.Header>
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

// <Modal.Header>Update: <Input/></Modal.Header>
// <Modal.Content >
//   <Modal.Description>
//     <Header>Part:{props.part} Attachment:{props.attachment} Size:{props.size.measurement}</Header>
//     <Header>Default Profile Image</Header>
//     <Header>Default Profile Image</Header>
//   </Modal.Description>
// </Modal.Content>
