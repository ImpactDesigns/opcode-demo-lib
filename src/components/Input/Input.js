import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    border: 1px solid dodgerblue;
`

const Label = styled.label`
    display: block;
    font-family: sans-serif;
    border: 1px dashed green;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
`

export default function Input(props) {
  return (
      <InputContainer>
        <Label>Label</Label>
        <StyledInput placeholder={props.placeholder} />
      </InputContainer>
  )
}
