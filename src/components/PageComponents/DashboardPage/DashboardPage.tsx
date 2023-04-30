import React, { FC, useContext } from "react";
import styles from './DashboardPage.module.css';
import { AnimatePresence, motion as m } from "framer-motion";

import Header from "@/components/CompositeComponents/Header/Header";
import TokenList from "@/components/CompositeComponents/TokenList/TokenList";
import AppContext from "@/context/context";

import { hooks } from '@/connectors/metaMask';
import { fadeInAndYAnimation, fadeInAndYAnimationText } from "@/styles/animation/CommonAnimations";
const { useAccounts } = hooks;

interface DashboardPageProps {
    isActive: boolean;
}

const DashboardPage: FC<DashboardPageProps> = ({
    isActive
}) => {
    const appContext = useContext(AppContext);
    const accounts = useAccounts()

    return (
        <main
            className={`min-h-screen`}
        >

            <Header 
            logo={'/images/logo.png'} 
            title={'ApeSwap Dashboard'} 
            variant={'primary'}
            />

            <AnimatePresence mode='wait'>
                {
                    isActive && accounts && accounts[0] && ( 
                        <m.h2 
                            variants={fadeInAndYAnimation(0, 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className={styles.dashboardLabel}
                        >Tokens Dashboard</m.h2> 
                    )
                }

                {
                    isActive? (
                        <TokenList balancesList={appContext.balances} key={1} />
                    ) : (
                        <m.h3 
                            variants={fadeInAndYAnimationText(0, 0.4)} 
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className={styles.connectLabel} 
                            key={2}
                        >
                            Connect Your Wallet<br/>to use the DApp
                        </m.h3>
                    )
                }
            </AnimatePresence>
            
        </main>
    )
}

export default DashboardPage;
export type { DashboardPageProps };