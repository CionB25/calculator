import React from 'react'
import {Dropdown, Header} from 'semantic-ui-react'

const SizeForm = ({sizes,handleSize}) => {

  let sizeField
  if (sizes.length > 0) {

    const options = sizes.map(item => {
      return {key: item.measurement, text: item.measurement, value: item.measurement}
    })

    sizeField = <Dropdown fluid search selection options={options} placeholder="Select Size"  onChange={handleSize}/>
  } else {
    sizeField = <Dropdown placeholder="loading..."/>;
  }

  return (
    <div>
      <Header>Size (in Inches)</Header>
      {sizeField}
    </div>
  )
}

export default SizeForm
