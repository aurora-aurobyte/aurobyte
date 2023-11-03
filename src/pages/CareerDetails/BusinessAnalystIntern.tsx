import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const BusinessAnalystIntern = () => {
    const responsibilities = [
        "Collaborate with our clients to identify business requirements, functional specifications, and project scope.",
        "Analyze business processes and workflows to identify areas for improvement.",
        "Facilitate meetings and workshops to gather and analyze information, provide feedback, and make recommendations.",
        "Collaborate with the development team to define user stories, acceptance criteria, and estimate effort.",
        "Communicate effectively with the development team to ensure that business requirements are accurately translated into technical specifications.",
    ]

    const requirements = [
        "Currently pursuing a degree in Computer Science, Software Engineering, or a related field.",
        "Excellent analytical, problem-solving, and critical thinking skills.",
        "Strong communication, negotiation, and interpersonal skills.",
        "Proficiency in project management tools, such as JIRA, Confluence, would be an added advantage.",
        "Excellent team player with interest to enjoy work in an informal culture.",
    ]
    return (
        <>
            <Helmet>
                <title> Business Analyst Intern </title>
            </Helmet>
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
                                    <h2>Business Analyst Intern</h2>
                                    <h4>Remote</h4>
                                    <p>
                                        We are looking for a Business Analyst
                                        Inten to join our development team. The
                                        ideal candidate should have a technical
                                        background and excellent communication
                                        skills, as they will be responsible for
                                        collaborating with clients and ensuring
                                        that the project meets business
                                        requirements.
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
                                            href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20Business%20Analyst%20Intern"
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

export default BusinessAnalystIntern
