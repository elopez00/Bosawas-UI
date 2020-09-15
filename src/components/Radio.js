import React from 'react';
import styled from 'styled-components'
import colors from '../assets/colors.json'
import PropTypes from 'prop-types'

/**
 * Component for the Radio input
 * @param {Object} props - props pertaining to the component 
 */
export default function Radio(props) {
    // props 
    const { label, disabled } = props; 
    return (
        <Label disabled={disabled}>
            <CRadio type="radio" {...props} />
            <div>{label}</div>
        </Label>
    )
}
Radio.propTypes = {
    // the group which the radio belongs to
    name: PropTypes.string,
    // boolean determining a default check in the radio
    defaultChecked: PropTypes.bool,
    // disables component
    disabled: PropTypes.bool
}

Radio.defaultProps = {
    background: "default",
    size: "default"
}

// styled components
const Label = styled.label`
    display: inline-flex;
    & > div {
        transform: translateY(2px)
    }
    color: ${props => props.disabled ? "#6b6b6b" : "inherit"};
`

const CRadio = styled.input`
    -webkit-appearance: none;
    vertical-align: -4px;
    margin-right: 5px;
    background: ${colors.default.default};
    padding: 8px;
    border-radius: 50%;
    outline: none;
    position: relative;
    cursor: pointer;
    &:hover {
        transition: background 300ms;
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.blue.glow }
    }
    &:active {
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.blue.intenseGlow}
    }
    &:checked {
        background: ${props => colors[props.color] ? colors[props.color].default : colors.blue.default}
    }
    &:checked:after {
        content: '';
        position: absolute;
        padding: 4px;
        background: white;
        top: 4px;
        left: 4px;
        border-radius: 50%;
    }
    &:disabled {
        color: #6b6b6b;
        background: #d9d9d9;
        cursor: default;
    }
`