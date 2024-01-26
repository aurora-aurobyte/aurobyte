import Breadcrumbs from "components/BreadCrumbs"
// import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const UiUxDesigner = () => {
    const responsibilities = [
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows and sitemaps",
        "Design graphic user interface elements, like menus, tabs and widgets",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate how sites function and look like",
        "Create original graphic designs (e.g. images, sketches and tables)",
        "Conduct layout adjustments based on user feedback",
        "Adhere to style standards on fonts, colors, and images",
    ]

    const requirements = [
        "Proven work experience as a UI/UX Designer or similar role",
        "Portfolio of design projects",
        "Knowledge of wireframing and prototyping tools such as Figma, Sketch, In Vision, Adobe Illustrator and Photoshop",
        "Team player, strong communication skills to collaborate with various stakeholders",
        "Good time-management skills",
        "BSc in Design, Computer Science or relevant field",
    ]
    return (
        <>
            {/* <Helmet>
                <title> UI/UX Designer </title>
            </Helmet> */}
            <Breadcrumbs current="Vaconcies" />
            <div>
                <section className="about section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="">
                                <div
                                    className="content wow fadeInRight"
                                    data-wow-delay=".4s"
                                >
                                    <h2>UI/UX Designer</h2>
                                    <h4>Remote</h4>
                                    <p>
                                        UI/UX Designer responsibilities include
                                        gathering user requirements, designing
                                        graphic elements and building navigation
                                        components. To be successful in this
                                        role, you should have experience with
                                        design software and wireframe tools. If
                                        you also have a portfolio of
                                        professional design projects that
                                        includes work with web/mobile
                                        applications, we’d like to meet you.
                                        Ultimately, you’ll create both
                                        functional and appealing features that
                                        address our clients’ needs and help us
                                        grow our customer base.
                                    </p>
                                    <h6 className="mt-4">
                                        Key Responsibilities:
                                    </h6>
                                    <ul>
                                        {responsibilities.map(
                                            (responsibility, index) => (
                                                <li key={index}>
                                                    * {responsibility}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <h6 className="mt-4">Requirements</h6>
                                    <ul>
                                        {requirements.map(
                                            (requirement, index) => (
                                                <li key={index}>
                                                    *{requirement}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <p>
                                        Should you find yourself interested,
                                        please forward your resume to the
                                        provided email address.
                                    </p>

                                    <div className="button">
                                        <RouterLink
                                            href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20Ui/Ux%20Designer"
                                            className="btn"
                                        >
                                            <i className="lni lni-envelope" />{" "}
                                            Apply Now
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default UiUxDesigner
