import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

export default function Home() {

    const images = process.env.PUBLIC_URL + "/assets/images"

    return (
        <>
            <Header transparent={true} />
            <Hero />
            <div className="container my-5 text-center text-white">
                <div className="reel rounded-5">
                    <div className="col-lg-5 mx-auto">
                        <h1>Animation Reel</h1>
                        <p>We help companies sell their products by
                            attracting more customers using stunning
                            product animations and photorealistic 3D renders
                        </p>
                    </div>
                </div>
            </div>
            <Services />
            <div className="container my-5 rounded-4 about-section p-5">
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
            </div>
            <Testimonials />
            <Footer />
        </>
    )
}
