import React from 'react'
import { Input } from './Input.component.style'

export default function InputComponent({type, placeHoleder}: any) {
  return (
    <Input type={type} placeholder={placeHoleder} />
  )
}
