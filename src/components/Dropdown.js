import React, { Component } from 'react'
import { Button as CButton, Option as COption } from './'
import styled from 'styled-components'
import findByType from './helper/findByType'
import PropTypes from 'prop-types'
import colors from '../assets/colors.json'

// initializes replica Option
const Option = () => null;
Option.displayName = "Option";

// initializes replica Button
const Button = () => null;
Button.displayName = "Button";

class Dropdown extends Component {
    // state
    state = {
        menuHeight: 0,
        menuOpen: false,
        overflow: false
    }

    // references
    dropdown = React.createRef();
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
     * handles click outside of the dropdown menu
     * @param {Object} event - mousedown event 
     */
    handleOutsideClick = event => {
        const { overflow } = this.state;
        if (this.dropdown?.current && !this.dropdown?.current?.contains(event.target)) {
            this.setState({menuOpen: false});
            overflow && this.setState({overflow: false})
        }
    }

    /**
     * handles button click
     * @param {Object} props - props pertaining to the Button subcomponent
     */
    handleClick = props => {
        const { menuOpen, overflow } = this.state;
        props.onClick && props.onClick();
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
        const { onClick } = props;
        const { menuOpen } = this.state;
        onClick && onClick();
        this.setState({
            overflow: false,
            menuOpen: !menuOpen,
            menuHeight: this.menu.current.scrollHeight
        })
    }

    /**
     * Renders Dropdown button
     * @returns {Component} - DropdownButton
     */
    renderButton = () => {
        const { children } = this.props;
        const { menuOpen } = this.state;
        const button = findByType(children, Button)[0];
        if (!button) return;

        return <CButton {...button.props} onClick={() => this.handleClick(button.props)}>
            {button.props.children}
            <Carat open={menuOpen}>
                <i className="material-icons">keyboard_arrow_down</i>
            </Carat>
        </CButton>
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
            <COption 
             key={Math.random()} 
             {...option.props} 
             onClick={() => this.handleOptionClick(option.props)}>
                { option.props.children }
            </COption>
        ));
    }

    render() {
        const { menuHeight, menuOpen, overflow } = this.state;
        return (
            <CDropdown
             height={menuHeight} 
             open={menuOpen} 
             ref={this.dropdown}  
             {...this.props}>
                { this.renderButton() }
                <Options 
                 height={menuHeight} 
                 open={menuOpen} 
                 ref={this.menu} 
                 menuOverflow={overflow}>
                    { this.renderOptions() }
                </Options>
            </CDropdown>
        )
    }
}

export default Dropdown;

// styled components
const CDropdown = styled.div`
    display: inline-block;
    position: relative;
    & > button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
const Carat = styled.a`
    display: inline-block;
    display: flex;
    align-items: center;
    transform: translate(6px);
    & i {
        transition: transform 300ms;
        transform: ${props => props.open ? 'rotate(180deg)' : 0};
    }
`
const Options = styled.div`
    display: inline-block;
    overflow: ${props => props.menuOverflow ? 'auto' : 'hidden'};
    position: absolute;
    top: 110%;
    left: 0;
    min-width: auto;
    width: 100%;
    height: ${props => props.open ? props.height : 0}px;
    transition: height 300ms;
    max-height: ${props => props.maxHeight || 500}px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
    z-index: 1;
`