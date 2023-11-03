import Breadcrumbs from "components/BreadCrumbs"
import AboutDescription from "components/aboutUs/AboutDescription"
import CustomerReviews from "components/cutomerReviews/CustomerReviews"
import ClientsLogo from "components/landing/ClientsLogo"
// import OurTeam from "components/ourTeam/OurTeam"
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
                                    <h4>We are AuroByte</h4>
                                    <h2>
                                        Turning Your Ideas into Digital Reality.
                                    </h2>
                                    <p>
                                        At AuroByte Technologies, we are more
                                        than just a software company – we are a
                                        collective of passionate individuals who
                                        have united our expertise to craft
                                        digital solutions that empower
                                        businesses. Our journey began with a
                                        shared commitment to innovation,
                                        excellence, and unwavering dedication to
                                        delivering results. We're a team of
                                        experts, and we're excited to share our
                                        story with you.
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

                <AboutDescription />

                {/* Start Testimonials Area */}
                <CustomerReviews />
                {/* End Testimonial Area */}
                {/* Start Team Area */}
                {/* <OurTeam /> */}
                {/*/ End Team Area */}
                {/* Start Clients Logo Area */}
                <ClientsLogo />
                {/* End Clients Logo Area */}
            </div>
        </>
    )
}

export default AboutUs
