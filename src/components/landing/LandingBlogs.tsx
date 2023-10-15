import { RouterLink } from "routes/components"

const LandingBlogs = () => {
    return (
        <section className="blog-section section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Blogs
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Our Latest News
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
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
                                        <i className="lni lni-timer" /> 10 June
                                        2023
                                    </a>
                                    <a
                                        className="author"
                                        href="javascript:void(0)"
                                    >
                                        <i className="lni lni-user" /> Anjelio
                                        Joly
                                    </a>
                                </div>
                                <h4>
                                    <RouterLink href="view-blog">
                                        Branding Involves Developing a Strategy
                                        to Creating.
                                    </RouterLink>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, adipscing elitr,
                                    sit gifted sed diam nonumy eirmod tempor
                                    ividunt dolore.
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
                                        <i className="lni lni-timer" /> 5 Aug
                                        2023
                                    </a>
                                    <a
                                        className="author"
                                        href="javascript:void(0)"
                                    >
                                        <i className="lni lni-user" /> Kumila
                                        ksusi
                                    </a>
                                </div>
                                <h4>
                                    <RouterLink href="view-blog">
                                        Design is a Plan or The Construction of
                                        an Object.
                                    </RouterLink>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, adipscing elitr,
                                    sit gifted sed diam nonumy eirmod tempor
                                    ividunt dolore.
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
                                        <i className="lni lni-timer" /> 25 Dec
                                        2023
                                    </a>
                                    <a
                                        className="author"
                                        href="javascript:void(0)"
                                    >
                                        <i className="lni lni-user" /> Alex
                                        Jendro
                                    </a>
                                </div>
                                <h4>
                                    <RouterLink href="view-blog">
                                        The Data-Driven Approach to
                                        Understanding.
                                    </RouterLink>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, adipscing elitr,
                                    sit gifted sed diam nonumy eirmod tempor
                                    ividunt dolore.
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
    )
}

export default LandingBlogs
