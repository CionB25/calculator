import React from 'react'
import {Header, Dropdown} from 'semantic-ui-react'

const AttachmentForm = ({part,handleAttachment}) => {
console.log(part);
  let attachmentField
  if (part.length > 0) {
console.log(part)
    const options = part.map(part => {
      return {key: part.name, text: part.name, value: part.name}
    })

    attachmentField = <Dropdown fluid search selection options={options} placeholder="Select Attachment" onChange={handleAttachment}/>
    // attachmentField = <Form.Select options={options}  />;
  } else {
    attachmentField = <Dropdown placeholder="loading..."/>;
  }

  return (
    <div>
      <Header>Select Attachment</Header>
      {attachmentField}
    </div>
  )
}

export default AttachmentForm
