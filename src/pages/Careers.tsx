import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const Careers = () => {
    return (
        <>
            <Helmet>
                <title> Careers | AuroByte </title>
            </Helmet>
            <Breadcrumbs current="Careers" />
            <section id="pricing" className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">
                                    Open vacancies
                                </h3>
                                <h2
                                    className="wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    We're hiring!
                                </h2>
                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    Join the Aurora family and become a vital member of
                                    a team of digital product specialists with a global reputation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {/* Software Engineer */}
                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">Software Engineer -IOS</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">
                                    <RouterLink href="seIos" className="btn">
                                        Apply Now
                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>
                        {/* UI/UX Engineer */}
                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">Software Engineer Intern</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">

                                    <RouterLink href="softwareEngIntern" className="btn">
                                        Apply Now
                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>


                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">Business Analyst Intern</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">

                                    <RouterLink href="businessAnalystIntern" className="btn">
                                        Apply Now
                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>


                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">UI/UX Designer</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">
                                    <RouterLink href="uiUxDEsigner" className="btn">
                                        Apply Now
                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>


                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">Front-End Engineer</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">
                                    <RouterLink href="frontEndEngineer" className="btn">
                                        Apply Now
                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>


                        <div
                            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            {/* Single Table */}
                            <div className="single-table">
                                {/* Table Head */}
                                <div className="table-head">
                                    <h4 className="title">DevOps Engineer</h4>
                                    <p className="sub-title">
                                        Remote
                                    </p>
                                </div>
                                {/* End Table Head */}
                                {/* Start Table Content */}

                                {/* Apply button */}
                                <div className="button">
                                    <RouterLink href="devOpsEngineer" className="btn">
                                        Apply Now

                                    </RouterLink>
                                </div>
                            </div>
                            {/* End Single Table*/}
                        </div>

                    </div>
                    {/* new section end */}


                </div>
            </section>
        </>
    )
}

export default Careers
