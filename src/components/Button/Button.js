import React from 'react'
import styled, { keyframes } from 'styled-components'
import { setButtonSyles } from './utils'

const ButtonWrapper = styled.div`
  width: ${props => props.width};
  position: relative;
  display: inline-block;
`

const buttonShadowAnimation = keyframes`
  from {
    top: 0px;
    left: 0px;
    box-shadow: 4px 4px 0px rgba(88, 97, 101, 0.3);
  }

  to {
    top: 4px;
    left: 4px;,
    box-shadow: none;
  }
`

const StyledButton = styled.button`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 10px 30px 10px 30px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  box-shadow: 4px 4px 0px rgba(88, 97, 101, 0.3);

  &:hover {
    top: 4px;
    left: 4px;
    box-shadow: none;
    animation: ${buttonShadowAnimation} 200ms ease-in-out;
  }

  &:active {
    background: ${props => props.activeBackground}
  }
`

export default function Button(props) {
  const { 
    onclick, 
    className,
  } = props
  
  const {
    width,
    background,
    activeBackground,
    color,
    border
  } = setButtonSyles(props.buttonType)

  return (
      <ButtonWrapper className={className} width={width}>
        <StyledButton
          type={'button'}
          background={background}
          color={color}
          border={border}
          activeBackground={activeBackground} 
          onClick={(e) => onclick(e)} 
        >{props.label}</StyledButton>
      </ButtonWrapper>
  )
}