import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const DevOpsEngineer = () => {
    const responsibilities = [
        "Owning Infra architecture and non-functional requirements for set of projects.",
        "Experience in Design and Integrating Cloud Architecture with Cloud-Native Solutions.",
        "Runs common infrastructure best practices focused on security, operational efficiency & cost efficiency",
        "Strong Microservices based architecture knowledge",
        "Strong understanding of Kubernetes and Docker",
        "Understand usage of SecOps Practices.",
        "Demonstrated experience in developing CICD pipeline to enable faster build with quality, security automated ( such as GitOps Practices would be added advantage ).",
        "Experience in enabling observability embedded in the platform.",
        "Experience building & deploying cloud IAC in an AWS ( Either CrossPlane, Terraform , Cloud Formation ).",
    ]

    const requirements = [
        "BSc. or BSc. Engineering degree in Computer Science or MSc. in Computer Science.",
        "Good understanding of scripting and automation skills.",
        "Exposure to Linux and Windows based environments.",
        "Experience in DevOps Engineering including automation experience with configuration management tools (e.g., Ansible, Kutomize etc).",
        "Experience in CI/CD processes and Agile development.",
        "Experience in toolchains will be an added advantage (e.g., Containerization, Container Orchestrations, CI /CD , SecOps ).",
        "Should be a good communicator, competent to effectively and timely communicate with all technical and nontechnical teams from different territories.",
        "Attention to detail, and good problem-solving skills.",
        "Learn new technologies and theories, and apply them when necessary.",
        "Should be a good team player.",
    ]
    return (
        <>
            <Helmet>
                <title> DevOps Engineer </title>
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
                                    <h2>DevOps Engineer</h2>
                                    <h4>Remote</h4>
                                    <p>
                                        Join our team as a DevOps Engineer at
                                        AuroByte, and be at the forefront of
                                        optimizing our software development and
                                        deployment processes. You'll collaborate
                                        closely with developers, administrators,
                                        and QA experts to ensure the seamless
                                        and efficient operation of our systems.
                                        Your role will focus on automating
                                        deployment, maintaining cloud
                                        infrastructure on AWS, and enhancing
                                        security measures. Contribute to our
                                        high-quality, reliable software
                                        solutions by joining our dedicated team
                                        of experts.
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
                                            href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20DevOps%20Engineer"
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

export default DevOpsEngineer
