import React from 'react'
import {Header, Dropdown} from 'semantic-ui-react'

const AttachmentForm = ({part,handleAttachment}) => {

  let attachmentField
  if (part.length > 0) {
    const options = part.map(part => {
      return {key: part.name, text: part.name, value: part.name}
    })

    attachmentField = <Dropdown fluid search selection options={options} placeholder="Select Attachment" onChange={handleAttachment}/>

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
