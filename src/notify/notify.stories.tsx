import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CTSNotify from './notify';

import { AvailableIcons } from './icons';

export default {
  title: 'CTS-NOTIFY/Notify',
  component: CTSNotify
} as ComponentMeta<typeof CTSNotify>;

const Template: ComponentStory<typeof CTSNotify> = (args) => (
  <CTSNotify {...args} />
);

export const Info = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});
export const Warning = Template.bind({});

Info.args = {
  type: 'info',
  message: 'This is a default message.',
  icon: AvailableIcons.InfoSquare
};

Success.args = {
  type: 'success',
  message: 'This is a success message.',
  icon: AvailableIcons.CheckShield
};

Error.args = {
  type: 'error',
  message: 'This is an error message.',
  icon: AvailableIcons.Error
};

Warning.args = {
  type: 'warning',
  message: 'This is a warning message.',
  icon: AvailableIcons.ErrorAlt
};
