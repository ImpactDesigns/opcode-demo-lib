import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import errorCircle from '../../assets/icons/checkmark.svg'
import { 
    black,
    red,
    blue,
    green,
    white
}  from '../../colors'
import '../../assets/styles.css'

const InputContainer = styled.div`
    position:relative;
`

const Label = styled.label`
    margin-bottom: 8px;
    color: ${black.base};

    & > span {
        margin-left: 2px;
        color: ${red.base};
    }
`

const StyledInput = styled.input`
    width: 100%;
    color: ${black.base};
    background: ${white.light};
    border: 2px solid ${black.light};

    &:not(:placeholder-shown) {
        font-weight: 400;
        border-color: ${black.base};
    }

    &:placeholder-shown {
        border-color: ${black.light}
    }

    &:hover {
        border-color: ${blue.light};
    }

    &:focus {
        border-color: ${blue.dark};
        outline: none;
    }
`

const HelperTextWrapper = styled.div`
    box-sizing: border-box;
    position:relative;
    margin: 4px 0px 0px 0px;
    display: flex;
    align-items: center;
    visibility: hidden;
`

const HelperText = styled.p`
    color: ${green.base};
`

const HelperTextIcon = styled.img`
    box-sizing: border-box;
    position:relative;
    margin: 0px 2px 0px 0px;
    height: 12px;
    display: inline;
`

export default function Input(props) {
    const [inputValue, setInputValue] = useState(null)

    const {
        type,
        label,
        id,
        classname,
        name,
        placeholder,
        disabled,
        required,
        blur
    } = props

    function handleInputChange(e) {
        const { value } = e.target
        setInputValue(() => value)
    }

    return (
        <InputContainer>
             {required ? <Label>{label}<span>*</span></Label> : <Label>{`${label}`}</Label>}
            <StyledInput 
                type={type}
                id={id}
                className={classname}
                name={name}
                placeholder={placeholder} 
                disabled={disabled}
                required={required}
                onChange={(e) => handleInputChange(e)}
                onBlur={() => blur(inputValue)}
            />
            <HelperTextWrapper>
                <HelperTextIcon src={errorCircle} alt={'invalid text icon'} />
                <HelperText>Helper text</HelperText>
            </HelperTextWrapper>
        </InputContainer>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'email'
    ]).isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool.isRequired,
    blur: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    label: 'Label',
    required: false
}