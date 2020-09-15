import React from 'react'
import { TextInput } from '../components'

export default {
    title: "Inputs/Text Input",
    component: TextInput
}

const Template = args => (
    <React.Fragment>
        <TextInput {...args} style={{margin: 10}} />
        <TextInput {...args} color="red" style={{margin: 10}}/>
    </React.Fragment>
)

export const TextInputComponent = Template.bind({})
TextInputComponent.args = {
    placeholder: "placeholder",
    color: "",
    disabled: false,
    label: "label"
}