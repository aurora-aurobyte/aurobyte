import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const SeIos = () => {
    const responsibilities = [
        "Design, develop, and maintain high-quality iOS application.",
        "Write Unit tests, functional, integration and UI tests, for yourself and others.",
        "Provide ticket estimates and work with team members to define, design, and ship new features.",
        "Work on bug fixing and continually improving application performance.",
        "Maintain code quality, structure, and test automation.",
        "Stay up-to-date with the latest industry trends and technologies, and incorporate them into our development processes.",
        "Mentor and provide guidance to junior developers as needed.",
        "Participate in code reviews to ensure code quality and consistency.",
    ]

    const requirements = [
        "BSc. or BSc. Engineering degree in Computer Science or MSc. in Computer Science.",
        "1+ years of industrial experience.",
        "Proficiency in Swift or Objective-C programming languages.",
        "Knowledge of RESTful APIs, Web Sockets and JSON.",
        "Familiarity with CI/CD pipelines and version control systems (e.g., Git).",
        "Excellent problem-solving and communication skills.",
        "Strong analytical and problem-solving skills.",
        "Trading and Investing knowledge or experience is a plus.",
        "Knowledge of modern web frameworks React or Angular a plus.",
    ]

    return (
        <>
            <Helmet>
                <title> Software Engineer iOS </title>
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
                                    <h2>Software Engineer - iOS</h2>
                                    <h4>Remote</h4>
                                    <p>
                                        As an iOS Developer at AuroByte, you
                                        will play a pivotal role in developing
                                        and maintaining our iOS applications.
                                        You will collaborate with
                                        cross-functional teams, including
                                        designers, product managers, and other
                                        developers, to deliver high-quality
                                        software solutions.
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
                                            href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20Software%20Engineer%20-IOS"
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
export default SeIos
