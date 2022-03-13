import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { IButton } from '../src/components/Button';
import { Button } from '../src';

const meta: Meta = {
    title: 'Format/Button',
    component: Button,
    args: {
        children: 'Button'
    },
}

export default meta;

const ButtonTemplate: Story<IButton> = (args) => <Button {...args} />;

export const Default = ButtonTemplate.bind({});
