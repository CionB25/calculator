import React from 'react'
import parts from '../partsData'
import DataForm from '../components/dataForm'
import PartList from '../components/partList'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: parts,
      currentPart: {},
      partInfo: [],
      attachments: [{
        description: "",
        attachments: []
      }],
      sizes: [],
      cart: []
    }
  }

  hashItOut = (e) => {
    // const newArray = parts.filter(item => {
    //     if (item.description === String(e.target.innerHTML)) {
    //       return item
    //     }
    //   })
    // const  newNew = newArray[0].attachments.map(item => {
    //     // return {key: item.name, items: item}
    //     return {key: item.name, text: item.name, value: item.name}
    //   })
    //
    // const current = parts.filter(part => {
    //   return part.description === String(e.target.innerHTML)
    // })
    // console.log(current)
    //
    // this.setState({
    //   partInfo: newNew,
    //   currentPart: current
    // })

    const part = parts.filter(part => {
          return part.description === String(e.target.innerHTML)
        })

    this.setState({
      currentPart: part
    })
  }

  handlePart = (e) => {
    e.preventDefault()
    this.hashItOut(e)
    // console.log(this.state.currentPart);
  }

  handleAttachment = (e) => {
    e.preventDefault()
    const partList = this.state.currentPart[0].attachments
    const selectedPart = partList.filter(part => {
      return part.name === String(e.target.innerText)
    })
    const sizes = selectedPart[0].sizes
    console.log(sizes);
    console.log(sizes[0])
    this.setState({
      sizes: sizes
    })
    // console.log(e.target.innerText);
  }




  render() {
    // console.log(this.state.partInfo)
    return (
      <div>
        <PartList parts={this.state.parts} handlePart={this.handlePart}/>
        <DataForm part={this.state.currentPart} sizes={this.state.sizes} handleAttachment={this.handleAttachment}/>
      </div>
    )
  }
}

export default CalculatorContainer
