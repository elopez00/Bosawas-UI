import React from 'react';
import type { Story, Meta } from '@storybook/react';

import type { IText } from '../src/components/Text';
import { Text } from '../src'

const meta: Meta = {
    title: "Format/Text",
    component: Text,
    args: {
        children: 'This is the text component',
    }
}

export default meta;

const TextTemplate: Story<IText> = (args) => (<Text {...args} />);

export const Default = TextTemplate.bind({});

export const NestedText = () => (
    <Text>
        <Text bold>What's good</Text> how <Text italics>is</Text> everything going?
        <Text newLine>We should catch up <Text underline>soon.</Text></Text>
    </Text>
)

export const HyperLink = () => (
    <Text link='https://google.com'>Google it</Text>
)

export const Headers = () => (
    <>
        <Text bold h={1}>Header 1</Text>
        <Text bold h={2}>Header 2</Text>
        <Text bold h={3}>Header 3</Text>
    </>
)