type props = {
    portfolio: {
        category: string
        title: string
        image: string
    }
}

const PortfolioItem = ({ portfolio: { category, title, image } }: props) => {
    return (
        <div className="col-lg-4 col-md-6 grid-item branding marketing">
            <div className="portfolio-item-wrapper">
                <div className="portfolio-img">
                    <img src={image} alt="portfolio" />
                </div>
                <div className="portfolio-overlay">
                    <div className="overlay-content">
                        <span>{category}</span>
                        <h4>{title}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
