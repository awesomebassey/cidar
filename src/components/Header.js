import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header({ transparent }) {
    const images = process.env.PUBLIC_URL + "/assets/images"
    let initialImage;
    if (transparent) {
        initialImage = images + "/logos/type-black.png"
    } else {
        initialImage = images + "/logos/type-white.png"
    }
    const $ = window.$
    $(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('active');
                $('.navbar img').attr('src', images + "/logos/type-black.png");
            } else {
                $('.navbar').removeClass('active');
                $('.navbar img').attr('src', initialImage);
            }
        });
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top py-4 navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={initialImage} alt="" height="24" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className={`nav-link fw-bold ${!transparent && 'transparent'}`} to={'/projects'}>Projects</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={`nav-link fw-bold ${!transparent && 'transparent'}`} to={'/about'}>About Us</NavLink>
                            </li>
                        </ul>
                        <motion.a
                            className="btn btn-success ms-lg-3 nav-btn py-2 px-4"
                            href={'mailto:contact@cidar.com'}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 8px #20c997",
                                transition: {type: 'spring', stiffness: 320}
                            }}
                        >
                            Reach Us
                        </motion.a>
                    </div>
                </div>
            </nav>
        </>
    )
}
