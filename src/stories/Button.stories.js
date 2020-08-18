import React from 'react';
import Button from '../components/Button';
import '../assets/Bosawas.css'

 
export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    style: { margin: 5 }
  },
};

const Template = args => (
  <React.Fragment>
    <Button {...args} style={{margin: 5}}/>
    <Button {...args} style={{margin: 5}} color="blue"/>
    <Button {...args} style={{margin: 5}} color="red"/>
  </React.Fragment>
);

export const Standard = Template.bind({});
Standard.args = {
  disabled: false,
  children: 'Button',
};

export const Bubble = Template.bind({});
Bubble.args = {
  disabled: false,
  variant: 'bubble',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  variant: 'outline',
  children: 'Button'
}