import React from 'react'
import SizeForm from './sizeForm'
import AttachmentForm from './attachmentForm'
import PartForm from './partForm'
import ModPage from './modPage'
import {Grid, Form, Divider} from 'semantic-ui-react'

const PriceReg = (props) => {

  const  part = props.partSelected
  const  attachment = props.attachment
  const  size = props.size
  return (
    <Grid>
      <Form>
      <h3>Edit Price</h3>
        <PartForm parts={props.parts} handlePart={props.handlePart}/>
        <AttachmentForm part={props.part} handleAttachment={props.handleAttachment}/>
        <SizeForm sizes={props.sizes} handleSize={props.handleSize}/>
      </Form>
      <Divider horizontally/>
      <ModPage part={part} attachment={attachment} size={size}/>
    </Grid>
  )
}

export default PriceReg
