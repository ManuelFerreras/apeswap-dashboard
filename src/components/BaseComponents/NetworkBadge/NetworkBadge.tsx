import React, { FC } from "react";
import styles from './NetworkBadge.module.css';

import { Variants } from "@/common/types";
import Image from "next/image";
import { CHAINS } from "@/common/chains";

interface NetworkBadgeProps {
    network: number;
    variant: Variants;
}

const NetworkBadge: FC<NetworkBadgeProps> = ({
    network,
    variant,
}) => {
    const classNames = `${styles.networkBadge} ${styles[variant]}`;

    return (
        <div className={classNames}>
            <Image className={styles.networkBadgeLogo} src={CHAINS[network].chainLogo} alt="logo" width={50} height={50} />
        </div>
    )
}

export default NetworkBadge;
export type { NetworkBadgeProps };