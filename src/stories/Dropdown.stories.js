import React from 'react'
import { Dropdown, Option, Button } from '../components'

export default {
    title: "Inputs/Dropdown",
    component: Dropdown
}

const Template = args => (
    <React.Fragment>
        <Dropdown style={{margin: 5}}>
            <Button {...args} />
            <Option>This</Option>
            <Option>is</Option>
            <Option>a</Option>
            <Option>test</Option>
        </Dropdown>
        <Dropdown style={{margin: 5}}>
            <Button {...args} color="red" />
            <Option>This</Option>
            <Option>is</Option>
            <Option>a</Option>
            <Option>test</Option>
        </Dropdown>
        <Dropdown style={{margin: 5}}>
            <Button {...args} color="blue" />
            <Option>This</Option>
            <Option>is</Option>
            <Option>a</Option>
            <Option>test</Option>
        </Dropdown>
    </React.Fragment>
)

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    children: 'Dropdown',
    size: 'default',
    color: 'default'
}

export const Outline = Template.bind({});
Outline.args = {
    disabled: false,
    children: 'Dropdown',
    variant: 'outline',
    size: 'default',
    color: 'default',
}

export const Bubble = Template.bind({});
Bubble.args = {
    disabled: false,
    children: 'Dropdown',
    variant: 'bubble',
    size: 'default',
    color: 'default'
}
