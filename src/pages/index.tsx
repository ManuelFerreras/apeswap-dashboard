import Head from 'next/head'

import DashboardPage from '@/components/PageComponents/DashboardPage/DashboardPage'
import { hooks } from '@/connectors/metaMask';

const { useIsActive } = hooks;

export default function Home() {
  const isActive = useIsActive()

  return (
    <>
      <Head>
          <title>ApeSwap Dashboard</title>
      </Head>

      <DashboardPage isActive={isActive} />
    </>
  )
}
