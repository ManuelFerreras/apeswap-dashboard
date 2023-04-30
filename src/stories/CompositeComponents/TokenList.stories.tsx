import TokenList, {TokenListProps} from '../../components/CompositeComponents/TokenList/TokenList';
import React, {FC} from 'react';

export default {
    component: TokenList,
    title: 'CompositeComponents/TokenList',
};

interface StoryTemplate extends FC<TokenListProps> {
    args?: Partial<TokenListProps>;
}

const Template: StoryTemplate = (args) => <TokenList {...args} />;

export const TokensList = Template.bind({});
TokensList.args = {
    balancesList: [{
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '313.000000000000001000',
        network: 1,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },

    {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '1.000000000000000000',
        network: 56,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },

    {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
        balance: '12.000000000000000000',
        network: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        decimals: 18,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }]
};