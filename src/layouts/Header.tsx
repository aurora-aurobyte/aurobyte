import { RouterLink } from "routes/components"

const Header = () => {
    return (
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            {/* Start Navbar */}
                            <nav className="navbar navbar-expand-lg">
                                <RouterLink
                                    className="navbar-brand logo-router"
                                    href="/"
                                >
                                    <img
                                        src="assets/images/logo/logo.png"
                                        alt="Logo"
                                    />
                                </RouterLink>
                                <button
                                    className="navbar-toggler mobile-menu-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarSupportedContent"
                                >
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <RouterLink
                                                href="/"
                                                aria-label="Toggle navigation"
                                            >
                                                Home
                                            </RouterLink>
                                        </li>
                                        <li className="nav-item">
                                            <RouterLink
                                                href="about-us"
                                                aria-label="Toggle navigation"
                                            >
                                                About
                                            </RouterLink>
                                        </li>
                                        <li className="nav-item">
                                            <RouterLink
                                                className="dd-menu collapsed"
                                                href="javascript:void(0)"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Pages
                                            </RouterLink>
                                            <ul
                                                className="sub-menu collapse"
                                                id="submenu-1-1"
                                            >
                                                <li className="nav-item">
                                                    <RouterLink href="about-us">
                                                        About Us
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="pricing">
                                                        Our Pricing
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="signin">
                                                        Sign In
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="signup">
                                                        Sign Up
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="reset-password">
                                                        Reset Password
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="mail-success">
                                                        Mail Success
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="404">
                                                        404 Error
                                                    </RouterLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <RouterLink
                                                className="dd-menu collapsed"
                                                href="javascript:void(0)"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-2"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Blog
                                            </RouterLink>
                                            <ul
                                                className="sub-menu collapse"
                                                id="submenu-1-2"
                                            >
                                                <li className="nav-item">
                                                    <RouterLink href="blogs">
                                                        Blog Grid
                                                    </RouterLink>
                                                </li>
                                                <li className="nav-item">
                                                    <RouterLink href="view-blog">
                                                        Blog Single
                                                    </RouterLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <RouterLink
                                                href="contact"
                                                className="active"
                                                aria-label="Toggle navigation"
                                            >
                                                Contact
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                                {/* navbar collapse */}
                                <div className="button">
                                    <RouterLink href="signup" className="btn">
                                        Get started
                                    </RouterLink>
                                </div>
                            </nav>
                            {/* End Navbar */}
                        </div>
                    </div>
                </div>
                {/* row */}
            </div>
            {/* container */}
        </header>
    )
}

export default Header
