import type { AddEthereumChainParameter } from '@web3-react/types'
import { JsonRpcProvider } from 'ethers'

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

interface BasicChainInformation {
  urls: string[]
  name: string
  chainLogo: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

const getInfuraUrlFor = (network: string) => process.env.infuraKey? `https://${network}.infura.io/v3/${process.env.infuraKey}` : undefined;

type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const MAINNET_CHAINS: ChainConfig = {
  1: {
    urls: [getInfuraUrlFor('mainnet'), 'https://cloudflare-eth.com'].map((url) => url || '').filter(Boolean),
    name: 'Mainnet',
    chainLogo: '/images/chains/ethereum-logo.png',
  },
  56: {
    urls: [getInfuraUrlFor('bsc-mainnet'), 'https://bsc-dataseed.binance.org'].map((url) => url || '').filter(Boolean),
    name: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
        name: 'Binance Chain Native Token',
        symbol: 'BNB',
        decimals: 18,
    },
    blockExplorerUrls: ['https://bscscan.com'],
    chainLogo: '/images/chains/binance-logo.png',
  },
  137: {
    urls: [getInfuraUrlFor('polygon-mainnet'), 'https://polygon-rpc.com'].map((url) => url || '').filter(Boolean),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
    chainLogo: '/images/chains/polygon-logo.png',
  },
  42161: {
    urls: [getInfuraUrlFor('arbitrum-mainnet'), 'https://arb1.arbitrum.io/rpc'].map((url) => url || '').filter(Boolean),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
    chainLogo: '/images/chains/arbitrum-logo.png',
  },
}

export const TESTNET_CHAINS: ChainConfig = {
    40: {
        urls: [getInfuraUrlFor('rpc'), 'https://ropsten.infura.io/v3/'].map((url) => url || '').filter(Boolean),
        name: 'Ropsten',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://ropsten.etherscan.io'],
        chainLogo: '/images/chains/ethereum-logo.png',
    },
    97: {
        urls: [getInfuraUrlFor('rpc'), 'https://rinkeby.infura.io/v3/'].map((url) => url || '').filter(Boolean),
        name: 'Rinkeby',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://rinkeby.etherscan.io'],
        chainLogo: '/images/chains/ethereum-logo.png',
    },
    80001: {
      urls: [getInfuraUrlFor('polygon-mumbai')].map((url) => url || '').filter(Boolean),
      name: 'Polygon Mumbai',
      nativeCurrency: MATIC,
      blockExplorerUrls: ['https://mumbai.polygonscan.com'],
      chainLogo: '/images/chains/polygon-logo.png',
    },
  }

export const CHAINS: ChainConfig = {
    ...MAINNET_CHAINS,
    ...TESTNET_CHAINS,
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)

export const networkProviders: Record<number, JsonRpcProvider> = {
  1: new JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_infuraKey}`),
  // 40: new JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.NEXT_PUBLIC_infuraKey}`),
  56: new JsonRpcProvider("https://bsc-dataseed.binance.org"),
  97: new JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),
  137: new JsonRpcProvider("https://polygon-rpc.com"),
  42161: new JsonRpcProvider("https://arb1.arbitrum.io/rpc"),
  80001: new JsonRpcProvider("https://rpc-mumbai.maticvigil.com"),
};