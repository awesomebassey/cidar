const constants = {
    hero: {
        initial: {
            y: -500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 180
            }
        }
    },
    heading: {
        initial: {
            opacity: 1,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1,
                staggerChildren: 0.13,
            },
        }
    },
    letter: {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        }
    },
    scrollIn: {
        initial: {
            opacity: 0,
            scale: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1
            }
        }
    },
    slideIn: {
        initial: {
            opacity: 0,
            x: '100px'
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    },
    slideUp: {
        initial: {
            opacity: 0,
            y: '20vh'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5                
            }
        }
    }
}

export default constants