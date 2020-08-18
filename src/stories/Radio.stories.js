import React from 'react'
import { Radio } from '../components'

export default {
    component: Radio,
    title: "Inputs/Radio"
}

const Template = args => (
    <React.Fragment>
        <Radio name="dudes" color="blue" {...args} label="this is a radio"/><br/>
        <Radio name="dudes" color="red" {...args} label="this is also a radio"/>
    </React.Fragment>
)

export const RadioComponent = Template.bind({})
RadioComponent.args = {
    disabled: false
}