import { ReactNode } from "react"

const ServiceItem = ({
    service: { title, description, icon },
}: {
    service: { title: string; description: string; icon: ReactNode }
}) => {
    return (
        <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".2s"
        >
            <div className="single-service">
                <div className="main-icon">{icon}</div>
                <h4 className="text-title">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceItem
