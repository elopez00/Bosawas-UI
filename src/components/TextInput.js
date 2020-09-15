import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors.json'
import PropTypes from 'prop-types'

/**
 * Text Input component
 * @param {Object} props - props pertaining to component 
 */
export default function TextInput(props) {
    // props 
    const { label, style, inputStyle, color } = props;

    // new props
    let newProps = {};

    // includes all props except style so that the user can style the container
    Object.keys(props)
        .filter(prop => !prop.includes('style'))
        .forEach(prop => newProps[prop] = props[prop]);
    
    return (
        <Label style={style} color={color}>{label.toUpperCase()}
            <CTextInput type="text" {...newProps} style={inputStyle}/>
        </Label>
    )
}

TextInput.propTypes = {
    /**
     * placeholder of text input
     */
    placeholder: PropTypes.string,
    /**
     * overall color theme of component
     */
    color: PropTypes.string,
    /**
     * disables component input
     */
    disabled: PropTypes.bool,
    /**
     * Label of text input
     */
    label: PropTypes.string,
    /**
     * Style of input
     */
    inputStyle: PropTypes.object
}

TextInput.defaultProps = {
    color: "blue",
    label: ""
}

const Label = styled.label`
    display: inline-flex;
    flex-direction: column;
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    background: transparent;
    color: ${props => colors[props.color] ? colors[props.color].default : colors.blue.default};
`
const CTextInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.default.dark};
    border-radius: 0px;
    font-size: 1rem;
    width: 100%;
    padding: 5px 1px;
    transition: border 300ms, background 300ms;
    &:focus {
        border-bottom: 1px solid ${props => colors[props.color] ? colors[props.color].default : colors.blue.default}
    }
    &:disabled {
        border-bottom: 1px solid #d9d9d9;
        background: rgb(5,5,5, 0.05)
    }
`