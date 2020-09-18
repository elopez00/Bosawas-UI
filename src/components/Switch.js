import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors.json'
import PropTypes from 'prop-types'
import determineTheme from './helper/determineTheme'

/**
 * UI Switch Component
 * @param {Object} props - object pertaining to component
 */
export default function Switch(props) {
    // props 
    const { label } = props;

    return (
        <Label>
            <CSwitch type="checkbox" {...props} />
            { label }
        </Label>
    )
}

Switch.propTypes = {
    /** Label for the switch */
    label: PropTypes.string,
    /** Color of the switch */
    color: PropTypes.string,
    /** Size of the switch */
    size: PropTypes.string,
    /** disables switch from recieving input */
    disabled: PropTypes.bool
}

Switch.defaultProps = {
    size: "default",
    color: "default",
    label: ""
}

const Label = styled.label`
    position: relative;
    width: auto;
    color: ${props => props.disabled ? "#6b6b6b" : "inherit" };
    transition: color 300ms;
    display: inline-flex;
    align-items: center;
`
const CSwitch = styled.input`
    -webkit-appearance: none;
    background: ${colors.default.default};
    width: 30px;
    height: 18px;
    border-radius: 100px;
    position: relative;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
    &::after {
        transition: background 300ms, box-shadow 300ms, margin 300ms;
        content: "";
        box-shadow: 0 0 0 0px transparent;
        top: 0;
        left: 0;
        position: absolute;
        height: 18px;
        width: 18px;
        border-radius: 100%;
        background: ${colors.default.dark};
    }
    &:active {
        &::after {
            background: ${props => determineTheme(props.color).dark}
        }
    }
    &:checked:active {
        &::after {
            background: ${props => determineTheme(props.color).dark};
        }
    }
    &:checked {
        &::after {
            margin-left: 13px;
            background: ${props => props.color !== 'default' ? determineTheme(props.color).default : colors.default.dark}
        }
    }
    &:checked:focus {
        &::after {
            box-shadow: 0 0 0 5px ${props => determineTheme(props.color).glow};
        }
    }
    &:focus {
        &::after {
            box-shadow: 0 0 0 5px ${props => determineTheme(props.color).intenseGlow}
        }
    }
    &:checked:hover {
        &::after {
            box-shadow: 0 0 0 5px ${props => determineTheme(props.color).glow};
        
        }
    }
    &:hover {
        &::after {
            box-shadow: 0 0 0 5px ${props => determineTheme(props.color).intenseGlow}
        }
    }
`