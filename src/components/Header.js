import { Link, NavLink } from 'react-router-dom'

export default function Header({ transparent }) {
    const images = process.env.PUBLIC_URL + "/assets/images"
    let initialImage;
    let initialClasses;
    if (transparent) {
        initialImage = images + "/logos/type-black.png"
        initialClasses = "nav-link fw-bold"
    } else {
        initialImage = images + "/logos/type-white.png"
        initialClasses = "nav-link fw-bold text-white"
    }
    const $ = window.$
    $(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('active');
                $('.navbar img').attr('src', images + "/logos/type-black.png");
                $('.nav-link').each(function () { $(this).removeClass('text-white') })
            } else {
                $('.navbar').removeClass('active');
                $('.navbar img').attr('src', initialImage);
                $('.nav-link').each(function (e) { $(e).addClass(initialClasses) })
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
                            <li className="nav-item">
                                <NavLink className={initialClasses} to={'/projects'}>Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={initialClasses} to={'/about'}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={initialClasses} to={'/start'}>Start a Project</NavLink>
                            </li>
                        </ul>
                        <Link className="btn btn-success ms-lg-3 nav-btn py-2 px-4" to={'/contact'}>Reach Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
