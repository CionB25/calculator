import React from 'react'
import {Button} from 'semantic-ui-react'

const PartShow = ({part}) => {

  return (
    <div>
      <Button color="blue">{part.description}</Button>
    </div>
  )
}

export default PartShow
