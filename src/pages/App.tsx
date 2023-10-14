import { RouterLink } from "routes/components"
import { Helmet } from "react-helmet-async"

const IndexApp = () => {
    return (
        <>
            <Helmet>
                <title> Home | AuroByte </title>
            </Helmet>
            <div>
                {/* Start Hero Area */}
                <section className="hero-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="hero-content">
                                    <h4
                                        className="wow fadeInUp"
                                        data-wow-delay=".2s"
                                    >
                                        We Are Creative Digital Agency
                                    </h4>
                                    <h1
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Strategic Concepts For Businesses.
                                    </h1>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        Invest your spare change in Bitcoin and
                                        save with
                                        <br />
                                        crypto to e arn interest in real time.
                                    </p>
                                    <div
                                        className="button wow fadeInUp"
                                        data-wow-delay=".8s"
                                    >
                                        <RouterLink
                                            href="about-us"
                                            className="btn"
                                        >
                                            Discover More
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="hero-image">
                                    <img
                                        className="main-image"
                                        src="assets/images/hero/hero-image.png"
                                        alt="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Hero Area */}
                {/* Start Services Area */}
                <div className="services section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        What we offer
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Our Services
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-grid-alt" />
                                    </div>
                                    <h4 className="text-title">
                                        Brand Identity Design
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-keyword-research" />
                                    </div>
                                    <h4 className="text-title">
                                        Digital Marketing
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".6s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-vector" />
                                    </div>
                                    <h4 className="text-title">
                                        Design and Development
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-book" />
                                    </div>
                                    <h4 className="text-title">
                                        IT Consulting Service
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-cloud-network" />
                                    </div>
                                    <h4 className="text-title">
                                        Cloud Computing
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".6s"
                            >
                                <div className="single-service">
                                    <div className="main-icon">
                                        <i className="lni lni-display-alt" />
                                    </div>
                                    <h4 className="text-title">
                                        Graphics Design
                                    </h4>
                                    <p>
                                        Invest in Bitcoin on the regular or save
                                        with one of the highest interest rates
                                        on the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Services Area */}
                {/* Start Portfolio Area*/}
                <section className="portfolio-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Case Study
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Our Latest Works
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div
                                    className="portfolio-btn-wrapper wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <button
                                        className="portfolio-btn active"
                                        data-filter="*"
                                    >
                                        All
                                    </button>
                                    <button
                                        className="portfolio-btn"
                                        data-filter=".branding"
                                    >
                                        Branding
                                    </button>
                                    <button
                                        className="portfolio-btn"
                                        data-filter=".marketing"
                                    >
                                        Marketing
                                    </button>
                                    <button
                                        className="portfolio-btn"
                                        data-filter=".web"
                                    >
                                        Web Design
                                    </button>
                                    <button
                                        className="portfolio-btn"
                                        data-filter=".graphic"
                                    >
                                        Graphic Design
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row grid">
                            <div className="col-lg-4 col-md-6 grid-item branding marketing">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-1.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>Branding</span>
                                            <h4>Product Branding</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item marketing graphic">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-2.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>Graphics Design</span>
                                            <h4>Packaging Design</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item branding">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-3.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>Branding</span>
                                            <h4>Product Branding</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item web">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-4.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>Web Development</span>
                                            <h4>Beauty Care Web Apps</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item graphic">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-5.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>Graphics Design</span>
                                            <h4>Mocup Design</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item web">
                                <div className="portfolio-item-wrapper">
                                    <div className="portfolio-img">
                                        <img
                                            src="assets/images/portfolio/pf-6.jpg"
                                            alt="portfolio"
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span>App Development</span>
                                            <h4>Mobile Apps Design</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Portfolio Area*/}
                {/* Start Intro Video Area */}
                <section className="intro-video-area section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="inner-content-head">
                                    <div className="inner-content">
                                        <img
                                            className="shape1"
                                            src="assets/images/video/shape1.svg"
                                            alt="#"
                                        />
                                        <img
                                            className="shape2"
                                            src="assets/images/video/shape2.svg"
                                            alt="#"
                                        />
                                        <div className="section-title">
                                            <span
                                                className="wow zoomIn"
                                                data-wow-delay=".2s"
                                            >
                                                Create your own experience
                                            </span>
                                            <h2
                                                className="wow fadeInUp"
                                                data-wow-delay=".4s"
                                            >
                                                Watch Our intro video
                                            </h2>
                                            <p
                                                className="wow fadeInUp"
                                                data-wow-delay=".6s"
                                            >
                                                There are many variations of
                                                passages of Lorem Ipsum
                                                available, but the majority have
                                                suffered alteration in some
                                                form.
                                            </p>
                                        </div>
                                        <div className="intro-video-play">
                                            <div
                                                className="play-thumb wow zoomIn"
                                                data-wow-delay=".2s"
                                            >
                                                <a
                                                    href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                                    className="glightbox video"
                                                >
                                                    <i className="lni lni-play" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Intro Video Area */}
                {/* Start Team Area */}
                <section className="team section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Expert Team
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Meet Our Team
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                {/* Start Single Team */}
                                <div className="single-team">
                                    <div className="team-image">
                                        <img
                                            src="assets/images/team/team4.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            Deco Milan
                                            <span>Founder</span>
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
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>
                            <div
                                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                {/* Start Single Team */}
                                <div className="single-team">
                                    <div className="team-image">
                                        <img
                                            src="assets/images/team/team1.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            Liza Marko
                                            <span>Developer</span>
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
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>
                            <div
                                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                {/* Start Single Team */}
                                <div className="single-team">
                                    <div className="team-image">
                                        <img
                                            src="assets/images/team/team2.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            John Smith
                                            <span>Designer</span>
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
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>
                            <div
                                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".9s"
                            >
                                {/* Start Single Team */}
                                <div className="single-team">
                                    <div className="team-image">
                                        <img
                                            src="assets/images/team/team3.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            Amion Doe
                                            <span>Co-Founder</span>
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
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*/ End Team Area */}
                {/* Start Testimonials Area */}
                <section className="testimonials style2 section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Customer Reviews
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Our Testimonials
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonial-slider">
                            <div className="col-lg-6 col-12">
                                {/* Start Single Testimonial */}
                                <div className="single-testimonial">
                                    <div className="inner-content">
                                        <div className="quote-icon">
                                            <i className="lni lni-quotation" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                “A vast number of clients decide
                                                to create dedicated software is
                                                the online store. It is nothing
                                                but a website with a catalog of
                                                products and the possibility.”
                                            </p>
                                        </div>
                                        <div className="author">
                                            <img
                                                src="assets/images/testimonial/testi-1.png"
                                                alt="#"
                                            />
                                            <h4 className="name">
                                                Somalia D Silva
                                                <span className="deg">
                                                    Business Manager
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                            <div className="col-lg-6 col-12">
                                {/* Start Single Testimonial */}
                                <div className="single-testimonial">
                                    <div className="inner-content">
                                        <div className="quote-icon">
                                            <i className="lni lni-quotation" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                “A vast number of clients decide
                                                to create dedicated software is
                                                the online store. It is nothing
                                                but a website with a catalog of
                                                products and the possibility.”
                                            </p>
                                        </div>
                                        <div className="author">
                                            <img
                                                src="assets/images/testimonial/testi-2.png"
                                                alt="#"
                                            />
                                            <h4 className="name">
                                                David Warner
                                                <span className="deg">
                                                    Web Developer
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                            <div className="col-lg-6 col-12">
                                {/* Start Single Testimonial */}
                                <div className="single-testimonial">
                                    <div className="inner-content">
                                        <div className="quote-icon">
                                            <i className="lni lni-quotation" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                “A vast number of clients decide
                                                to create dedicated software is
                                                the online store. It is nothing
                                                but a website with a catalog of
                                                products and the possibility.”
                                            </p>
                                        </div>
                                        <div className="author">
                                            <img
                                                src="assets/images/testimonial/testi-3.png"
                                                alt="#"
                                            />
                                            <h4 className="name">
                                                Jems Gilario
                                                <span className="deg">
                                                    Graphics Designer
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                            <div className="col-lg-6 col-12">
                                {/* Start Single Testimonial */}
                                <div className="single-testimonial">
                                    <div className="inner-content">
                                        <div className="quote-icon">
                                            <i className="lni lni-quotation" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                “A vast number of clients decide
                                                to create dedicated software is
                                                the online store. It is nothing
                                                but a website with a catalog of
                                                products and the possibility.”
                                            </p>
                                        </div>
                                        <div className="author">
                                            <img
                                                src="assets/images/testimonial/testi-2.png"
                                                alt="#"
                                            />
                                            <h4 className="name">
                                                David Warner
                                                <span className="deg">
                                                    Web Developer
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                            <div className="col-lg-6 col-12">
                                {/* Start Single Testimonial */}
                                <div className="single-testimonial">
                                    <div className="inner-content">
                                        <div className="quote-icon">
                                            <i className="lni lni-quotation" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                “A vast number of clients decide
                                                to create dedicated software is
                                                the online store. It is nothing
                                                but a website with a catalog of
                                                products and the possibility.”
                                            </p>
                                        </div>
                                        <div className="author">
                                            <img
                                                src="assets/images/testimonial/testi-3.png"
                                                alt="#"
                                            />
                                            <h4 className="name">
                                                Jems Gilario
                                                <span className="deg">
                                                    Graphics Designer
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Testimonial Area */}
                {/* Start Blog Section Area */}
                <section className="blog-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Blogs
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Our Latest News
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                {/* Start Single Blog Grid */}
                                <div className="single-blog-grid">
                                    <div className="blog-img">
                                        <RouterLink href="view-blog">
                                            <img
                                                src="assets/images/blog/blog-1.png"
                                                alt="#"
                                            />
                                        </RouterLink>
                                    </div>
                                    <div className="blog-content">
                                        <div className="meta-info">
                                            <a
                                                className="date"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-timer" />{" "}
                                                10 June 2023
                                            </a>
                                            <a
                                                className="author"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-user" />{" "}
                                                Anjelio Joly
                                            </a>
                                        </div>
                                        <h4>
                                            <RouterLink href="view-blog">
                                                Branding Involves Developing a
                                                Strategy to Creating.
                                            </RouterLink>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            adipscing elitr, sit gifted sed diam
                                            nonumy eirmod tempor ividunt dolore.
                                        </p>
                                        <div className="button">
                                            <RouterLink
                                                href="view-blog"
                                                className="btn"
                                            >
                                                Read More
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog Grid */}
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".6s"
                            >
                                {/* Start Single Blog */}
                                <div className="single-blog-grid">
                                    <div className="blog-img">
                                        <RouterLink href="view-blog">
                                            <img
                                                src="assets/images/blog/blog-2.png"
                                                alt="#"
                                            />
                                        </RouterLink>
                                    </div>
                                    <div className="blog-content">
                                        <div className="meta-info">
                                            <a
                                                className="date"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-timer" />{" "}
                                                5 Aug 2023
                                            </a>
                                            <a
                                                className="author"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-user" />{" "}
                                                Kumila ksusi
                                            </a>
                                        </div>
                                        <h4>
                                            <RouterLink href="view-blog">
                                                Design is a Plan or The
                                                Construction of an Object.
                                            </RouterLink>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            adipscing elitr, sit gifted sed diam
                                            nonumy eirmod tempor ividunt dolore.
                                        </p>
                                        <div className="button">
                                            <RouterLink
                                                href="view-blog"
                                                className="btn"
                                            >
                                                Read Blog
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog Grid */}
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                                data-wow-delay=".8s"
                            >
                                {/* Start Single Blog Grid */}
                                <div className="single-blog-grid">
                                    <div className="blog-img">
                                        <RouterLink href="view-blog">
                                            <img
                                                src="assets/images/blog/blog-3.png"
                                                alt="#"
                                            />
                                        </RouterLink>
                                    </div>
                                    <div className="blog-content">
                                        <div className="meta-info">
                                            <a
                                                className="date"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-timer" />{" "}
                                                25 Dec 2023
                                            </a>
                                            <a
                                                className="author"
                                                href="javascript:void(0)"
                                            >
                                                <i className="lni lni-user" />{" "}
                                                Alex Jendro
                                            </a>
                                        </div>
                                        <h4>
                                            <RouterLink href="view-blog">
                                                The Data-Driven Approach to
                                                Understanding.
                                            </RouterLink>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            adipscing elitr, sit gifted sed diam
                                            nonumy eirmod tempor ividunt dolore.
                                        </p>
                                        <div className="button">
                                            <RouterLink
                                                href="view-blog"
                                                className="btn"
                                            >
                                                Read Blog
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog Grid */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Blog Section Area */}
                {/* Start Faq Area */}
                <section className="faq section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Faq
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        frequently asked questions
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading1"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse1"
                                                aria-expanded="false"
                                                aria-controls="collapse1"
                                            >
                                                <span className="title">
                                                    Can I cancel my subscription
                                                    at anytime?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse1"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading1"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam consectetur sit amet
                                                    ante nec vulputate. Nulla
                                                    aliquam, justo auctor
                                                    consequat tincidunt, arcu
                                                    erat mattis lorem.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam consectetur sit amet
                                                    ante nec vulputate.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading2"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse2"
                                                aria-expanded="false"
                                                aria-controls="collapse2"
                                            >
                                                <span className="title">
                                                    Can I change my plan later
                                                    on?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading2"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Anim pariatur cliche
                                                    reprehenderit, enim eiusmod
                                                    high life accusamus terry
                                                    richardson ad squid. 3 wolf
                                                    moon officia aute. non
                                                    cupidatat skateboard dolor
                                                    brunch. Foosd truck quinoa
                                                    nesciunt laborum eiusmod.
                                                    Brunch 3 wolf moon tempor.
                                                </p>
                                                <p>
                                                    sunt alqua put a bird on it
                                                    squid single-origin coffee
                                                    nulla assumenda shoreditch
                                                    et. Nihil anim ke ffiyeh
                                                    helvetica, craft beer labore
                                                    wes anderson cred nesciunt
                                                    sapiente ea proident.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading3"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse3"
                                                aria-expanded="false"
                                                aria-controls="collapse3"
                                            >
                                                <span className="title">
                                                    Will you renew my
                                                    subscription automatically?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading3"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Voluptas expedita,
                                                    repellendus est nemo cum
                                                    quibusdam optio, voluptate
                                                    hic a tempora facere, nihil
                                                    non itaque alias similique
                                                    quas quam odit consequatur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 xs-margin">
                                <div
                                    className="accordion"
                                    id="accordionExample2"
                                >
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading11"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse11"
                                                aria-expanded="false"
                                                aria-controls="collapse11"
                                            >
                                                <span className="title">
                                                    How many sites can I install
                                                    the widgets of this app to?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse11"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading11"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam consectetur sit amet
                                                    ante nec vulputate. Nulla
                                                    aliquam, justo auctor
                                                    consequat tincidunt, arcu
                                                    erat mattis lorem.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Aliquam consectetur sit amet
                                                    ante nec vulputate.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading22"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse22"
                                                aria-expanded="false"
                                                aria-controls="collapse22"
                                            >
                                                <span className="title">
                                                    Do you offer any discounts?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse22"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading22"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Anim pariatur cliche
                                                    reprehenderit, enim eiusmod
                                                    high life accusamus terry
                                                    richardson ad squid. 3 wolf
                                                    moon officia aute. non
                                                    cupidatat skateboard dolor
                                                    brunch. Foosd truck quinoa
                                                    nesciunt laborum eiusmod.
                                                    Brunch 3 wolf moon tempor.
                                                </p>
                                                <p>
                                                    sunt alqua put a bird on it
                                                    squid single-origin coffee
                                                    nulla assumenda shoreditch
                                                    et. Nihil anim ke ffiyeh
                                                    helvetica, craft beer labore
                                                    wes anderson cred nesciunt
                                                    sapiente ea proident.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="heading33"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse33"
                                                aria-expanded="false"
                                                aria-controls="collapse33"
                                            >
                                                <span className="title">
                                                    Do I get updates for the
                                                    app?
                                                </span>
                                                <i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse33"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading33"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Voluptas expedita,
                                                    repellendus est nemo cum
                                                    quibusdam optio, voluptate
                                                    hic a tempora facere, nihil
                                                    non itaque alias similique
                                                    quas quam odit consequatur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*/ End Faq Area */}
                {/* Start Clients Logo Area */}
                <div className="client-logo bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-12 text-center">
                                <div className="single-logo">
                                    <img
                                        src="assets/images/client-logo/graygrids-logo.svg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 text-center">
                                <div className="single-logo">
                                    <img
                                        src="assets/images/client-logo/lineicons-logo.svg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 text-center">
                                <div className="single-logo">
                                    <img
                                        src="assets/images/client-logo/ayro-logo.svg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 text-center">
                                <div className="single-logo">
                                    <img
                                        src="assets/images/client-logo/uideck-logo.svg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Clients Logo Area */}
                {/* Start Call Action Area */}
                <section className="call-action">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 col-12">
                                    <div className="text">
                                        <h2>
                                            Ready to dive in? <br />
                                            <span>
                                                Start your free trial today.
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 col-12">
                                    <div className="button">
                                        <RouterLink
                                            href="pricing"
                                            className="btn"
                                        >
                                            Get started
                                        </RouterLink>
                                        <RouterLink
                                            href="about-us"
                                            className="btn btn-alt"
                                        >
                                            Learn More
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call Action Area */}
            </div>
        </>
    )
}

export default IndexApp
