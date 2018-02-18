import React from 'react'
import {Dropdown, Header} from 'semantic-ui-react'

const SizeForm = ({sizes,handleSize}) => {

  let sizeField
  if (sizes.length > 0) {
    const arrOfKeys = sizes.map(size => {
      return Object.keys(size)
    })

    const keys = arrOfKeys.join().split(",")
    const options = keys.map(item => {
      return {key: item, text: item, value: item}
    })

    sizeField = <Dropdown fluid search selection options={options} placeholder="Select Size"  onChange={handleSize}/>
  } else {
    sizeField = <Dropdown loading  placeholder="loading..."/>;
  }

  return (
    <div>
      <Header>Size (in Inches)</Header>
      {sizeField}
    </div>
  )
}

export default SizeForm
