import React from 'react'
import {Form, Container} from 'semantic-ui-react'

const DataForm = ({part,sizes,handleAttachment}) => {
  //
  // let attachmentField
  // if (part.length > 0) {
  //   // console.log(part[0].attachments)
  //   const options = part[0].attachments.map(part => {
  //     return {key: part.name, text: part.name, value: part.name}
  //   })
  //   console.log(part[0])
  //   attachmentField = <Form.Select options={options} placeholder="Select Attachment" onChange={handleAttachment} />;
  // } else {
  //   attachmentField = <Form loading  placeholder="loading..."/>;
  // }
  //
  // let sizeField
  // if (sizes.length > 0) {
  //   const arrOfKeys = sizes.map(size => {
  //     return Object.keys(size)
  //   })
  //
  //   const keys = arrOfKeys.join().split(",")
  //   const options = keys.map(item => {
  //     return {key: item, text: item, value: item}
  //   })
  //
  // console.log(options)
  //   sizeField = <Form.Select options={options} placeholder="Select Size"  />
  // } else {
  //   sizeField = <Form loading  placeholder="loading..."/>;
  // }
//   <Menu>
//     <Label>
//       <Icon name='usd'/>
//       USD
//       <Label.Detail>25</Label.Detail>
//     </Label>
//     <Form.Field label='Last name' placeholder='Last name' />
//   </Menu>
//   // <Form.Group>
//   //   {attachmentField}
//   //   {sizeField}
//   // <Form.Group/>
//   // <Menu>
//     // <Button>Thing</Button>
//     // <Button>Thing</Button>
//     // <Button>Thing</Button>
//     // <Button>Thing</Button>
//     // <Form.Input/>
//     // <Label>
//     //   <Icon name="usd"/>
//     // <Label/>
//   // <Menu/>
// // </div>
  return (
    <div>
      <Form.Group>
        
      </Form.Group>
    </div>
  )
}

export default DataForm
