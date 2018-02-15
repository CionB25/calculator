import React from 'react'
import {Form, Select} from 'semantic-ui-react'

const DataForm = ({partInfo}) => {
const options = partInfo
const part = partInfo
console.log(partInfo)
// debugger



  let forField;
if (partInfo.length > 0) {
  forField = <Form.Select options={options} placeholder="Select Attachment"/>;
} else {
  forField= <Form loading  placeholder="loading..."/>;
}

  return (
    <div>
        {forField}
    </div>
  )
}

export default DataForm
