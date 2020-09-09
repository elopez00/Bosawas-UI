import React from 'react'
import { Select, Option } from '../components'

export default {
    title: "Inputs/Select",
    component: Select
}

const Template = args => (
    <React.Fragment>
        <Select {...args} style={{margin: 5}}>
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello this is a long text to see how it looks</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
        <Select color="red" {...args} style={{margin: 5}}>
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello this is a long text to see how it looks</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
        <Select color="blue" {...args} style={{margin: 5}}>
            <Option>Hello</Option>
            <Option>Hello</Option>
            <Option>Hello this is a long text to see how it looks</Option>
            <Option>Hello</Option>
            <Option>Hello</Option>
        </Select>
    </React.Fragment>
)

export const Default = Template.bind({});
Default.args = {
    size: "default",
    width: "default"
}

export const Outline = Template.bind({});
Outline.args = {
    variant: "outline"
}

export const Bubble = Template.bind({});
Bubble.args = {
    variant: "bubble"
}