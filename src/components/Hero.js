import { motion, useAnimation } from "framer-motion"
import constants from "./utils/constants"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Hero({ title, sub }) {

    const images = process.env.PUBLIC_URL + "/assets/images"
    const line1 = "Creating"
    const line2 = "Realities in 3d"
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    return (
        <>
            {!title &&
                <motion.div className="container py-5" variants={constants.hero} initial="initial" animate="animate">
                    <div className="py-5 mb-4 hero">
                        <div className="row mb-5 pt-5 mt-2">
                            <div className="col-lg-8">
                                <img src={images + "/hero/bar.png"} alt="hero-bar" height="14px" />
                                <motion.h1 variants={constants.heading}>
                                    {line1.split("").map((char, index) => {
                                        return (
                                            <motion.span key={char + "-" + index} variants={constants.letter}>
                                                {char}
                                            </motion.span>
                                        )
                                    })}
                                    <span className="linear">
                                        {line2.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={constants.letter}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </span>
                                </motion.h1>
                                <h3 className="mt-3">
                                    Bring your product ideas to life with stunning product animations and photorealistic 3D renders.
                                </h3>
                                <Link to={'/projects'}>
                                    <motion.button
                                        className="btn btn-lg btn-success px-5 py-4 mt-4"
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0px 0px 8px #20c997",
                                            transition: { type: 'spring', stiffness: 320 }
                                        }}
                                    >
                                        Explore
                                        <img className="ms-2" src={images + "/hero/mask.png"} alt="" />
                                    </motion.button>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <img src={images + "/hero/hero-img.png"} alt="hero-img" width={'100%'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="rounded-4 border-success p-4 bg-white">
                                    <div className="d-flex">
                                        <p>Tons of <strong>Brands</strong> trust our works, <br />you can too</p>
                                        <span className="divider mx-3">/</span>
                                        <div className="pt-3">
                                            <img className="mx-2" src={images + "/brands/google.png"} alt="Google" />
                                            <img className="mx-2" src={images + "/brands/slack.png"} alt="Slack" />
                                            <img className="mx-2" src={images + "/brands/spotify.png"} alt="Spotify" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
            {title &&
                <>
                    <motion.div className="container-fluid hero sub py-5 text-center" variants={constants.hero} initial="initial" animate="animate">
                        <div className="py-5 my-5">
                            <div className="py-5"></div>
                            <motion.h1 className="mt-5 pt-5" variants={constants.heading}>
                                <span className="linear">
                                    {title.split("").map((char, index) => {
                                        return (
                                            <motion.span key={char + "-" + index} variants={constants.letter}>
                                                {char}
                                            </motion.span>
                                        )
                                    })}
                                </span>
                            </motion.h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="text-white">{sub}</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            }
        </>
    )
}
