import React from 'react'
import styled, {css} from 'styled-components'
import colors from '../assets/colors.json'
import PropTypes from 'prop-types'
import findByType from './helper/findByType'

// initializes replica button
const Button = () => null;
Button.displayName = 'Button'

/**
 * Displays button group component
 * @param {Object} props - props pertainign to component 
 */
export default function ButtonGroup(props) {
    const { children, color, size, variant } = props;

    /**
     * Switches the type of button that will be displayed based off its variant prop
     * @returns { Component } - the styled component that corresponds to the variant
     */
    const renderButtons = () => {
        const buttons = findByType(children, Button);
        if (!buttons.length) return;

        let index = -1;
        return buttons.map(button => { 
            index ++; 
            switch (variant) {
                case ('outline') : return (
                    <OutlineButton
                     {...button.props}
                     key={Math.random()}
                     color={color}
                     size={size}
                     edgeType={button.length !== 1 ? !index ? 'left' : index === buttons.length-1 ? 'right' : 'middle' : 'all'}>
                         { button.props.children }
                    </OutlineButton>
                );
                case ('bubble') : return (
                    <BubbleButton
                     {...button.props}
                     key={Math.random()}
                     color={color}
                     size={size}
                     edgeType={button.length !== 1 ? !index ? 'left' : index === button.length-1 ? 'right' : 'middle' : 'all'}>
                        { button.props.children }
                    </BubbleButton>
                )
                default : return (
                    <DefaultButton 
                     {...button.props} 
                     key={Math.random()} 
                     color={color} 
                     size={size}
                     edgeType={button.length !== 1 ? !index ? 'left' : index === buttons.length-1 ? 'right' : 'middle' : 'all'}>
                        {button.props.children }
                    </DefaultButton>
                );
            }
            
        })
    }

    return (
        <CButtonGroup {...props}>
            { renderButtons() }
        </CButtonGroup>
    )
}

ButtonGroup.propTypes = {
    // is the size of the buttons
    size: PropTypes.string,
    // is the style of the button
    variant: PropTypes.string,
    // is the color of the buttons
    color: PropTypes.string,
}

ButtonGroup.defaultProps = {
    color: "default",
    size: "default",
    variant: "default"
}

/**
 * Adjusts size based on the size prop
 * @param {Object} props - props pertaining to the styled component 
 * @returns {String} - padding settings
 */
const adjustPadding = props => {
    switch (props.size) {
        case ('large') : return '10px 20px';
        case ('small') : return '5px 10px';
        default : return '7.5px 15px';
    }
}

/**
 * Determines which is the order of the buttons
 * @param {Object} props - props pertaining to the styled component
 * @returns {String} - border settings;
 */
const adjustBorderRadius = props => {
    switch (props.edgeType) {
        case ('right') : return '0 5px 5px 0';
        case ('left') : return '5px 0 0 5px';
        case ('all') : return '5px';
        default : return '0';
    }
}

/**
 * Adjusts text color based on the color prop
 * @param {Object} props - props pertaining to the styled component 
 * @returns {String} - style for text
 */
const adjustTextColor = props => {
    if (colors[props.color]) {
        return props.color === 'default' ? colors.default.color : colors[props.color].dark;
    } else {
        return colors.default.color;
    }
}

/**
 * Adjusts the border for default buttons
 * @param {Object} props - props pertaining to the styled component
 * @returns {String} = style for border
 */
const editDefaultBorder = props => {
    let borderColor = colors[props.color] ? colors[props.color].dark : colors.default.dark;
    if (props.edgeType === 'left' || props.edgeType === 'middle') return `1px solid ${borderColor}`;
    else return 'none';
}

/**
 * Determines the the border layout of the outline buttons
 * @param {Object} props - props pertaining to the styled component
 * @returns {String} - special template string containg css that is easily integrated to existing 
 * css in the styled component initialization 
 */
const adjustOultineBorder = props => {
    let borderColor = colors[props.color] ? colors[props.color].default : colors.default.default;
    switch (props.edgeType) {
        case ('left') : return css`
            border: 1px solid;
            border-radius: 5px 0 0 5px;`
        case ('middle') : return css`
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-right: 1px solid;
            border-left: none;
            border-radius: 0;`
        case ('right') : return css`
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-right: 1px solid;
            border-left: none;
            border-radius: 0 5px 5px 0;`
        default : return css`
            border: 1px solid;
            border-radius: 5px;`
    }
}


// styled components
const CButtonGroup = styled.div`
    
`
const DefaultButton = styled.button`
    padding: ${props => adjustPadding(props)};
    font-size: 1rem;
    background: ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
    color: ${props => colors[props.color] ? colors[props.color].color : colors.default.color};
    border: none;
    border-right: ${props => editDefaultBorder(props)};
    border-radius: ${props => adjustBorderRadius(props)};
    transition: background 300ms;
    cursor: pointer;
    outline: none;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].dark : colors.default.dark};
    }
`
const OutlineButton = styled.button`
    padding: ${props => adjustPadding(props)};
    font-size: 1rem;
    background: transparent;
    color: ${props => adjustTextColor(props)};
    ${props => adjustOultineBorder(props)};
    border-color: ${props => colors[props.color] ? colors[props.color].default : colors.default.default};
    cursor: pointer;
    transition: background 300ms;
    outline: none;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow}
    }
`
const BubbleButton = styled.button`
    padding: ${props => adjustPadding(props)};
    font-size: 1rem;
    color: inherit;
    border-radius: 100px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: background 300ms, color 300ms;
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color].glow : colors.default.glow};
        color: ${props => adjustTextColor(props)};
    }

`