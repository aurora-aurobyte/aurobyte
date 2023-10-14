import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const Login = () => {
    return (
        <>
            <Helmet>
                <title> Login | AuroByte </title>
            </Helmet>
            <header className="header navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                {/* Start Navbar */}
                                <nav className="navbar navbar-expand-lg">
                                    <a
                                        className="navbar-brand"
                                        href="index.html"
                                    >
                                        <img
                                            src="assets/images/logo/white-logo.svg"
                                            alt="Logo"
                                        />
                                    </a>
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
                                        <ul
                                            id="nav"
                                            className="navbar-nav ms-auto"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    href="index.html"
                                                    aria-label="Toggle navigation"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="about-us.html"
                                                    aria-label="Toggle navigation"
                                                >
                                                    About
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="dd-menu active collapsed"
                                                    href="javascript:void(0)"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-1"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                >
                                                    Pages
                                                </a>
                                                <ul
                                                    className="sub-menu collapse"
                                                    id="submenu-1-1"
                                                >
                                                    <li className="nav-item">
                                                        <a href="about-us.html">
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pricing.html">
                                                            Our Pricing
                                                        </a>
                                                    </li>
                                                    <li className="nav-item active">
                                                        <a href="signin.html">
                                                            Sign In
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="signup.html">
                                                            Sign Up
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="reset-password.html">
                                                            Reset Password
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="mail-success.html">
                                                            Mail Success
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="404.html">
                                                            404 Error
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="dd-menu collapsed"
                                                    href="javascript:void(0)"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                >
                                                    Blog
                                                </a>
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
                                                        <a href="view-blog">
                                                            Blog Single
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="contact.html"
                                                    aria-label="Toggle navigation"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* navbar collapse */}
                                    <div className="button">
                                        <a href="signup.html" className="btn">
                                            Get started
                                        </a>
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
            {/* End Header Area */}
            {/* Start Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Sign In</h1>
                                <ul className="breadcrumb-nav">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>Sign In</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* Start Account Sign In Area */}
            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <form
                                className="card login-form inner-content"
                                method="post"
                            >
                                <div className="card-body">
                                    <div className="title">
                                        <h3>Sign In Now</h3>
                                        <p>
                                            Sign in by entering the information
                                            below.
                                        </p>
                                    </div>
                                    <div className="input-head">
                                        <div className="form-group input-group">
                                            <label>
                                                <i className="lni lni-envelope" />
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                id="reg-email"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group input-group">
                                            <label>
                                                <i className="lni lni-lock-alt" />
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="reg-pass"
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between bottom-content">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input width-auto"
                                                id="exampleCheck1"
                                            />
                                            <label className="form-check-label">
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            className="lost-pass"
                                            href="reset-password.html"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="or">
                                        <span>Or</span>
                                    </div>
                                    <div className="alt-option">
                                        <span className="small-title">
                                            Sign in with your work email
                                        </span>
                                        <a
                                            href="javascript:void(0)"
                                            className="option-button"
                                        >
                                            <img
                                                src="assets/images/account-login/google.png"
                                                alt="#"
                                            />
                                            Sign In With Google
                                        </a>
                                    </div>
                                    <h4 className="create-account">
                                        Don't have an account?
                                        <a href="signup.html">Sign Up Here</a>
                                    </h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Account Sign In Area */}
            {/* Start Footer Area */}
            <footer className="footer section">
                {/* Start Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img
                                                    src="assets/images/logo/white-logo.svg"
                                                    alt="#"
                                                />
                                            </a>
                                        </div>
                                        <p>
                                            Making the world a better place
                                            through constructing elegant
                                            hierarchies.
                                        </p>
                                        <h4 className="social-title">
                                            Follow Us On:
                                        </h4>
                                        <ul className="social">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-facebook-filled" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-twitter-original" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-linkedin-original" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-pinterest" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-link">
                                        <h3>Solutions</h3>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Analytics
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Commerce
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Insights
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-link">
                                        <h3>Support</h3>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Documentation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Guides
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    API Status
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer newsletter">
                                        <h3>Subscribe</h3>
                                        <p>
                                            Subscribe to our newsletter for the
                                            latest updates
                                        </p>
                                        <form
                                            action="#"
                                            method="get"
                                            target="_blank"
                                            className="newsletter-form"
                                        >
                                            <input
                                                name="EMAIL"
                                                placeholder="Email address"
                                                required
                                                type="email"
                                            />
                                            <div className="button">
                                                <button className="sub-btn">
                                                    <i className="lni lni-envelope" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Footer Top */}
                {/* Start Copyright Area */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <p className="copyright-text">
                                        © 2023 CryptoLand - All Rights Reserved
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <p className="copyright-owner">
                                        Designed and Developed by
                                        <a
                                            href="https://graygrids.com/"
                                            rel="nofollow"
                                            target="_blank"
                                        >
                                            GrayGrids
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Copyright Area */}
            </footer>
        </>
    )
}

export default Login
