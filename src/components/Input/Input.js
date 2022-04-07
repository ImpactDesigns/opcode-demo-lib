import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    // width: 300px;
    // border: 1px solid dodgerblue;
`

const Label = styled.label`
    margin-bottom: 8px;
    display: block;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #586165;
    // border: 1px dashed green;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 8px 16px 8px 16px;
    width: 100%;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #586165;
    border: 2px solid #D8D4CF;

    &:not(:placeholder-shown) {
        color: #514F4B;
        border-color: #514F4B;
    }

    &:placeholder-shown {
        color: #D8D4CF;
        border-color: #D8D4CF
    }

    &:hover {
        border-color: #859EEC;
    }

    &:focus {
        border-color: #334FA9;
        outline: none;
    }
`



export default function Input(props) {
  return (
      <InputContainer>
        <Label>Label</Label>
        <StyledInput 
            placeholder={props.placeholder} 
        />
      </InputContainer>
  )
}