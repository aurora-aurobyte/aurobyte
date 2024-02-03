"use client";
import { useState } from "react"
import PortfolioItem from "./PortfolioItem"

const categories = ["Application", "E-Commerce", "Management"]

const portfolios = [
    {
        category: "Application",
        title: "Electro Leaf",
        image: "assets/images/portfolio/elf.png",
    },
    {
        category: "E-Commerce",
        title: "Pizza Park",
        image: "assets/images/portfolio/pizza-park.png",
    },
    {
        category: "E-Commerce",
        title: "Quaxor",
        image: "assets/images/portfolio/quaxor.png",
    },
    {
        category: "E-Commerce",
        title: "ATS",
        image: "assets/images/portfolio/ats.png",
    },
    {
        category: "Management",
        title: "E-Farmer",
        image: "assets/images/portfolio/e-farmer.png",
    },
]

const Portfolio = () => {
    const [currentCategory, setCurrentCategory] = useState(0)

    const handleCurrentCategoryChange = (category: number) => {
        setCurrentCategory(category)
    }

    return (
        <section className="portfolio-section section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Case Study
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Our Latest Works
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Discover our latest software masterpieces –
                                where innovation and excellence meet in code
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div
                            className="portfolio-btn-wrapper wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <button
                                className={
                                    "portfolio-btn" +
                                    (currentCategory === 0 ? " active" : "")
                                }
                                data-filter="*"
                                onClick={() => handleCurrentCategoryChange(0)}
                            >
                                All
                            </button>
                            {categories.map((category: string, id: number) => (
                                <button
                                    className={
                                        "portfolio-btn" +
                                        (currentCategory === id + 1
                                            ? " active"
                                            : "")
                                    }
                                    data-filter=".branding"
                                    key={category}
                                    onClick={() =>
                                        handleCurrentCategoryChange(id + 1)
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row grid">
                    {portfolios
                        .filter(
                            (portfolio) =>
                                currentCategory === 0 ||
                                portfolio.category ===
                                    categories[currentCategory - 1]
                        )
                        .map((portfolio, id: number) => (
                            <PortfolioItem key={id} portfolio={portfolio} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
