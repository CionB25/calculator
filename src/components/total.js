import React from 'react'
import PartForm from './partForm'
import AttachmentForm from './attachmentForm'
import SizeForm from './sizeForm'
import AddCartButton from './addCartButton'
import Cart from './cart'
import {Grid, Container} from 'semantic-ui-react'

class Total extends React.Component {


  constructor() {
    super()

    this.state = {
      total: ""
    }
  }

  // componentDidMount() {
  //   const cart = this.props.cart
  //   console.log(this.props.cart)
  //
  //       if (cart.length > 0) {
  //       console.log(cart)
  //
  //       const priceArr = cart.map(price => {
  //         return Object.values(price)[3]['price']
  //       })
  //
  //       const priceFloats = priceArr.map(price => {
  //         return parseFloat(price)
  //       })
  //
  //        this.setState({
  //          total: String(priceFloats.reduce((a,b) => a + b, 0))
  //        })
  //      }
  //    }


    //  handleQty = (e) => {
    //    e.preventDefault()
    //    console.log(e.target.value)
    //    this.setState({
    //      qty: e.target.value
    //    })
    //  }
     //
    //  handleDiscount = (e) => {
    //    e.preventDefault()
    //    console.log(e.target.value)
    //    this.setState({
    //      discount: e.target.value
    //    })
    //  }
     //
    //  handleLabor = (e) => {
    //    e.preventDefault()
    //    console.log(e.target.value)
    //    this.setState({
    //      labor: e.target.value
    //    })
    //  }
     //
    //  handleDelete = (e) => {
    //    e.preventDefault()
    //    console.log('hi');
    //  }


   handleTotalQty = (e) => {
     e.preventDefault()
     console.log(this.state.total)
   }

   handleTotalLabel = (e) =>  {
     e.preventDefault()
     console.log(this.state.total)
   }

  //  handleTotalDiscount = (e) =>  {
  //    e.preventDefault()
  //   //  const yea = String(e.target.value)
  //   //  const nah = this.state
  //    console.log(yea)
  //    console.log(nah);
  //    console.log("YOOOOOOOOOOOOOOOOO")
  //  }

  whenLoaded = () => {
    console.log("naaaaaah")
    console.log("YOOOOOOOOOOOOOOOOO")
    // console.log(thing);
    // const cart = this.props.cart
    //
    // const priceArr = cart.map(price => {
    //   return Object.values(price)[3]['price']
    // })
    //
    // const priceFloats = priceArr.map(price => {
    //   return parseFloat(price)
    // })

// console.log(priceFloats)
    // this.setState({
    //   total: thing
    // })
  }


  render() {
    console.log(this.props.check);
    return (
      <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Container>
        <PartForm parts={this.props.parts} handlePart={this.props.handlePart}/>
        <AttachmentForm part={this.props.part} handleAttachment={this.props.handleAttachment}/>
        <SizeForm sizes={this.props.sizes} handleSize={this.props.handleSize} />

        </Container>
        <AddCartButton price={this.props.sizeInfo} check={this.props.check} handleAddCart={this.props.handleAddCart}/>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Cart cart={this.props.cart} deleteCart={this.props.handleDeleteCart} deleteItem={this.props.handleDeleteItemFromCart}
        handleTotalQty={this.handleTotalQty} handleTotalLabel={this.handleTotalLabel} handleTotalDiscount={this.handleTotalDiscount}
        whenLoaded={this.whenLoaded}/>
      </Grid.Column>
      </Grid>
    )
  }
}

export default Total
// for partForm -> parts={this.props.parts} handlePart={this.props.handlePart}
// for attachement -> part={this.props.part} handleAttachment={this.props.handleAttachment}
// for size -> sizes={this.props.sizes} handleSize={this.props.handleSize}
// for AddCartButton -> price={this.props.sizeInfo} check={this.props.currentSize} handleAddCart={this.props.handleAddCart}
// for cart={this.props.cart} deleteCart={this.props.handleDeleteCart} deleteItem={this.props.handleDeleteItemFromCart}
//
// parts={this.state.partObj} handlePart={this.handlePart}
// part={this.state.currentPart.attachments} handleAttachment={this.handleAttachment}
// SizeForm sizes={this.state.sizes} handleSize={this.handleSize}
// price={this.state.sizeInfo} check={this.state.currentSize} handleAddCart={this.handleAddCart}
// cart={this.state.cart} deleteCart={this.handleDeleteCart} deleteItem={this.handleDeleteItemFromCart}
//
// <Grid.Column mobile={16} tablet={8} computer={4}>
//   <Container>
//   <PartForm parts={this.props.parts} handlePart={this.props.handlePart}/>
//   <AttachmentForm part={this.props.part} handleAttachment={this.props.handleAttachment}/>
//   <SizeForm sizes={this.props.sizes} handleSize={this.props.handleSize} />
//
//   </Container>
//   <AddCartButton price={this.props.sizeInfo} check={this.props.currentSize} handleAddCart={this.props.handleAddCart}/>
// </Grid.Column>
//
// <Grid.Column mobile={16} tablet={8} computer={4}>
//   <Cart cart={this.props.cart} deleteCart={this.props.handleDeleteCart} deleteItem={this.props.handleDeleteItemFromCart}/>
// </Grid.Column>
