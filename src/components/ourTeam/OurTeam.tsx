import TeamMember from "./TeamMember"

const teamMembers = [
    {
        name: "First Name",
        position: "Co-Founder",
        image: "assets/images/team/team4.jpg",
    },
    {
        name: "First Name",
        position: "Co-Founder",
        image: "assets/images/team/team3.jpg",
    },
]

const OurTeam = () => {
    return (
        <section className="team section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Expert Team
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Meet Our Team
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member: any, id: number) => (
                        <TeamMember key={id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
