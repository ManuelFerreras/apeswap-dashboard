import React, { FC } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";

import styles from './TokenCard.module.css';

import { Token } from "@/common/types";
import NetworkBadge from "@/components/BaseComponents/NetworkBadge/NetworkBadge";
import { formatBalance, formatTextLength } from "@/common/utils";
import { itemAnimation } from "@/styles/animation/CommonAnimations";

interface TokenCardProps {
    token: Token;
}

const TokensCard: FC<TokenCardProps> = ({
    token,
}) => {
    const classNames = `${styles.tokenCard}`;

    const copyAddress = () => {
        navigator.clipboard.writeText(token.address);
    }

    return (
        <m.div 
            className={classNames}
        >
            <div className={styles.tokenLogo}>
                <NetworkBadge variant="primary" network={token.network} />
                <Image className={styles.tokenLogoImage} src={token.logoURI} alt={token.name} width={40} height={40} />
            </div>
            <div className={styles.tokenName}>
                <p className={styles.tokenLabel}>Name</p>
                <h2 className={styles.tokenPropValue}>{formatTextLength(token.name, 22)}</h2>
            </div>
            <div className={styles.tokenSymbol}>
                <p className={`${styles.tokenLabel} ${styles.tokenLabelSymbol}`}>Symbol</p>
                <h2 className={styles.tokenPropValue}>${token.symbol}</h2>
            </div>
            <div className={styles.tokenBalance}>
                <p className={styles.tokenLabel}>Balance</p>
                <h2 className={styles.tokenPropValue}>{formatTextLength(formatBalance(token.balance), 18)} {token.symbol}</h2>
            </div>
            <div className={styles.copyDiv} title="Copy Adress" onClick={copyAddress}>
                <Image className={styles.copyButton} src="/images/copy.svg" alt="copy" width={20} height={20}  />
            </div>
        </m.div>
    )
}

export default TokensCard;
export type { TokenCardProps };