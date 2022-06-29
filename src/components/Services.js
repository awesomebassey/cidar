import Section from "./Section"
import { motion, useAnimation } from "framer-motion"
import constants from "./utils/constants"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Services() {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    const description = "We help companies sell their products by attracting more customers using stunning product animations and photorealistic 3D renders"
    const images = process.env.PUBLIC_URL + "/assets/images"

    return (
        <motion.div className="container py-5 mt-5 bg-white rounded-4"
            variants={constants.slideUp}
            ref={ref}
            initial="initial"
            animate={controls}
        >
            <div className="text-center col-lg-6 mx-auto">
                <h3>Here's what we can do for you</h3>
                <p>We help companies sell their products by attracting more
                    customers using stunning product animations and photorealistic
                    3D renders
                </p>
            </div>
            <Section bg={images + "/services/services.png"} title={"Photorealistic Render"} desc={description} />
            <Section bg={images + "/services/services.png"} title={"Photorealistic Render"} desc={description} reverse={true} />
            <Section bg={images + "/services/services.png"} title={"Photorealistic Render"} desc={description} />
        </motion.div>
    )
}
