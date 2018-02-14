import React from 'react'
import parts from '../partsData'
import PartShow from './partShow'

const PartList = (props) => {
  console.log(parts)

  const listedPart = parts.map(part => {
    return <PartShow key={part.id} part={part} />
  })

  return (
    <div>
      {listedPart}
    </div>
  )
}

export default PartList
