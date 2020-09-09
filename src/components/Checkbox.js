import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../assets/colors.json'

/**
 * This component displays the checkbox
 * @param {Object} props - props pertaining to component
 */
export default function Checkbox(props) {
    // props 
    const { color, labelStyle, label, disabled } = props;
    return (
        <Label color={color} style={labelStyle} disabled={disabled}>
            <CCheckbox type="checkbox" {...props}/>
            {label}
            <i className="material-icons">check</i>
        </Label>
    )
}

Checkbox.propsTypes = {
    /**
     * Disabled checkbox
     */
    disabled: PropTypes.bool
}

// styled components
const Label = styled.label`
    position: relative;
    width: auto;
    color: ${props => props.disabled ? "#6b6b6b" : "inherit" };
    transition: color 300ms;
    & > i {
        font-size: 1rem;
        position: absolute;
        top: 1px;
        left: 5px;
        display: none;
        cursor: pointer;
        color: ${props => colors[props.color] ? colors[props.color].color : colors.blue.color};
    }
    & input:checked ~ i {
        display: block;
    }
`
const CCheckbox = styled.input`
    -webkit-appearance: none;
	background: ${colors.default.default};
	padding: 9px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
    cursor: pointer;
    margin-right: 5px;
    transform: translateY(-2px);
    vertical-align: middle;
    outline: none;
    transition: background 100ms, border 300ms, color 100ms;
    &:hover {
        transition: background 200ms;
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.blue.glow}
    }
    &:active {
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.blue.intenseGlow}
    }
    &:checked:active {
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.blue.intenseGlow};
    }
    &:checked {
        background: ${props => colors[props.color] ? colors[props.color].default : colors.blue.default};
        color: ${props => colors[props.color] ? colors[props.color].color : colors.blue.color};
    }
    &:disabled {
        color: #6b6b6b;
        background: #d9d9d9;
        cursor: default;
    }
`