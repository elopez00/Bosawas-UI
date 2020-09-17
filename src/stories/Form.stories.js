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
            <Radio label="Option 1"/>
            <Radio label="Option 2"/>
            <Radio label="Option 3"/>
        </Form.Group>
        <Form.Group name="checkboxes" title="Check all that apply">
            <Checkbox label="Selection 1"/>
            <Checkbox label="Selection 2"/>
            <Checkbox label="Selection 3"/>
        </Form.Group>
        <Form.Group title="Flip the switch">
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