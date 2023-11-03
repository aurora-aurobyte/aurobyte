import Breadcrumbs from "components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RouterLink } from "routes/components"

const SoftwareEngIntern = () => {
    const responsibilities = [
        "Collaborate with the development team to design, develop, and test software solutions.",
        "Assist in the implementation and maintenance of software applications, ensuring adherence to coding standards and best practices.",
        "Participate in the entire software development lifecycle, including requirements gathering, design, coding, testing, and deployment.",
        "Debug and troubleshoot software issues, identifying and implementing solutions to enhance application performance and functionality.",
        "Conduct research and propose improvements to existing software systems or processes.",
        "Write and maintain technical documentation, including design specifications, user manuals, and troubleshooting guides.",
        "Collaborate with cross-functional teams, such as product management and quality assurance, to deliver high-quality software solutions.",
    ]

    const requirements = [
        "Currently pursuing a degree in Computer Science, Software Engineering, or a related field.",
        "Strong understanding of object-oriented programming concepts and principles.",
        "Proficiency in one or more programming languages, such as Java, Python, or JavaScript.",
        "Familiarity with web development technologies, frameworks, and libraries (e.g., HTML, CSS, React, Spring, Flutter, Lambda, AWS).",
        "Knowledge of software development methodologies, version control systems, and agile practices.",
        "Strong problem-solving and analytical skills, with the ability to debug and resolve complex technical issues.",
        "Excellent communication and collaboration skills, with the ability to work effectively in a team environment.",
        "Self-motivated and eager to learn, with a strong passion for software development.",
    ]
    return (
        <>
            <Helmet>
                <title> About Us | AuroByte </title>
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
                                    <h2>Software Engineer Intern</h2>
                                    <h4>Remote</h4>
                                    <p>
                                        We are seeking a talented and
                                        enthusiastic Software Engineer Intern to
                                        join our dynamic and innovative team. As
                                        a Software Engineer Intern, you will
                                        have the opportunity to work on
                                        real-world projects, collaborate with
                                        experienced software engineers, and gain
                                        hands-on experience in a professional
                                        software development environment. This
                                        internship is designed to provide
                                        valuable learning opportunities and
                                        contribute to your growth as a software
                                        engineer.
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
                                            href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20Software%20Engineer%20Intern"
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

export default SoftwareEngIntern
