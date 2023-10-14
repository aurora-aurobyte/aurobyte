import { RouterLink } from "routes/components"

const Breadcrumbs = ({ current }: { current: string }) => {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                        <div className="breadcrumbs-content">
                            <h1 className="page-title">{current}</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <RouterLink href="/">Home</RouterLink>
                                </li>
                                <li>{current}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
