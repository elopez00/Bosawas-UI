import React from 'react'
import { mount } from 'enzyme'
import { Button } from '../components'

describe('<Button />', () => {
    // testing rendering
    it ('should output a button', () => {
        const wrapper = mount(<Button>Click me</Button>);
        expect(wrapper.find('button')).toBeTruthy();
    })

    it ('should render text appropriately',() => {
        const wrapper = mount(<Button>Click me</Button>);
        expect(wrapper.props().children).toBe('Click me');
    })

    it ('renders children when the children are elements', () => {
        const wrapper = mount(<Button><div>Click me</div></Button>);
        expect(wrapper.contains(<div>Click me</div>)).toBeTruthy();
    })

    // testing default props
    it ('should have color="default" by default', () => {
        const wrapper = mount(<Button>Click me</Button>);
        expect(wrapper.props().color).toBe('default');
    })
    
    it ('should have size="default" by default', () => {
        const wrapper = mount(<Button>Click me</Button>);
        expect(wrapper.props().size).toBe('default');
    })
    
    it ('should have variant="default" by default', () => {
        const wrapper = mount(<Button>Click me</Button>)
        expect(wrapper.props().variant).toBe('default')
    })

    // testing properties
    it ('contains anchor when href is passed', () => {
        const wrapper = mount(<Button href="hello">Click me</Button>);
        expect(wrapper.find('a')).toBeTruthy();
    }) 

    it ('executes onClick function', () => {
        const spyClick = jest.fn();
        const wrapper = mount(<Button onClick={spyClick}>Click me</Button>);
        wrapper.find('button').simulate('click');
        expect(spyClick).toHaveBeenCalled();
    })

    it ('does not execute onClick function when button is disabled', () => {
        const spyClick = jest.fn();
        const wrapper = mount(<Button disabled onClick={spyClick}>Click me</Button>);
        wrapper.find('button').simulate('click');
        expect(spyClick).toHaveBeenCalledTimes(0);
    })

    it ('allows for prop override', () => {
        const wrapper = mount(<Button color="blue">Click me</Button>);
        expect(wrapper.props().color).toBe('blue');
    })

    it ('accepts id and className', () => {
        const wrapper = mount(<Button id="click" className="clickerino">Click me</Button>);
        expect(wrapper.props().id).toBe('click');
        expect(wrapper.props().className).toBe('clickerino');
    })

    it ('makes href=null if disabled=true', () => {
        const wrapper = mount(<Button href="hello" disabled>Click me</Button>);
        expect(wrapper
            .find('a')
            .getDOMNode()
            .getAttribute('href')
        ).toBeFalsy();
    })
})