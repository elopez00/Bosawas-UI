import React from 'react'
import { Select } from '../components'

export default {
    title: "Inputs/Select",
    component: Select
}

const Template = args => (
    <React.Fragment>
        <Select {...args} style={{margin: 5}}>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello this is a long text to see how it looks</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
        </Select>
        <Select color="red" {...args} style={{margin: 5}}>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello this is a long text to see how it looks</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
        </Select>
        <Select color="blue" {...args} style={{margin: 5}}>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello this is a long text to see how it looks</Select.Option>
            <Select.Option>Hello</Select.Option>
            <Select.Option>Hello</Select.Option>
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