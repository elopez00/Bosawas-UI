import React from 'react'
import Checkbox from '../components/Checkbox'

export default {
    component: Checkbox,
    title: 'Inputs/Checkbox'
}

const Template = args => (
    <React.Fragment>
        <Checkbox {...args} label="this is a label for the checkbox" color="red"/><br/>
        <Checkbox {...args} label="this is another label for the checkbox" color="blue"/>
    </React.Fragment>
)

export const CheckboxComponent = Template.bind({})
CheckboxComponent.args = {
    disabled: false
}
