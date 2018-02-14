import React from 'react'
import {Button} from 'semantic-ui-react'

const PartShow = (props) => {
  console.log(props.part.description)
  // <Button>this.props</Button>
  return (
    <div>
      <Button>{props.description}</Button>
    </div>
  )
}

export default PartShow
