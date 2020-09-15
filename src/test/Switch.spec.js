import React from 'react'
import { Switch } from '../components'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<Switch/>', () => {
    it ('renders correctly', () => {
        const tree = renderer
            .create(<Switch />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    // render testing
    it ('renders Switch input', () => {
        const wrapper = mount (<Switch />);
        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('checkbox')
    })

    it ('renders label correctly', () => {
        const wrapper = mount (<Switch label="this is a Switch" />);
        expect(wrapper
            .find('input')
            .props()
            .label
        ).toBe('this is a Switch')
        expect(wrapper // takes into account the icon element's text
            .find('label')
            .text()
        ).toBe('this is a Switch')
    })

    // prop testing
    it ('successfully fires onChange function on check', () => {
        const mockChange = jest.fn();
        const wrapper = mount (<Switch onChange={mockChange}/>);
        wrapper.find('input').simulate('change', { target: { checked: true } });
        expect(mockChange).toHaveBeenCalled();
    })

    it ('does not execute onClick function when disabled=true', () => {
        const mockClick = jest.fn();
        const wrapper = mount (<Switch onClick={mockClick} disabled={true}/>);
        wrapper.find('input').simulate('click');
        expect(mockClick).toHaveBeenCalledTimes(0);
    })
})