import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title> About Us | AuroByte </title>
            </Helmet>
            <Breadcrumbs current="About Us" />
            <div>
                <section className="about section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div
                                    className="image wow fadeInLeft"
                                    data-wow-delay=".2s"
                                >
                                    <img
                                        src="assets/images/about/about-image.jpg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div
                                    className="content wow fadeInRight"
                                    data-wow-delay=".4s"
                                >
                                    <h4>DECENTRALISED ECONOMY</h4>
                                    <h2>
                                        We’ve built a platform to buy and sell
                                        shares.
                                    </h2>
                                    <p>
                                        Spend real fights effective anything
                                        extra by leading. Mouthwatering leading
                                        how real formula also locked-in have can
                                        mountain thought. Jumbo plus shine sale.
                                    </p>
                                    <div className="list">
                                        <div className="single-list">
                                            <div className="list-icon">
                                                <i className="lni lni-checkmark" />
                                            </div>
                                            <h4>Digital Marketing</h4>
                                            <p>
                                                Quis autem vel eum reprehenderit
                                            </p>
                                        </div>
                                        <div className="single-list">
                                            <div className="list-icon">
                                                <i className="lni lni-checkmark" />
                                            </div>
                                            <h4>Graphics Desing</h4>
                                            <p>
                                                Quis autem vel eum reprehenderit
                                            </p>
                                        </div>
                                        <div className="single-list">
                                            <div className="list-icon">
                                                <i className="lni lni-checkmark" />
                                            </div>
                                            <h4>Consulting Service</h4>
                                            <p>
                                                Quis autem vel eum reprehenderit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Area */}
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
                {/* Start Clients Logo Area */}
                <div className="client-logo">
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
            </div>
        </>
    )
}

export default AboutUs
