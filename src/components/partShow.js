import React from 'react'
import {Button} from 'semantic-ui-react'

const PartShow = ({part, handlePart}) => {
  // console.log(part)
  return (
    <div>
      <Button color="blue" onClick={handlePart}>{part.description}</Button>
    </div>
  )
}

export default PartShow
