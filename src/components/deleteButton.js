import React from 'react'
import {Button} from 'semantic-ui-react'

const DeleteButton = (props) => {

const deleteItem  = props.deleteItem
const itemID = props.item

  return (
    <Button  content="delete" value={itemID} onClick={deleteItem}/>
  )
}

export default DeleteButton
