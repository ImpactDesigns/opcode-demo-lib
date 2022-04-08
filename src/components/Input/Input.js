import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import errorCircle from '../../assets/icons/checkmark.svg'

const InputContainer = styled.div`
    position:relative;
    // border: 1px solid red;
`

const Label = styled.label`
    position:relative;
    margin-bottom: 8px;
    display: block;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    color: #586165;

    & > span {
        margin-left: 2px;
        color: #D45555;
    }
`

const StyledInput = styled.input`
    box-sizing: border-box;
    position:relative;
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
        font-weight: 400;

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

const HelperTextWrapper = styled.div`
    box-sizing: border-box;
    position:relative;
    margin: 4px 0px 0px 0px;
    display: flex;
    align-items: center;
    visibility: hidden;
    border: 1px dashed green;
`

const HelperText = styled.p`
    box-sizing: border-box;
    position:relative;
    margin: 0px 0px 0px 0px;
    display: inline;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    text-align: left;
    color: #59AF9B;
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
    required: false,
    blur: () => console.log('Blur fired')
}