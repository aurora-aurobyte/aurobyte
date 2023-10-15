import Breadcrumbs from "components/BreadCrumbs"
import CustomerReviews from "components/cutomerReviews/CustomerReviews"
import OurTeam from "components/ourTeam/OurTeam"
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

                <section className="style2 section py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Who we are?
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Our Expertise
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        At AuroByte Technologies, we specialize
                                        in a wide array of services designed to
                                        meet the diverse needs of businesses in
                                        today's digital landscape. Our expertise
                                        ranges from custom software development
                                        and web design to mobile app creation,
                                        ensuring that your digital presence is
                                        not just cutting-edge but tailored to
                                        your specific requirements. We also
                                        excel in software testing, UI/UX design,
                                        cloud services, DevOps, and more,
                                        offering comprehensive solutions that
                                        enhance efficiency and drive success.
                                        With our team of experts headquartered
                                        in the thriving tech hub of Sri Lanka,
                                        we're dedicated to delivering top-notch
                                        solutions with unmatched agility, making
                                        us your ideal partner in achieving your
                                        digital goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="style2 section py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3
                                        className="wow zoomIn"
                                        data-wow-delay=".2s"
                                    >
                                        Why Choose AuroByte Technologies?
                                    </h3>
                                    <h2
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Team of experts
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        We pride ourselves on being a team of
                                        experts who are not just committed to
                                        delivering top-notch solutions but also
                                        dedicated to swift project delivery. We
                                        understand that in today's fast-paced
                                        digital world, time is of the essence.
                                        Our experience, creativity, and passion
                                        are the driving forces behind every
                                        project we undertake.
                                        <br />
                                        Join us on this exciting journey, and
                                        let's shape the future of technology
                                        together. Your success is our mission.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Start Testimonials Area */}
                <CustomerReviews />
                {/* End Testimonial Area */}
                {/* Start Team Area */}
                <OurTeam />
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
