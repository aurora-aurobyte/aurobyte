type Props = {
    member: {
        name: string
        position: string
        image: string
    }
}

const TeamMember = ({ member: { name, position, image } }: Props) => {
    return (
        <div
            className="col-lg-3 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".9s"
        >
            {/* Start Single Team */}
            <div className="single-team">
                <div className="team-image">
                    <img src={image} alt="#" />
                </div>
                <div className="content">
                    <h4>
                        {name}
                        <span>{position}</span>
                    </h4>
                    <ul className="social">
                        <li>
                            <a href="javascript:void(0)">
                                <i className="lni lni-facebook-filled" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="lni lni-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="lni lni-twitter-original" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="lni lni-linkedin-original" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Single Team */}
        </div>
    )
}

export default TeamMember
