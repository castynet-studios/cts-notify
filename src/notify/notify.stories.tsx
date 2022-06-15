import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './notify';

export default {
  title: 'CTS-NOTIFY/Notify',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'primary',
  children: "I'm a button 😎"
};
