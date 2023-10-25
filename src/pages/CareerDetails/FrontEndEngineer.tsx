import Breadcrumbs from 'components/BreadCrumbs'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SiGmail } from 'react-icons/si'
import { RouterLink } from 'routes/components'

const FrontEndEngineer = () => {
    const responsibilities = [
        "Work closely with the Architect, Technical Leads, Product Managers, and rest of the team to create complex high-quality products.",
        "Evaluate code quality, performance, and security of the project handled. ",
        "Design, explain, and share technical plans and decisions with the relevant stakeholders. ",
        "Understand, and develop design patterns and usability concepts of modular applications."
    ];

    const requirements = [
        "BSc. or BSc. Engineering degree in Computer Science or MSc. in Computer Science.",
        "Knowledge of front-end technologies in React & TypeScript.",
        "Proven ability to create modern responsive web UI stack and technology ecosystem using React and a solid understanding of CSS for responsive web applications.",
        "Strong coding skills in JS & React, with a focus on well-structured code that aligns with coding guidelines and conventions.",
        "Proactive testing to ensure reliability and functionality.",
        "Commitment to delivering high-quality work, including addressing defects promptly."

    ];
    return (
        <>
            <Helmet>
                <title> Front-End Engineer </title>
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
                                    <h2>
                                        Front-End Engineer
                                    </h2>
                                    <h4>Remote</h4>
                                    <p>
                                        We are looking for a driven, enthusiastic, and versatile individual to work directly with our product and engineering team. The ideal candidate should eager to learn and tackle unique problems that come about during development, and focus on continuous improvement and integration of our products.
                                    </p>
                                    <h6 className="spacer">Key Responsibilities:</h6>
                                    <ul>
                                        {responsibilities.map((responsibility, index) => (
                                            <li key={index}>* {responsibility}</li>
                                        ))}
                                    </ul>
                                    <h6 className="spacer">Requirements</h6>
                                    <ul>
                                        {requirements.map((requirement, index) => (
                                            <li key={index}>*{requirement}</li>
                                        ))}
                                    </ul>
                                    <p>Should you find yourself interested, please forward your resume to the provided email address.</p>

                                    <div className="button">

                                        <RouterLink href="mailto:aurobyte.aurora@gmail.com?subject=Application%20for%20Front-End%20Developer" className="btn">
                                            <SiGmail /> Apply Now
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

export default FrontEndEngineer