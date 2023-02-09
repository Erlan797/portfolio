import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons(props) {
  return (<>

    <Button variant={props.color} name={props.name} style={{width:'25%'}} onClick={props.onClick}>{props.element}</Button>

  </>
  )

}
