import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../assets/colors.json'

/**
 * Primary button component
 * @param {Object} props - props pertaining to component 
 */
export default function Button(props) {
    // props 
    const { variant, disabled, onClick, children, href } = props;

    /**
     * Switches the type of button that will be displayed based off its variant prop
     * @returns { Component } - the styled component that corresponds to the variant
     */
    const switchVariants = () => {
        switch (variant) {
            case ('bubble') : return (
                <BubbleButton {...props} onClick={!disabled ? onClick : null}>
                    { children }
                </BubbleButton>
            );
            case ('outline') : return (
                <OutlineButton {...props} onClick={!disabled ? onClick : null}>
                    { children }
                </OutlineButton>
            )
            default : return (
                <DefaultButton {...props} onClick={!disabled ? onClick : null}>
                    { children }
                </DefaultButton>
            );
        }
    }

    return (
        <React.Fragment>
            { href ? <a href={!props.disabled ? href : null}>{switchVariants()}</a> : switchVariants() }
        </React.Fragment>
    )
}

Button.propTypes = {
    /**
     * needs to have some kind of content
     */
    children: PropTypes.any.isRequired,
    /**
     * overall style of the button  
     */ 
    variant: PropTypes.string,
    /**
     * overall color of the button  
     */ 
    color: PropTypes.string,
    /**
     * size of the button
     */
    size: PropTypes.string,
    /**
     * link that the button will redirect to
     */
    href: PropTypes.string,
    /**
     * handles button click
     */
    onClick: PropTypes.func,
    /**
     * disables button input
     */
    disabled: PropTypes.bool
}

Button.defaultProps = {
    color: "default",
    variant: "default",
    size: "default"
}

/**
 * Adjusts size based on the size prop
 * @param {Object} props - props pertaining to the styled component 
 */
const adjustPadding = props => {
    switch (props.size) {
        case ('large') : return '10px 20px';
        case ('small') : return '5px 10px';
        default : return '7.5px 15px';
    }
}

/**
 * Adjusts text color based on the color prop
 * @param {Object} props - props pertaining to the styled component 
 */
const adjustTextColor = props => {
    if (colors[props.color]) {
        return props.color === 'default' ? colors.default.color : colors[props.color].dark;
    } else {
        return colors.default.color;
    }
}

// styled components
const DefaultButton = styled.button`
    background: ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
    color: ${props => colors[props.color] ? colors[props.color].color : colors.default.color};
    font-size: 1rem;
    padding: ${props => adjustPadding(props)};
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: background 300ms, box-shadow 150ms;
    box-shadow: 0 0 0 0 transparent;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].dark : colors.default.dark};
    }
    &:active {
        box-shadow: 0 0 0 3px ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow};
    }
    &:disabled {
        color: #6b6b6b;
        background: #d9d9d9;
        cursor: default;
    }
`
const OutlineButton = styled.button`
    background: transparent;
    color: ${props => adjustTextColor(props)};
    font-size: 1rem;
    border-radius: 5px;
    padding: ${props => adjustPadding(props)};
    border: 1px solid ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
    outline: none;
    transition: background 300ms, color 300ms, border 300ms;
    cursor: pointer;
    &:hover {
        border: 1px solid ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow};
        color: ${props => adjustTextColor(props)};
    }
    &:active {
        border: 1px solid ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.default.intenseGlow};
        color: ${props => {
            if (colors[props.color]) {
                return props.color === 'default' ? colors.default.color : colors[props.color].dark;
            } else {
                return colors.default.color;
            }
        }};
    }
    &:disabled {
        color: ${colors.default.dark};
        border: 1px solid ${colors.default.default};
        cursor: default;
        &:hover {
            border: 1px solid ${colors.default.default};
            background: transparent;
        }
    }
`
const BubbleButton = styled.button`
    background: transparent;
    color: inherit;
    font-size: 1rem;
    border: none;
    border-radius: 100px;
    padding: ${props => adjustPadding(props)};
    outline: none;
    border-radius: 100px;
    cursor: pointer;
    transition: background 300ms, color 300ms;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow}; 
        color: ${props => adjustTextColor(props)};
    }
    &:active {
        background: ${props => colors[props.color] ? colors[props.color].intenseGlow : colors.default.intenseGlow};
        color: ${props => adjustTextColor(props)};
    }
    &:disabled {
        color: #6b6b6b;
        cursor: default;
        &:hover {
            background: transparent;
        }
    }
`