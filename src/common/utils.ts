import { networkProviders } from "./chains";
import { ERC20Abi } from "./constants";
import { TOKENLIST } from "./tokenList";
import { Token, TokenInfo } from "./types";
import { BigNumberish, JsonRpcProvider, Contract, formatUnits } from 'ethers';

export const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export const formatBalance = (balance: string) => {
  return balance.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1");
}

export const formatTextLength = (text: string, length: number) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }
  return text;
}

export async function getBalance(provider: JsonRpcProvider, token: TokenInfo, walletAddress: string): Promise<string> {
    const contract = new Contract(token.address, ERC20Abi, provider);
    const balance: BigNumberish = await contract.balanceOf(walletAddress);
    return formatUnits(balance, token.decimals);
}

export async function getAllBalances(walletAddress: string): Promise<Token[]> {
    const allBalances: Promise<Token>[] = [];
  
    try {
      for (const token of TOKENLIST.tokens) {
        const provider = networkProviders[token.chainId];
        if (!provider) {
          continue;
        }
    
        allBalances.push(
          getBalance(provider, token, walletAddress).then(balance => ({
            symbol: token.symbol,
            balance,
            network: token.chainId,
            logoURI: token.logoURI,
            decimals: token.decimals,
            address: token.address,
            name: token.name
          }))
        );

      }

      return Promise.all(allBalances);

    } catch (error) {
      console.debug(error);
      return [];
    }
  }