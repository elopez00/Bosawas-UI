import React from 'react'
import { Dropdown, Option, Button } from '../components'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<Dropdown/>', () => {
    // snapshot
    it ('renders correctly', () => {
        const tree = renderer
            .create(
                <Dropdown>
                    <Button>Dropdown</Button>
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                </Dropdown>
            ).toJSON()
        expect(tree).toMatchSnapshot();
    })

    // render testing
    it ('renders button correctly', () => {
        const wrapper = mount ( 
            <Dropdown>
                <Button>Hello</Button>
            </Dropdown>
        )

        expect(wrapper.find('button')).toBeTruthy();
    })

    it ('renders all options', () => {
        const wrapper = mount (
            <Dropdown>
                <Button>Testing</Button>
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
            </Dropdown>
        )

        let counter = 0;
        wrapper
            .find('div')
            .find('span')
            .forEach(node => counter++);

        expect(counter).toBe(3);
    })

    // state testing
    it ('opens and closes menu properly', () => {
        const wrapper = mount (
            <Dropdown>
                <Button>Testing</Button>
                <Option>Option 1</Option>
            </Dropdown>
        )

        expect(wrapper
            .state('menuOpen')
        ).toBeFalsy();

        wrapper.find('button').simulate('click');

        expect(wrapper
            .state('menuOpen')
        ).toBeTruthy();
    })

    // testing class function
    it ('should execute renderOptions on componentMount', () => {
        const wrapper = mount(
            <Dropdown>
                <Button>This is a test</Button>
                <Option>This is cool</Option>
            </Dropdown>
        )
        const spy = jest.spyOn(wrapper.instance(), 'renderOptions');

        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    })

    it ('should execute handleClick function when select button is clicked', () => {
        const wrapper = mount (
            <Dropdown>
                <Button>Testing</Button>
                <Option>Coolio</Option>
            </Dropdown>
        )
        const spy = jest.spyOn(wrapper.instance(), 'handleClick');
        wrapper.instance().forceUpdate();

        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    })

    it ('should execute handleOptionClick when option is clicked', () => {
        const wrapper = mount (
            <Dropdown>
                <Button>Other test</Button>
                <Option>This is interesting</Option>
            </Dropdown>
        )
        const spy = jest.spyOn(wrapper.instance(), 'handleOptionClick');
        
        wrapper.find('span').simulate('click');
        expect(spy).toHaveBeenCalled();
    })
})