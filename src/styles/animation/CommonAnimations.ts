export const fadeInAndYAnimation = (delay: number, duration: number) => {
    return {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay,
                duration,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration,
                ease: "easeOut",
                bounce: 0
            }
        }
    }
}

export const itemAnimation = {
    hidden: { opacity: 0, y: "10%" },
    show: { opacity: 1, y: 0 }
}

export const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
            delayChildren: 0.05,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut",
            bounce: 0
        }
    }
}

export const fadeInAndYAnimationText = (delay: number, duration: number) => {
    return {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 0.1,
            transition: {
                delay,
                duration,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration,
                ease: "easeOut",
                bounce: 0
            }
        }
    }
}