type Props = {
    review: {
        author: string
        position: string
        review: string
        image: string
    }
}

const Review = ({ review: { author, position, review, image } }: Props) => {
    return (
        <div className="col-lg-6 col-12">
            {/* Start Single Testimonial */}
            <div className="single-testimonial">
                <div className="inner-content">
                    <div className="quote-icon">
                        <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                        <p>“{review}”</p>
                    </div>
                    <div className="author">
                        <img src={image} alt="#" />
                        <h4 className="name">
                            {author}
                            <span className="deg">{position}</span>
                        </h4>
                    </div>
                </div>
            </div>
            {/* End Single Testimonial */}
        </div>
    )
}

export default Review
