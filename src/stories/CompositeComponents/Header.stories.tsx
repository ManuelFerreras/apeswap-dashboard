import Header, {HeaderProps} from '../../components/CompositeComponents/Header/Header';
import React, {FC} from 'react';
import MockAppProvider from "../MockProvider/MockProvider";

export default {
    component: Header,
    title: 'CompositeComponents/Header',
};

interface StoryTemplate extends FC<HeaderProps> {
    args?: Partial<HeaderProps>;
}

const Template: StoryTemplate = (args) => (
    <MockAppProvider>
        <Header {...args} />
    </MockAppProvider>
);

export const ConnectedHeader = Template.bind({});
    ConnectedHeader.args = {
    logo: '/images/logo.png',
    title: 'ApeSwap Dashboard',
    variant: 'primary',
};