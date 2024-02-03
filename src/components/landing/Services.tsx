"use client"
import { useState } from "react"
import ServiceItem from "./ServiceItem"

const services = [
    {
        title: "Web Development",
        description:
            "Creating stunning and functional websites and web applications.",
        icon: <i className="lni lni-website" />,
    },
    {
        title: "Mobile App Development",
        description: "Crafting mobile apps for seamless experiences.",
        icon: <i className="lni lni-mobile" />,
    },
    {
        title: "E-commerce Solutions",
        description:
            "Building e-commerce solutions for seamless online shopping experiences.",
        icon: <i className="lni lni-printer" />,
    },
    {
        title: "Cloud Services",
        description:
            "Leveraging the power of the cloud for scalable and secure solutions.",
        icon: <i className="lni lni-cloud-network" />,
    },
    {
        title: "Machine Learning Solutions",
        description:
            "We leverage advanced algorithms to extract valuable insights.",
        icon: <i className="lni lni-stats-up" />,
    },
    {
        title: "Maintenance and Support",
        description:
            "Ongoing support and updates to keep your software running.",
        icon: <i className="lni lni-cogs" />,
    },
    // {
    //     title: "Custom Software Development",
    //     description:
    //         "Bespoke software solutions designed to fit your exact requirements.",
    //     icon: <i className="lni lni-display-alt" />,
    // },
    // {
    //     title: "Software Testing and Quality Assurance",
    //     description:
    //         "Ensuring flawless software performance through rigorous testing and quality assurance.",
    //     icon: <i className="lni lni-construction-hammer" />,
    // },
    // {
    //     title: "UI/UX Design",
    //     description:
    //         "Designing user-friendly digital experiences with a creative edge.",
    //     icon: <i className="lni lni-laptop-phone" />,
    // },
    // {
    //     title: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
    //     description:
    //         "Streamlining software development and deployment for efficiency and automation.",
    //     icon: <i className="lni lni-git" />,
    // },
    // {
    //     title: "Consulting and Strategy",
    //     description:
    //         "Expert guidance to shape your technology strategy and future growth.",
    //     icon: <i className="lni lni-stats-up" />,
    // },
    // {
    //     title: "Data Analytics and Business Intelligence",
    //     description: "Turning data into insights for informed decision-making.",
    //     icon: <i className="lni lni-target-revenue" />,
    // },
    // {
    //     title: "Artificial Intelligence (AI) and Machine Learning",
    //     description:
    //         "Unlocking the potential of AI and machine learning for smarter applications.",
    //     icon: <i className="lni lni-graph" />,
    // },
    // {
    //     title: "Content Management Systems (CMS) Development",
    //     description:
    //         "Building customized content management systems for seamless content control.",
    //     icon: <i className="lni lni-database" />,
    // },
    // {
    //     title: "ERP (Enterprise Resource Planning) Software Development",
    //     description:
    //         "Efficient software solutions for integrated business management.",
    //     icon: <i className="lni lni-world" />,
    // },
    // {
    //     title: "IoT (Internet of Things) Development",
    //     description:
    //         "Creating IoT solutions for connected and data-driven smart devices.",
    //     icon: <i className="lni lni-bulb" />,
    // },
    // {
    //     title: "Custom API Development",
    //     description:
    //         "Crafting bespoke APIs for seamless data exchange between systems",
    //     icon: <i className="lni lni-pagination" />,
    // },
    // {
    //     title: "Migration and Legacy System Modernization",
    //     description:
    //         "Upgrading and modernizing outdated systems for enhanced efficiency and security",
    //     icon: <i className="lni lni-certificate" />,
    // },
    // {
    //     title: "Training and Documentation",
    //     description:
    //         "Empowering users with comprehensive training and documentation",
    //     icon: <i className="lni lni-network" />,
    // },
]

const Services = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMoreClick = () => {
        setShowMore((showMore: boolean) => !showMore)
    }

    return (
        <div className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                What we offer
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Our Services
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Explore our comprehensive range of software
                                services designed to meet your every digital
                                need
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services
                        .slice(0, showMore ? services.length : 6)
                        .map((service, id: number) => (
                            <ServiceItem service={service} key={id} />
                        ))}
                </div>
                {services.length > 6 && (
                    <div className="row">
                        <div className="col-12 text-center mt-4">
                            <button
                                className="btn btn-primary"
                                data-filter="*"
                                onClick={handleShowMoreClick}
                            >
                                {showMore ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services
