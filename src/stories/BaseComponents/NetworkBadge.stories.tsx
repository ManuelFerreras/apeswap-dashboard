
import NetworkBadge, { NetworkBadgeProps } from '@/components/BaseComponents/NetworkBadge/NetworkBadge';
import React, { FC } from 'react';

export default {
    component: NetworkBadge,
    title: 'BaseComponents/NetworkBadge',
};

interface StoryTemplate extends FC<NetworkBadgeProps> {
    args?: Partial<NetworkBadgeProps>;    
}

const Template: StoryTemplate = (args) => <NetworkBadge {...args} />;

export const Mainnet = Template.bind({});
    Mainnet.args = {
    variant: 'primary',
    network: 1,
};

export const BSC = Template.bind({});
    BSC.args = {
    variant: 'primary',
    network: 56,
};

export const Polygon = Template.bind({});
    Polygon.args = {
    variant: 'primary',
    network: 137,
};