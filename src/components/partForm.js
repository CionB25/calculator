import React from 'react'
import {Header,Dropdown} from 'semantic-ui-react'

const PartForm = ({parts,handlePart}) => {

let partField

if (parts.length > 0) {

  const options = parts.map(part => {

    return {key: part.id,text: part.description ,value: part.description}
  })

   partField = <Dropdown fluid search selection placeholder="Select Part" options={options} onChange={handlePart}/>;
} else {
   partField = <Dropdown fluid search selection placeholder="Select Part"/>
}

  return (
    <div>
      {partField}
    </div>
  )
}

export default PartForm
