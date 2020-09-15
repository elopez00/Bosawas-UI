import React from 'react'
import { Form, TextInput, Radio, Checkbox, Switch, Button } from '../components'
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
})