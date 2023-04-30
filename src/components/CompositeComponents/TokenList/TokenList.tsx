import React, { FC, useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

import styles from './TokenList.module.css';
import TokensCard from '../TokenCard/TokenCard';

import { Token } from '@/common/types';
import { containerAnimation } from '@/styles/animation/CommonAnimations';

import InfiniteScroll from 'react-infinite-scroll-component';

interface TokenListProps {
    balancesList: Token[];
}

const TokenList: FC<TokenListProps> = ({
    balancesList
}) => {
    const [items, setItems] = useState<Token[]>(balancesList?.slice(0, 20));
    const [hasMore, setHasMore] = useState(true);

    const fetchData = () => {
        if (items?.length >= balancesList?.length) {
          setHasMore(false);
          return;
        }
    
        setTimeout(() => {
          setItems([...items, ...balancesList?.slice(items?.length, items?.length + 20)]);
        }, 500);
    };

    useEffect(() => {
        setItems(balancesList?.slice(0, 10));
    }, [balancesList]);

    return (
        <m.div 
            variants={containerAnimation} 
            initial='hidden' 
            animate='show'
            exit='exit'
            className={styles.tokenList}
        >
          <InfiniteScroll
            dataLength={items?.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<></>}
            endMessage={<></>}
          >
            {items?.map(token => (
              <TokensCard token={token} key={token?.address} />
            ))}
          </InfiniteScroll>
        </m.div>
    );
}

export default TokenList;
export type { TokenListProps };