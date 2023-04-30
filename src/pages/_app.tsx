import { Token } from '@/common/types';
import AppContext from '@/context/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [balances, setBalances] = useState<Token[]>([]); 

  return (
    <AppContext.Provider value={{
      balances,
      setBalances
    }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
