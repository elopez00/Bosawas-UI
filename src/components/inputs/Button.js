import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../assets/colors.json'

/**
 * Primary button component
 * @param {Object} props - props pertaining to component 
 */
export default function Button(props) {
    // props 
    const { variant, disabled, onClick, children } = props;

    /**
     * Switches the type of button that will be displayed based off its variant prop
     * @returns { Component } - the styled component that corresponds to the variant
     */
    const switchVariants = () => {
        switch (variant) {
            case ('bubble') : return (
                <BubbleButton {...props} onClick={!disabled && onClick}>
                    { children }
                </BubbleButton>
            );
            default : return (
                <StandardButton {...props} onClick={!disabled && onClick}>
                    { children }
                </StandardButton>
            );
        }
    }

    return (
        <React.Fragment>
            { switchVariants() }
        </React.Fragment>
    )
}

Button.propTypes = {
    // needs to have some kind of content
    children: PropTypes.any.isRequired,
    // is the style of the button
    variant: PropTypes.string,
    // is the color of the button
    color: PropTypes.string,
    // size of button
    size: PropTypes.string,
    // gives button the ability to redirect to link
    href: PropTypes.string,
    // on click function
    onClick: PropTypes.func,
}

Button.defaultProps = {
    color: "default",
    variant: "standard",
    size: "standard"
}

// styled components
const StandardButton = styled.button`
    background: ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
    color: ${props => colors[props.color] ? colors[props.color].color : colors.default.color};
    font-size: 1rem;
    padding: ${props => {
        switch (props.size) {
            case ('large') : return '10px 20px';
            case ('small') : return '5px 10px';
            default : return '7.5px 15px';
        }
    }};
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: background 300ms, box-shadow 300ms;
    box-shadow: 0 0 0 0 transparent;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].dark : colors.default.dark};
    }
    &:focus {
        box-shadow: 0 0 0 3px ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow};
    }
    &:disabled {
        color: #6b6b6b;
        background: #d9d9d9;
        cursor: default;
    }
`
const BubbleButton = styled.button`
    background: transparent;
    color: inherit;
    font-size: 1rem;
    border: none;
    border-radius: 100px;
    padding: ${props => {
        switch (props.size) {
            case('large') : return '7.5px 20px';
            case('small') : return '5px 10px';
            default : return '7.5px 15px';
        }
    }};
    outline: none;
    border-radius: 100px;
    cursor: pointer;
    transition: background 300ms;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow}; 
    }
    &:focus {
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.default.intenseGlow}
    }
    &:disabled {
        color: #6b6b6b;
        cursor: default;
        &:hover {
            background: transparent;
        }
    }
`
