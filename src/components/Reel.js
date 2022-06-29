import { motion, useAnimation } from "framer-motion"
import constants from "./utils/constants"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Reel() {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);
    
    return (
        <>
            <motion.div className="container my-5 text-center text-white"
                variants={constants.scrollIn}
                ref={ref}
                initial="initial"
                animate={controls}
            >
                <div className="reel rounded-5">
                    <div className="col-lg-5 mx-auto">
                        <h1>Animation Reel</h1>
                        <p>We help companies sell their products by
                            attracting more customers using stunning
                            product animations and photorealistic 3D renders
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
