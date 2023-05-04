import React, { FC, useContext, useEffect, useState, Context } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion as m } from 'framer-motion';

import styles from './Header.module.css';

import Button from '@/components/BaseComponents/Button/Button';
import { hooks, metaMask } from '@/connectors/metaMask';
import { Variants } from '@/common/types';
import { formatAddress, getAllBalances } from '@/common/utils';
import { fadeInAndYAnimation } from '@/styles/animation/CommonAnimations';
import AppContext, { AppContextType } from '@/context/context';

const { useAccounts, useIsActivating, useIsActive, useProvider } = hooks;

interface HeaderProps {
    logo: string;
    title: string;
    variant: Variants;
}

const Header: FC<HeaderProps> = ({
    logo,
    title,
    variant
}) => {
    const classNames = `${styles.header}`;
    const appContext: AppContextType = useContext(AppContext);

    const [retrievingBalances, setRetrievingBalances] = useState<boolean>(false);
    const accounts = useAccounts()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()

    const handleConnect = () => {
        if(isActivating) return;
        void metaMask.activate();
    }

    const handleDisconnect = () => {
        if (metaMask?.deactivate) {
            void metaMask.deactivate()
        } else {
            void metaMask.resetState()
        }
    }

    useEffect(() => {
        void metaMask.connectEagerly().catch(() => {
            console.debug('Failed to connect eagerly to metamask')
        });
    }, [])

    useEffect(() => {
        if(!retrievingBalances && isActive && accounts) {
            setRetrievingBalances(true);
            getAllBalances(accounts[0])
            .then((balances) => {
                balances = balances.sort((a, b) => Number(b.balance) - Number(a.balance));
                appContext.setBalances(balances);
                setRetrievingBalances(false);
            })
            .catch((error) => {
                console.debug(error);
                setRetrievingBalances(false);
            })
        }
    }, [isActive, accounts])

    useEffect(() => {
        const interval = setInterval(() => {
            console.debug("Retrieving balances...");

            if(!retrievingBalances && isActive && accounts) {
                setRetrievingBalances(true);
                getAllBalances(accounts[0])
                .then((balances) => {
                    balances = balances.sort((a, b) => Number(b.balance) - Number(a.balance));
                    appContext.setBalances(balances);
                    setRetrievingBalances(false);
                })
                .catch((error) => {
                    console.log(error);
                    setRetrievingBalances(false);
                })
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [accounts])

    useEffect(() => {
        appContext.setBalances([]);
    }, [accounts])

    return (
        <header className={classNames}>
            <div className={styles.pageInfo}>
                <Image src={logo} draggable='false' alt="logo" width={50} height={50} className={styles.headerImage} />
                <h1 className={`${styles.title} ${styles[variant]}`}>{title}</h1>
            </div>
            
            <div className={styles.userInfo}>
                <AnimatePresence mode='wait'>
                    {
                        isActive && (<m.p variants={fadeInAndYAnimation(0, 0.1)} initial="hidden" animate="show" exit="exit" className={styles.userInfoAddress}>{accounts && formatAddress(accounts[0])}</m.p>)
                    }
                </AnimatePresence>
                {
                    !isActive? (<Button variant="primary" onClick={handleConnect}>Connect</Button>) :
                    (<Button variant="secondary" onClick={handleDisconnect}>Disconnect</Button>)
                }
            </div>
        </header>
    )
}

export default Header;
export type { HeaderProps };