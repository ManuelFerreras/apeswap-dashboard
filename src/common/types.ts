export type Variants = 'primary' | 'secondary';

type BaseToken = {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    logoURI: string;
}

export type TokenInfo = BaseToken & {
    chainId: number;
};

export type Token = BaseToken & {
    balance: string, 
    network: number, 
}