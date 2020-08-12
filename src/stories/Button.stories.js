import React from 'react';

import Button from '../components/inputs/Button';
import '../assets/Bosawas.css'


export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    
  },
};

const Template = args => <Button {...args} />;

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

