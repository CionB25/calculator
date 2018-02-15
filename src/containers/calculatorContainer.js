import React from 'react'
import parts from '../partsData'
import DataForm from '../components/dataForm'
import PartList from '../components/partList'

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      parts: parts,
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
    const newArray = parts.filter(item => {
        if (item.description === String(e.target.innerHTML)) {
          return item
        }
      })

      // console.log(newArray[0].attachments)
    const  newNew = newArray[0].attachments.map(item => {
        return {key: item.name, text: item.name, value: item.name}
      })
      // console.log(newNew)
    // return {key: item.name, text: item.name, value: item.name}
    this.setState({
      partInfo: newNew
    })
  }

  handlePart = (e) => {
    e.preventDefault()
    this.hashItOut(e)
    // console.log(this.filterArray(parts,e))
    // console.log(e.target.innerHTML)
    // const pI = parts.filter(item => {
    //   return item.description === String(e.target.innerHTML)
    // })

    // this.setState({
    //   partInfo: parts.filter(item => {
    //     return item.description === String(e.target.innerHTML)
    //   })
    // })
  }

  render() {
    // console.log(this.state.partInfo)
    return (
      <div>
        <PartList parts={this.state.parts} handlePart={this.handlePart}/>
        <DataForm partInfo={this.state.partInfo}/>
      </div>
    )
  }
}

export default CalculatorContainer
