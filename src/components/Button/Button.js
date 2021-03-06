import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { setButtonSyles } from './utils'

const ButtonWrapper = styled.div`
  width: ${props => props.width};
  position: relative;
  display: inline-block;
  cursor: pointer;
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
  cursor: pointer;
  text-transform: uppercase;

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
      <ButtonWrapper 
        className={className} 
        width={width}
        onClick={(e) => onclick(e)} 
      >
        <StyledButton
          type={'button'}
          background={background}
          color={color}
          border={border}
          activeBackground={activeBackground} 
        >{props.label}</StyledButton>
      </ButtonWrapper>
  )
}

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary'
  ]).isRequired,
  label: PropTypes.string.isRequired
}

Button.defaultProps = {
  buttonType: 'primary',
  label: 'Button'
}