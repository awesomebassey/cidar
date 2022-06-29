import { motion, useAnimation } from "framer-motion"
import constants from "./utils/constants"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function () {
    const images = process.env.PUBLIC_URL + "/assets/images"
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div className="container my-5 rounded-4 about-section p-5"
                variants={constants.slideUp}
                ref={ref}
                initial="initial"
                animate={controls}
            >
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <img src={images + "/about/about-group.png"} alt="" width={'87.26px'} />
                            <div className="ms-4">
                                <h4 className="mb-0">About Us</h4>
                                <small className="mt-0"><u>Who we are</u></small>
                            </div>
                        </div>
                        <p className="mt-3">
                            The shift in the social interactions and engagements calls for a
                            change in the way companies interact with their customers, and
                            thus calls for the shift from traditional visual content to more
                            innovative, eye-catching and engaging content. <br /><br />
                            Cidar is a 3D company that specializes in creating 3D product
                            rendering and animations services that help our clients Increase
                            marketing and sales of products using innovative visual and
                            interactive content.
                        </p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={images + "/about/about-img.png"} alt="" width="80%" />
                    </div>
                </div>
            </motion.div>
        </>
    )
}
