import React from 'react'
import {Form} from 'semantic-ui-react'

const DataForm = ({part,sizes,handleAttachment}) => {

let attachmentField
if (part.length > 0) {
  // console.log(part[0].attachments)
  const options = part[0].attachments.map(part => {
    return {key: part.name, text: part.name, value: part.name}
  })
  console.log(part[0])
  attachmentField = <Form.Select options={options} placeholder="Select Attachment" onChange={handleAttachment} />;
} else {
  attachmentField = <Form loading  placeholder="loading..."/>;
}

let sizeField
if (sizes.length > 0) {
  const arrOfKeys = sizes.map(size => {
    return Object.keys(size)
  })

  const keys = arrOfKeys.join().split(",")
  const options = keys.map(item => {
    return {key: item, text: item, value: item}
  })

console.log(options)
  sizeField = <Form.Select options={options} placeholder="Select Size"  />
} else {
  sizeField = <Form loading  placeholder="loading..."/>;
}


  return (
    <div>
      <Form.Group>
      {attachmentField}
      {sizeField}
        <Form.Field placeholder="loading...">
          <input placeholder='First Name' />
        </Form.Field>
      </Form.Group>
    </div>
  )
}

export default DataForm
