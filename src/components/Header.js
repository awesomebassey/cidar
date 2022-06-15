import {Link, NavLink} from 'react-router-dom'

export default function Header() {

    const images = process.env.PUBLIC_URL + "/assets/images"

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={images + "/logos/type-black.png"} alt="" height="24" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" aria-current="page" to={'/projects'}>Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to={'/about'}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to={'/start'}>Start a Project</NavLink>
                            </li>
                        </ul>
                        <Link className="btn btn-success ms-lg-3 nav-btn py-2 px-4" to={'/contact'}>Reach Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
