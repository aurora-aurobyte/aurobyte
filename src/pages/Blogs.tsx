import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const Blocks = () => {
    return (
        <>
            <Helmet>
                <title> Blogs | AuroByte </title>
            </Helmet>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">
                                    Blog Grid Sidebar
                                </h1>
                                <ul className="breadcrumb-nav">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>Blog Grid Sidebar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* Start Blog Grid Area */}
            <section className="section blog-grid-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog Grid */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-timer" />
                                                    10 June 2023
                                                </a>
                                                <a
                                                    className="author"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="lni lni-user" />
                                                    Anjelio Joly
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    Branding Involves Developing
                                                    a Strategy to Creating.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-user" />
                                                    Kumila ksusi
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    Design is a Plan or The
                                                    Construction of an Object.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read Blog
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog Grid */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-timer" />
                                                    25 Dec 2023
                                                </a>
                                                <a
                                                    className="author"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="lni lni-user" />
                                                    Alex Jendro
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    The Data-Driven Approach to
                                                    Understanding.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read Blog
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog Grid */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-timer" />
                                                    10 June 2023
                                                </a>
                                                <a
                                                    className="author"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="lni lni-user" />
                                                    Anjelio Joly
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    Branding Involves Developing
                                                    a Strategy to Creating.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-user" />
                                                    Kumila ksusi
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    Design is a Plan or The
                                                    Construction of an Object.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read Blog
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    {/* Start Single Blog Grid */}
                                    <div className="single-blog-grid">
                                        <div className="blog-img">
                                            <RouterLink href="/view-blog">
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
                                                    <i className="lni lni-timer" />
                                                    25 Dec 2023
                                                </a>
                                                <a
                                                    className="author"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="lni lni-user" />
                                                    Alex Jendro
                                                </a>
                                            </div>
                                            <h4>
                                                <RouterLink href="/view-blog">
                                                    The Data-Driven Approach to
                                                    Understanding.
                                                </RouterLink>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                adipscing elitr, sit gifted sed
                                                diam nonumy eirmod tempor
                                                ividunt dolore.
                                            </p>
                                            <div className="button">
                                                <a
                                                    href="/view-blog"
                                                    className="btn"
                                                >
                                                    Read Blog
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Blog Grid */}
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="pagination left">
                                <ul className="pagination-list">
                                    <li>
                                        <a href="javascript:void(0)">Prev</a>
                                    </li>
                                    <li className="active">
                                        <a href="javascript:void(0)">2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">3</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">4</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Next</a>
                                    </li>
                                </ul>
                            </div>
                            {/*/ End Pagination */}
                        </div>
                        <aside className="col-lg-4 col-md-12 col-12">
                            <div className="sidebar">
                                {/* Start Single Widget */}
                                <div className="widget search-widget">
                                    <h5 className="widget-title">
                                        Search This Site
                                    </h5>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Search ..."
                                        />
                                        <button type="submit">
                                            <i className="lni lni-search-alt" />
                                        </button>
                                    </form>
                                </div>
                                {/* End Single Widget */}
                                {/* Start Single Widget */}
                                <div className="widget popular-feeds">
                                    <h5 className="widget-title">
                                        Trending News
                                    </h5>
                                    <div className="popular-feed-loop">
                                        <div className="single-popular-feed">
                                            <div className="feed-desc">
                                                <h6 className="post-title">
                                                    <RouterLink href="/view-blog">
                                                        Bringing Great Design
                                                        Ideas To Completion
                                                    </RouterLink>
                                                </h6>
                                                <span className="time">
                                                    <i className="lni lni-calendar" />
                                                    05th Nov 2023
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-popular-feed">
                                            <div className="feed-desc">
                                                <h6 className="post-title">
                                                    <RouterLink href="/view-blog">
                                                        Live Life Smart And
                                                        Focus On The Positive
                                                    </RouterLink>
                                                </h6>
                                                <span className="time">
                                                    <i className="lni lni-calendar" />
                                                    24th March 2023
                                                </span>
                                            </div>
                                        </div>
                                        <div className="single-popular-feed">
                                            <div className="feed-desc">
                                                <h6 className="post-title">
                                                    <RouterLink href="/view-blog">
                                                        How did we get 1M+
                                                        visitors in 30 days
                                                        without anything!
                                                    </RouterLink>
                                                </h6>
                                                <span className="time">
                                                    <i className="lni lni-calendar" />
                                                    30th Jan 2023
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget */}
                                {/* Start Single Widget */}
                                <div className="widget categories-widget">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul className="custom">
                                        <li>
                                            <a href="javascript:void(0)">
                                                Creative
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Technology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Startup
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Branding
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Web Design
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                                {/* Start Single Widget */}
                                <div className="widget popular-tag-widget">
                                    <h5 className="widget-title">
                                        Popular Tags
                                    </h5>
                                    <div className="tags">
                                        <a href="javascript:void(0)">
                                            Creative
                                        </a>
                                        <a href="javascript:void(0)">
                                            Consultation
                                        </a>
                                        <a href="javascript:void(0)">Case</a>
                                        <a href="javascript:void(0)">Design</a>
                                        <a href="javascript:void(0)">Ui/Ux</a>
                                        <a href="javascript:void(0)">
                                            Graphics Design
                                        </a>
                                        <a href="javascript:void(0)">Popular</a>
                                        <a href="javascript:void(0)">
                                            Marketing
                                        </a>
                                    </div>
                                </div>
                                {/* End Single Widget */}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blocks
