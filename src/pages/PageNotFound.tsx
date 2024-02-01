import { RouterLink } from "routes/components"

const PageNotFound = () => {
    return (
        <>
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <h1>404</h1>
                                <h2>
                                    The page you were looking for
                                    <br />
                                    doesn't exist anymore.
                                </h2>
                                <p>It might have been moved or deleted.</p>
                                <div className="button">
                                    <RouterLink href="/" className="btn">
                                        Back to Home
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
