import React from 'react'
import { Radio } from '../components'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<Radio/>', () => {
    // snapshot
    it ('renders correctly', () => {
        const tree = renderer
            .create(<Radio label="This is a radio" defaultChecked/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    // render testing
    it ('renders radio input element', () => {
        const wrapper = mount (<Radio />);
        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('radio')
    })

    it ('renders label correctly', () => {
        const wrapper = mount (<Radio label="this is a label"/>);
        expect(wrapper
            .find('input')
            .props()
            .label
        ).toBe('this is a label');
        expect(wrapper.text()).toBe('this is a label');
    })

    // prop testing
    it ('successfully fires onChange function on check', () => {
        const mockChange = jest.fn();
        const wrapper = mount (<Radio onChange={mockChange}/>);
        wrapper.find('input').simulate('change', { target: { checked: true } });
        expect(mockChange).toHaveBeenCalled();
    })

    it ('does not call onClick function when disabled=true', () => {
        const mockClick = jest.fn();
        const wrapper = mount (<Radio onClick={mockClick} disabled/>);
        wrapper.find('input').simulate('click');
        expect(mockClick).toHaveBeenCalledTimes(0);
    })
})