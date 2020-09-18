import React from 'react'
import { Switch } from '../components'

export default {
    title: "Inputs/Switch",
    component: Switch
}

const Template = args => (
    <React.Fragment>
        <Switch {...args} style={{margin: 5}} /><br/>
        <Switch color="blue" {...args} style={{margin: 5}}/><br/>
        <Switch color="red" {...args} style={{margin: 5}}/>
    </React.Fragment>
)

export const SwitchComponent = Template.bind({})

