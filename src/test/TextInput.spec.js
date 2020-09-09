import React from 'react'
import { TextInput } from '../components'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<TextInput/>', () => {
    // snapshot
    it ('renders correctly', () => {
        const tree = renderer
            .create( <TextInput /> )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    // test render
    it ('renders label correctly', () => {
        const wrapper = mount (<TextInput label="hello"/>);
        expect(wrapper.text()).toBe('HELLO');
        expect(wrapper.find('input').props().label).toBe('hello');
    })

    it ('renders placeholder correctly', () => {
        const wrapper = mount (<TextInput placeholder="placeholder"/>);
        expect(wrapper.find('input').props().placeholder).toBe('placeholder');
    })

    // test default props 
    it ('correctly assigns default props', () => {
        const wrapper = mount (<TextInput />);
        expect(wrapper.props().color).toBe('blue');
        expect(wrapper.props().label).toBe('');
        expect(wrapper.find('input').props().type).toBe('text')
    })

    // testing input changes
    it ('will accept user input', () => {
        const mockChange = jest.fn();
        const wrapper = mount (<TextInput onChange={mockChange}/>);
        wrapper.find('input').simulate('change', { target: { value: "hello" } });
        expect(mockChange).toHaveBeenCalled();
    })
})