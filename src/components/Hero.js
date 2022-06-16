export default function Hero({ title, sub }) {

    const images = process.env.PUBLIC_URL + "/assets/images"

    return (
        <>
            {!title &&
                <div className="container py-5">
                    <div className="py-5 mb-4 hero">
                        <div className="row mb-5 pt-5 mt-2">
                            <div className="col-lg-8">
                                <img src={images + "/hero/bar.png"} alt="hero-bar" height="14px" />
                                <h1>
                                    Creating <span>Realities in <del>3d</del></span>
                                </h1>
                                <h3 className="mt-3">
                                    Bring your product ideas to life with stunning product animations and photorealistic 3D renders.
                                </h3>
                                <button className="btn btn-lg btn-success px-5 py-4 mt-4">Explore <img src={images + "/hero/mask.png"} alt="" /></button>
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
                </div>
            }
            {title &&
                <>
                    <div className="container-fluid hero sub py-5 text-center">
                        <div className="py-5 my-5">
                            <div className="py-5"></div>
                            <h1 className="mt-5 pt-5"><span>{title}</span></h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="text-white">{sub}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
