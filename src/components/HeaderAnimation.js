export const buttonVariants = {
    whilehover: {
        scale: 1.15,
        color: "white",
        background: "black",
    },
};
export const heroVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 3.5,
        },
    },
};

export const imageVariants = {
    hidden: {
        x: 800,
    },
    visible: {
        x: 0,
        transition: {
            duration: 1.5,
            delay: 1,
        },
    },
};