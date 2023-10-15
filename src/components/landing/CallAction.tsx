import { RouterLink } from "routes/components"

const CallAction = () => {
    return (
        <section className="call-action">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7 col-12">
                            <div className="text">
                                <h2>
                                    Ready to dive in? <br />
                                    <span>Start your free trial today.</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="button">
                                <RouterLink href="pricing" className="btn">
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
    )
}

export default CallAction
