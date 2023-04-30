import React, { FC } from 'react';
import styles from './Button.module.css';
import { Variants } from '@/common/types';

interface ButtonProps {
    children: React.ReactNode;
    variant: Variants;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    children,
    variant,
    disabled = false,
    onClick,
}) => {
    const classNames = `${styles.button} ${styles[variant]}`;

    return (
        <button
            className={classNames}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;
export type { ButtonProps };
