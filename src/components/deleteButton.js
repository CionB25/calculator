import React from 'react'
import {Button} from 'semantic-ui-react'

const DeleteButton = (props) => {

const cart = props.cart
const deleteItem  = props.deleteItem
const itemID = props.item

  const sayHi = (e) => {
    e.preventDefault()
    console.log('hi');
    // console.log(carts);
    // console.log(item);
    // console.log(e.target.value);
console.log(itemID);
    //   const gucci = cart.filter(eh => {
    //       return eh.name !== itemID
    //   })
    //   deleteItem(gucci)
      console.log(e.target.value);
    }
    // // console.log(props);
    console.log(deleteItem);
    // console.log(gucci);

    // console.log(deleteItem(gucci));



// cart.size.id

  return (
    <Button  content="delete" value={itemID} onClick={deleteItem}/>
  )
}

export default DeleteButton
