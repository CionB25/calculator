import React from 'react'
// import parts from '../partsData'
import PartShow from './partShow'

const PartList = ({parts, handlePart}) => {
// console.log(parts, handlePart)
  const listedPart = parts.map(part => {
    return <PartShow key={part.id} part={part} value={part.description} handlePart={handlePart}/>
  })

  return (
    <div>
      {listedPart}
    </div>
  )
}

export default PartList
