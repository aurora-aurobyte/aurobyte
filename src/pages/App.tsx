import { RouterLink } from "routes/components"
import { Helmet } from "react-helmet-async"
import Services from "components/landing/Services"
import Portfolio from "components/landing/Portfolio"
import CustomerReviews from "components/cutomerReviews/CustomerReviews"
// import OurTeam from "components/ourTeam/OurTeam"
// import LandingBlogs from "components/landing/LandingBlogs"
// import IntroVideo from "components/landing/IntroVideo"
import Faq from "components/landing/Faq"
import ClientsLogo from "components/landing/ClientsLogo"
import CallAction from "components/landing/CallAction"
import AboutDescription from "components/aboutUs/AboutDescription"

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
                                        We Are AuroByte
                                    </h4>
                                    <h1
                                        className="wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Turning Your Ideas into Digital Reality.
                                    </h1>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        Empowering businesses with cutting-edge
                                        software solutions.
                                        <br />
                                        Your success, our innovation.
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
                <Services />
                {/* End Services Area */}
                {/* Start Portfolio Area*/}
                <Portfolio />
                {/* End Portfolio Area*/}
                {/* Start Intro Video Area */}
                {/* <IntroVideo /> */}
                {/* End Intro Video Area */}
                {/* Start Team Area */}
                {/* <OurTeam /> */}
                {/*/ End Team Area */}

                <AboutDescription />

                {/* Start Testimonials Area */}
                <CustomerReviews />
                {/* End Testimonial Area */}
                {/* Start Blog Section Area */}
                {/* <LandingBlogs /> */}
                {/* End Blog Section Area */}
                {/* Start Faq Area */}
                <Faq />
                {/*/ End Faq Area */}
                {/* Start Clients Logo Area */}
                <ClientsLogo />
                {/* End Clients Logo Area */}
                {/* Start Call Action Area */}
                <CallAction />
                {/* End Call Action Area */}
            </div>
        </>
    )
}

export default IndexApp
