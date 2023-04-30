import TokenCard, {TokenCardProps} from '../../components/CompositeComponents/TokenCard/TokenCard';
import React, {FC} from 'react';

export default {
    component: TokenCard,
    title: 'CompositeComponents/TokenCard',
};

interface StoryTemplate extends FC<TokenCardProps> {
    args?: Partial<TokenCardProps>;
}

const Template: StoryTemplate = (args) => <TokenCard {...args} />;

export const MainnetToken = Template.bind({});
MainnetToken.args = {
    token: {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '313.000000000000001000',
        network: 1,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
};

export const BSCToken = Template.bind({});
BSCToken.args = {
    token: {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '1.000000000000000000',
        network: 56,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
};

export const PolygonToken = Template.bind({});
PolygonToken.args = {
    token: {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '12.000000000000000000',
        network: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
};