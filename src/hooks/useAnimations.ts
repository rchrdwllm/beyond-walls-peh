export const useAnimations = () => {
    const transition = {
        duration: 0.75,
        ease: {
            inOut: [0.87, 0, 0.13, 1],
            out: [0.16, 1, 0.3, 1],
        },
    };

    const revealAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };

    const slideAnimation = {
        initial: {
            y: "100%",
        },
        animate: {
            y: 0,
        },
        exit: {
            y: "100%",
        },
    };

    const heightAnimation = {
        initial: {
            height: "100%",
        },
        animate: {
            height: 0,
        },
        exit: {
            height: "100%",
        },
    };

    return { transition, revealAnimation, slideAnimation, heightAnimation };
};
