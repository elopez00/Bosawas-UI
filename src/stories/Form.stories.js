import React from 'react'
import { Form, TextInput, Radio, Button, Checkbox, Switch } from '../components'

export default {
    component: Form,
    title: "Inputs/Form"
}

const Template = args => (
    <Form {...args}>
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
)

export const FormComponent = Template.bind({});
FormComponent.args = {
    /** width */
    width: "500px",
    /** onSubmit function  */
    onSubmit: e => {
        e.preventDefault();
        console.log('this happened')
    },

}