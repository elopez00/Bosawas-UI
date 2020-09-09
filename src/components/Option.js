import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors.json'
import PropTypes from 'prop-types'

/**
 * Option for dropdown menus 
 * @param {Object} props - props pertaining to object 
 */
export default function Option(props) {
    const { children } = props;
    return (
        <COption {...props}>{children}</COption>
    )
}

Option.propTypes = {
    // children must be string
    children: PropTypes.string.isRequired
}

// styled components
const COption = styled.span`
    display: block;
    padding: 8px;
    font-size: 1rem;
    transition: background 300ms;
    cursor: default;
    &:hover {
        background: ${colors.default.dark};
    }
`