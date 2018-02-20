import React from 'react'
import {Button} from 'semantic-ui-react'

const DeleteButton = ({item}) => {

  const sayHi = (e) => {
    e.preventDefault()
    console.log('hi');
    console.log(Button);
    console.log(item);
  }

  return (
    <Button value={item} content="delete" onClick={sayHi}/>
  )
}

export default DeleteButton
