
import Button, { ButtonProps } from '@/components/BaseComponents/Button/Button';
import React, { FC } from 'react';

export default {
    component: Button,
    title: 'BaseComponents/Button',
};

interface StoryTemplate extends FC<ButtonProps> {
    args?: Partial<ButtonProps>;    
}

const Template: StoryTemplate = (args) => <Button {...args} />;

export const Connect = Template.bind({});
    Connect.args = {
    children: 'Connect',
    variant: 'primary',
};

export const Disconnect = Template.bind({});
    Disconnect.args = {
    children: 'Disconnect',
    variant: 'secondary',
};

export const Connecting = Template.bind({});
    Connecting.args = {
    children: 'Disabled ',
    variant: 'primary',
    disabled: true,
};