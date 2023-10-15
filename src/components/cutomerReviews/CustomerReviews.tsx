import Review from "./Review"

const reviews = [
    {
        author: "Nirun",
        position: "Senior BA",
        review: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
        image: "assets/images/testimonial/user.png",
    },
]

const CustomerReviews = () => {
    return (
        <section className="testimonials style2 section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Customer Reviews
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Our Testimonials
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Reviews from our awesome customers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row testimonial-slider">
                    {reviews.map((review: any, id: number) => (
                        <Review review={review} key={id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews
