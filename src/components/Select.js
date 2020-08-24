import React, { Component } from 'react'
import styled from 'styled-components'
import findByType from './helper/findByType'
import colors from '../assets/colors.json'
import { Button } from './'
import PropTypes from 'prop-types'

/**
 * Select component
 * @param {Object} props - props pertaining to the object
 */
class Select extends Component {
    // state 
    state = {
        menuHeight: 0,
        menuOpen: false,
        overflow: false,
        selected: ""
    }
    
    // references
    select = React.createRef();
    menu = React.createRef();

    /**
     * adds event listener that checks if mouse press occurrs outside menu
     */
    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
        this.setState({menuHeight: this.menu?.current?.scrollHeight});
    }   

    /**
     * removes the event listener before component unmounts
     */
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick)
    }

    /**
     * handles click outside of the select menu
     * @param {Object} event - mousedown event 
     */
    handleOutsideClick = event => {
        const { overflow } = this.state;
        if (this.select?.current && !this.select?.current?.contains(event.target)) {
            this.setState({menuOpen: false});
            overflow && this.setState({overflow: false})
        }
    }

    /**
     * handles button click
     */
    handleClick = () => {
        const { buttonClick } = this.props;
        const { menuOpen, overflow } = this.state;
        buttonClick && buttonClick();
        this.setState({menuOpen: !menuOpen});
        if (!overflow) {
            setTimeout(() => this.setState({overflow: !overflow}), 300)
        } else {
            this.setState({overflow: !overflow});
        }
    }

    /**
     * Handles the onClick functionality for the Option subcomponent
     * @param {Object} props - props pertaining to Option subcomponent 
     */
    handleOptionClick = props => {
        const { onClick, children } = props;
        const { menuOpen } = this.state;
        onClick && onClick();
        this.setState({
            selected: children, 
            menuOpen: !menuOpen,
            menuHeight: this.menu.current.scrollHeight
        })
    }

    /**
     * Options for the select menu
     * @returns {Component} - Option styled component rendered in select menu
     */
    renderOptions = () => {
        const { children } = this.props;
        const options = findByType(children, Option);
        if (!options.length) return;

        return options.map(option => (
            <COption key={Math.random()} {...option.props} onClick={() => this.handleOptionClick(option.props)}>
                {option.props.children}
            </COption>
        ));
    }
    
    render() {
        const { placeholder, color, variant, size } = this.props;
        const { menuHeight, menuOpen, overflow, selected } = this.state;

        return (
            <CSelect 
             height={menuHeight} 
             open={menuOpen} 
             ref={this.select}  
             {...this.props}>
                <Button color={color} onClick={this.handleClick} variant={variant} size={size}>
                    {!selected.length ? placeholder || "Select..." : selected}
                    <i className="material-icons">keyboard_arrow_down</i>
                </Button>
                <Options 
                 height={menuHeight} 
                 open={menuOpen} 
                 ref={this.menu} 
                 menuOverflow={overflow}
                 id="bosawas-ui-menu-options">
                    { this.renderOptions() }
                </Options>
            </CSelect>
        )
    }
}

/**
 * Option subcomponent initialization
 */
const Option = () => null;
Option.displayName = "Select.Option";
Select.Option = Option;

Select.propTypes = {
    // width of select button
    width: PropTypes.string,
    // height of select button
    size: PropTypes.string,
    // sets the button click property
    buttonClick: PropTypes.func
}

Select.Option.propTypes = {
    // children must be string
    children: PropTypes.string.isRequired
}

Select.defaultProps = {
    size: "default",
    color: "default",
    width: "default",
    variant: "default"
}

export default Select;

// styled component
const CSelect = styled.div`
    position: relative;
    display: inline-block;
    width: inherit;
    & button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: auto;
        text-align: left;
        width: ${props => {
            switch (props.width) {
                case ("large") : return "200px";
                case ("small") : return "100px";
                default : return "150px"
            }
        }};
    }
    & button > i {
        transition: transform 300ms;
        margin-left: 5px;
        transform: ${props => props.open ? 'rotate(180deg)' : 0};
    }
    & button:focus + div {
        height: ${props => props.open ? props.height : 0}px;
    }
`
const Options = styled.div`
    display: inline-block;
    overflow: ${props => props.menuOverflow ? 'auto' : 'hidden'};
    position: absolute;
    top: 110%;
    left: 0;
    min-width: auto;
    height: ${props => props.open ? props.height : 0};
    transition: height 300ms;
    max-height: ${props => props.maxHeight || 500}px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
`
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