const whyChooseUs: any[] = [
    {
        title: "Expertise",
        content: [
            "Our team of top-tier computer science engineering graduates from the renowned University of Moratuwa brings unmatched expertise to your projects.",
        ],
    },
    {
        title: "Proven Track Record",
        content: [
            "We consistently deliver exceptional results, evidenced by satisfied clients and successful case studies.",
        ],
    },
    {
        title: "Innovation",
        content: [
            "We stay on the forefront of technology trends, providing you with innovative solutions for a competitive edge.",
        ],
    },
    {
        title: "Client-Centric Approach",
        content: [
            "Your goals are our priority;",
            "we tailor solutions to your unique needs, ensuring your success",
        ],
    },
    {
        title: "Cost-Effectiveness",
        content: [
            "We deliver high-quality solutions within your budget, offering exceptional value for your investment",
        ],
    },
    {
        title: "Timely Delivery",
        content: [
            "With a history of meeting project deadlines, you can trust us to deliver on time, every time",
        ],
    },
]

const Faq = () => {
    return (
        <section className="faq section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Why to choose us
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Turn your ideas into Digital Reality
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                At AuroBYTE, we are passionate about innovation
                                and technology. Our focus is clear: delivering
                                exceptional software solutions. Our commitment
                                to quality and innovation drives us to shape the
                                future through every line of code we write. With
                                your goals as our guide, we're here to make
                                technology work for youஃ
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="row">
                        {whyChooseUs.map((item: any, key: number) => (
                            <div
                                className="col-lg-6 col-md-12 col-12 cont"
                                key={key}
                            >
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={"heading" + (key + 1)}
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={
                                                "#collapse" + (key + 1)
                                            }
                                            aria-expanded="false"
                                            aria-controls={
                                                "collapse" + (key + 1)
                                            }
                                        >
                                            <span className="title">
                                                {item.title}
                                            </span>
                                            <i className="lni lni-plus" />
                                        </button>
                                    </h2>
                                    <div
                                        id={"collapse" + (key + 1)}
                                        className="accor{dion-collapse collapse"
                                        aria-labelledby={"heading" + (key + 1)}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {item.content.map(
                                                (
                                                    text: string,
                                                    innerKey: number
                                                ) => (
                                                    <p
                                                        key={
                                                            String(key) +
                                                            String(innerKey)
                                                        }
                                                    >
                                                        {text}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
