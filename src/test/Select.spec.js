import React from 'react'
import { Select, Option } from '../components'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<Select/>', () => {
    // snapshot test
    it ('renders correctly', () => {
        const tree = renderer
            .create (
                <Select>
                    <Option>Testing</Option>
                </Select>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // testing render
    it ('it renders placeholder correctly', () => {
        const wrapper = mount (
            <Select placeholder="select option"></Select>)

        expect(wrapper
            .props()
            .placeholder
        ).toBe('select option')

        expect(wrapper
            .text()
        ).toBe('select optionkeyboard_arrow_down');
    })

    it ('renders all options', () => {
        const wrapper = mount (
            <Select>
                <Option>This</Option>
                <Option>is</Option>
                <Option>me</Option>
            </Select>
        )

        let counter = 0;
        wrapper
            .find('div')
            .find('span')
            .forEach(node => counter++);
        expect(counter).toBe(3);
    })

    // state testing
    it ('opens and closes menu successfully', () => {
        const wrapper = mount (
            <Select>
                <Option>This</Option>
                <Option>is</Option>
                <Option>me</Option>
            </Select>
        )

        expect(wrapper
            .state('menuOpen')
        ).toBeFalsy();

        wrapper.find('button').simulate('click');

        expect(wrapper
            .state('menuOpen')
        ).toBeTruthy();
    })

    it ('should change selection name when option is clicked', () => {
        const wrapper = mount (
            <Select>
                <Option>Coolio</Option>
            </Select>
        )

        wrapper.find('span').simulate('click');
        expect(wrapper.state('selected')).toBe('Coolio')
    })

    // testing class functions
    it ('should execute renderOptions on componentMount', () => {
        const wrapper = mount(
            <Select>
                <Option>This is cool</Option>
            </Select>
        )
        const spy = jest.spyOn(wrapper.instance(), 'renderOptions');

        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    })

    it ('should execute handleClick function when select button is clicked', () => {
        const wrapper = mount (
            <Select>
                <Option>Coolio</Option>
            </Select>
        )
        const spy = jest.spyOn(wrapper.instance(), 'handleClick');
        wrapper.instance().forceUpdate();

        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    })

    it ('should execute handleOptionClick when option is clicked', () => {
        const wrapper = mount (
            <Select>
                <Option>This is interesting</Option>
            </Select>
        )
        const spy = jest.spyOn(wrapper.instance(), 'handleOptionClick');
        
        wrapper.find('span').simulate('click');
        expect(spy).toHaveBeenCalled();
    })

    // testing props 
    it ('should execute custom button click function', () => {
        const mockClick = jest.fn();
        const wrapper = mount (
            <Select buttonClick={mockClick}>
                <Option>Test something</Option>
            </Select>
        )

        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    })

    it ('should execute custom option click function', () => {
        const mockClick = jest.fn();
        const wrapper = mount (
            <Select>
                <Option onClick={mockClick}>Testing option click</Option>
            </Select>
        )

        wrapper.find('span').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    })

    it ('should have size=default as default prop', () => {
        const wrapper = mount (<Select></Select>)

        expect(wrapper
            .props()
            .size
        ).toBe('default')
    })

    it ('should have variant=default as default prop', () => {
        const wrapper = mount (<Select></Select>)

        expect(wrapper
            .props()
            .variant
        ).toBe('default')
    })

    it ('should have width=default as default prop', () => {
        const wrapper = mount (<Select></Select>);

        expect(wrapper
            .props()
            .width
        ).toBe('default')
    })

    it ('should have color=default as default prop', () => {
        const wrapper = mount (<Select></Select>)

        expect(wrapper
            .props()
            .color
        ).toBe('default');
    })
})