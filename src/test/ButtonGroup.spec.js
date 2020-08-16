import React from 'react'
import { mount, shallow } from 'enzyme'
import { ButtonGroup, Button } from '../components'
import renderer from 'react-test-renderer'

describe('<ButtonGroup/>', () => {
    // renders
    it ('renders successfully', () => {
        const wrapper = mount ( 
            <ButtonGroup>
                <Button>Hello</Button>
            </ButtonGroup>
        )
        expect(wrapper.find('button')).toBeTruthy();
    })

    it ('should render text correctly', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>Hello</Button>
            </ButtonGroup>
        )
        expect(wrapper.find('button').props().children).toBe('Hello')
    })
    
    it ('renders all buttons correctly', () => {
        const buttonNames = {
            'button-1': 'this',
            'button-2': 'is',
            'button-3': 'cool'
        }

        const wrapper = mount (
            <ButtonGroup>
                { Object.keys(buttonNames).map(key => (
                    <Button key={Math.random()} id={key}>{buttonNames[key]}</Button>
                )) }
            </ButtonGroup>
        )

        wrapper.find('button').forEach(node => {
            expect(buttonNames[node.props().id] === node.props().children).toBeTruthy();
        })
    })

    it ('renders correct amount of buttons', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>Click me</Button>
                <Button>Click me</Button>
                <Button>Click me</Button>
            </ButtonGroup>
        )
        
        let counter = 0;
        wrapper.find('button').forEach(node => counter++);

        expect(counter).toBe(3);
    })

    it ('does not break if no button is passed', () => {
        const wrapper = mount (
            <ButtonGroup></ButtonGroup>
        )
    })

    it ('does not render other elements except bosaws buttons', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>This is a cool test</Button>
                <span>if this is true the test will fail :(</span>
            </ButtonGroup>
        )

        expect(wrapper
            .find('button')
            .props()
            .children
        ).toBe('This is a cool test')
        expect(Object.keys(wrapper.find('span')).length).toBeFalsy();
    })
    
    // snapshot
    it ('renders correctly', () => {
        const tree = renderer
            .create(
                <ButtonGroup>
                    <Button>This</Button>
                    <Button>is</Button>
                    <Button>cool</Button>
                </ButtonGroup>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // props
    it ('should have color="default"', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>This is a button</Button>
            </ButtonGroup>
        )
        expect(wrapper.props().color).toBe('default');
    })

    it ('should have variant="default', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>This is a button</Button>
            </ButtonGroup>
        )
        expect(wrapper.props().variant).toBe('default');
    })

    it ('should have size="default"', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>This is a button</Button>
            </ButtonGroup>
        )
        expect(wrapper.props().size).toBe('default');
    })

    it ('can have modifiable class names and ids', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button className="my-button" id="that-clicks">Woah</Button>
            </ButtonGroup>
        )
        expect(wrapper.find('.my-button')).toBeTruthy();
        expect(wrapper
            .find('button')
            .props()
            .id
        ).toBe('that-clicks')
    })

    it ('executes onClick function', () => {
        const mockClick = jest.fn();
        const wrapper = mount (
            <ButtonGroup>
                <Button onClick={mockClick}>This is a button</Button>
            </ButtonGroup>
        )
        
        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalled();
    })

    it ('executes onClick function for every instance of Button', () => {
        const mockClick = jest.fn();
        const wrapper = mount (
            <ButtonGroup>
                <Button onClick={mockClick}>Button 1</Button>
                <Button onClick={mockClick}>Button 2</Button>
                <Button onClick={mockClick}>Button 3</Button>
            </ButtonGroup>
        )

        wrapper.find('button').forEach(node => {
            node.simulate('click');
        })

        expect(mockClick).toHaveBeenCalledTimes(3);
    })

    it ('allows props to be overridden', () => {
        const wrapper = mount (
            <ButtonGroup variant="outline">
                <Button>Cool</Button>
            </ButtonGroup>
        )
        
        expect(wrapper.props().variant).toBe('outline')
    })

    it ('does not execute on click function when button is disabled', () => {
        const mockClick = jest.fn();
        const wrapper = mount (
            <ButtonGroup>
                <Button disabled onClick={mockClick}>This is pretty cool</Button>
            </ButtonGroup>
        )

        wrapper.find('button').simulate('click');
        expect(mockClick).toHaveBeenCalledTimes(0);
    })

    it ('allows buttons to have elements inside of them', () => {
        const wrapper = mount (
            <ButtonGroup>
                <Button>
                    <a>this is cool</a>
                    <div>woah</div>
                </Button>
            </ButtonGroup>
        )

        expect(wrapper
            .find('button')
            .find('a')
            .props()
            .children
        ).toBe('this is cool');

        expect(wrapper 
            .find('button')
            .find('div')
            .props()
            .children
        ).toBe('woah');
    })
})