
export default function Testimonials() {
    const images = process.env.PUBLIC_URL + "/assets/images"
    return (
        <>
            <div className="container my-5 p-5 testimonials-section rounded-4">
                <div className="px-5">
                    <h1 className="mt-5 pt-5">Testimonials</h1>
                    <small><u>What people say about Cidar</u></small>
                </div>
                <div className="row mt-5 px-5">
                    <div className="col-lg-6 pt-4">
                        <div className="py-5 px-4 bg-white rounded-3">
                            <div className="d-flex">
                                <div>
                                    <img src={images + "/testimonials/testimonial.png"} alt="" width={'60px'} />
                                </div>
                                <div className="mt-2 ms-3">
                                    <h4 className="mb-0">Mike Bolaji</h4>
                                    <small className="mt-0"><u>Chairman, Fin Capitals</u></small>
                                </div>
                            </div>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis vehicula metus quis luctus ultrices. Integer vulputate est
                                id odio iaculis rutrum e
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4">
                        <div className="py-5 px-4 bg-white rounded-3">
                            <div className="d-flex">
                                <div>
                                    <img src={images + "/testimonials/testimonial.png"} alt="" width={'60px'} />
                                </div>
                                <div className="mt-2 ms-3">
                                    <h4 className="mb-0">Mike Bolaji</h4>
                                    <small className="mt-0"><u>Chairman, Fin Capitals</u></small>
                                </div>
                            </div>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis vehicula metus quis luctus ultrices. Integer vulputate est
                                id odio iaculis rutrum e
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4">
                        <div className="py-5 px-4 bg-white rounded-3">
                            <div className="d-flex">
                                <div>
                                    <img src={images + "/testimonials/testimonial.png"} alt="" width={'60px'} />
                                </div>
                                <div className="mt-2 ms-3">
                                    <h4 className="mb-0">Mike Bolaji</h4>
                                    <small className="mt-0"><u>Chairman, Fin Capitals</u></small>
                                </div>
                            </div>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis vehicula metus quis luctus ultrices. Integer vulputate est
                                id odio iaculis rutrum e
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4">
                        <div className="py-5 px-4 bg-white rounded-3">
                            <div className="d-flex">
                                <div>
                                    <img src={images + "/testimonials/testimonial.png"} alt="" width={'60px'} />
                                </div>
                                <div className="mt-2 ms-3">
                                    <h4 className="mb-0">Mike Bolaji</h4>
                                    <small className="mt-0"><u>Chairman, Fin Capitals</u></small>
                                </div>
                            </div>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis vehicula metus quis luctus ultrices. Integer vulputate est
                                id odio iaculis rutrum e
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
