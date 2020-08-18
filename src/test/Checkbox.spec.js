import React from 'react'
import { Checkbox } from '../components'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe ("<Checkbox/>", () => {
    // snapshot
    it ('renders correcty', () => {
        const tree = renderer
            .create(<Checkbox label="this is a checkbox"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    // render testing
    it ('renders checkbox input', () => {
        const wrapper = mount (<Checkbox />);
        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('checkbox')
    })

    it ('renders label correctly', () => {
        const wrapper = mount (<Checkbox label="this is a checkbox" />);
        expect(wrapper
            .find('input')
            .props()
            .label
        ).toBe('this is a checkbox')
        expect(wrapper // takes into account the icon element's text
            .find('label')
            .text()
        ).toBe('this is a checkboxcheck')
    })

    // prop testing
    it ('successfully fires onChange function on check', () => {
        const mockChange = jest.fn();
        const wrapper = mount (<Checkbox onChange={mockChange}/>);
        wrapper.find('input').simulate('change', { target: { checked: true } });
        expect(mockChange).toHaveBeenCalled();
    })

    it ('does not execute onClick function when disabled=true', () => {
        const mockClick = jest.fn();
        const wrapper = mount (<Checkbox onClick={mockClick} disabled/>);
        wrapper.find('input').simulate('click');
        expect(mockClick).toHaveBeenCalledTimes(0);
    })
})