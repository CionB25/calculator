import React from 'react'
import {Header,Dropdown} from 'semantic-ui-react'

const PartForm = ({parts, handlePart}) => {
// console.log(parts, handlePart)

const options = parts.map(part => {
  return {key: part.description,text: part.description ,value: part.description}
})

const partField = <Dropdown fluid search selection placeholder="Select Part" options={options} onChange={handlePart} />;
  // const listedPart = parts.map(part => {
  //   return <PartShow key={part.id} part={part} value={part.description} handlePart={handlePart}/>
  // })

  return (
    <div>
    <Header>Select Part Option</Header>
      {partField}
    </div>
  )
}

export default PartForm
