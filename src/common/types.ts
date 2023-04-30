export type Variants = 'primary' | 'secondary';

export type TokenInfo = {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    logoURI: string;
    chainId: number;
};

export type Token = {
    symbol: string; 
    balance: string, 
    network: number, 
    logoURI: string, 
    decimals: number, 
    address: string, 
    name: string
}