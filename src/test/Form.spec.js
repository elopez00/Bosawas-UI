import React from 'react'
import { Form, TextInput, Radio, Checkbox, Switch, Select, Option, Button } from '../components'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe ('<Form />', () => {
    // snapshot
    it ('should render correctly', () => {
        const tree = renderer
        .create (
            <Form>
                <Form.Group title="Type here">
                    <TextInput placeholder="write in me" label="label"/>
                    <Form.Group split>
                        <TextInput placeholder="write in me" label="label"/>
                        <TextInput placeholder="write in me" label="label"/>
                    </Form.Group>
                </Form.Group>
                <Form.Group name="group" title="Choose one">
                    <Radio label="bitchass"/>
                    <Radio label="bitchass"/>
                    <Radio label="bitchass"/>
                </Form.Group>
                <Form.Group name="checkboxes" title="Check all that apply">
                    <Checkbox label="cool"/>
                    <Checkbox label="is"/>
                    <Checkbox label="this"/>
                </Form.Group>
                <Form.Group title="Turn on ;)">
                    <Switch label="off/on"/>
                </Form.Group>
                <Button color="blue" style={{minWidth: 200, margin: "0 auto"}}>Submit</Button>
            </Form>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // test compatible components
    it ('should render text input', () => {
        const wrapper = mount (
            <Form>
                <TextInput />
            </Form>
        )

        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('text')
    })

    it ('should render radio', () => {
        const wrapper = mount (
            <Form>
                <Radio />
            </Form>
        )

        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('radio')
    }) 

    it ('should render checkbox', () => {
        const wrapper = mount (
            <Form>
                <Checkbox />
            </Form>
        )

        expect(wrapper
            .find('input')
            .props()
            .type
        ).toBe('checkbox')
    })

    it ('should render select', () => {
        const wrapper = mount (
            <Form>
                <Select>
                    <Option>Cool</Option>
                </Select>
            </Form>
        )

        expect(wrapper
            .find(Select)
        ).toBeTruthy();
    })

    it ('should render switch', () => {
        const wrapper = mount (
            <Form>
                <Switch />
            </Form>
        )

        expect(wrapper
            .find(Switch)
        ).toBeTruthy();
    })

    it ('should render From.Group', () => {
        const wrapper = mount (
            <Form>
                <Form.Group>

                </Form.Group>
            </Form>
        )

        expect(wrapper
            .find('div')
        ).toBeTruthy();
    })

    it ('should render any element', () => {
        const wrapper = mount (
            <Form>
                <h1>Hello</h1>
                <span>How are you</span>
            </Form>
        )

        expect(wrapper
            .find('h1')
        ).toBeTruthy();
        expect(wrapper
            .find('span')
        ).toBeTruthy();
    })
})