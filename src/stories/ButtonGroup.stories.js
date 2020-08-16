import React from 'react'
import { ButtonGroup, Button } from '../components'

export default {
    title: "Inputs/Button Group",
    export: ButtonGroup,
    argTypes: {}
}

const Template = args => (
    <React.Fragment>
        <ButtonGroup {...args} style={{margin: 5}}>
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
        <ButtonGroup {...args} color="blue" style={{margin: 5}}>
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
        <ButtonGroup {...args} color="red" style={{margin: 5}}>
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
    </React.Fragment>
)

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    color: 'default',
    size: 'default',
    variant: 'default'
}

export const Bubble = Template.bind({});
Bubble.args = {
    disabled: false,
    color: 'default',
    size: 'default',
    variant: 'bubble'
}

export const Outline = Template.bind({});
Outline.args = {
    disabled: false,
    color: 'default',
    size: 'default',
    variant: 'outline'
}
