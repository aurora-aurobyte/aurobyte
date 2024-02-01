import Breadcrumbs from "components/BreadCrumbs"

const Contact = () => {
    return (
        <>
            <Breadcrumbs current="Contact" />
            {/* Start Contact Area */}
            <div className="contact-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-widget-wrapper">
                                <div className="main-title">
                                    <h2>Contact Us</h2>
                                    <p>
                                        Have questions or ready to discuss your
                                        project? Reach out to us - we're here to
                                        assist you. Your journey to innovative
                                        software solutions begins with a simple
                                        email,message or call.
                                    </p>
                                </div>
                                <div className="contact-widget-block">
                                    <h3 className="title">Call us</h3>
                                    <p>+94 75 435 9121</p>
                                </div>
                                <div className="contact-widget-block">
                                    <h3 className="title">Email us</h3>
                                    <p>aurobyte.aurora@gmail.com</p>
                                </div>
                                <div className="contact-widget-block">
                                    <h3 className="title">Our Address</h3>
                                    <p>NO 29-4/1, Campell Place, Dehiwala,</p>
                                    <p>Colombo, Sri Lanka 50 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-form">
                                <h3 className="form-title">
                                    Leave a message here
                                </h3>
                                <form
                                    className="form"
                                    method="post"
                                    action="assets/mail/mail.php"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <input
                                                    name="subject"
                                                    type="text"
                                                    placeholder="Subject*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <input
                                                    name="phone"
                                                    type="text"
                                                    placeholder="Phone*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    placeholder="Message*"
                                                    name="message"
                                                    id="message-area"
                                                    className="form-control"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="button">
                                                <button
                                                    type="submit"
                                                    className="btn"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Area */}
            {/* Start Google-map Area */}
            <div className="map-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.2607107900675!2d79.86083464488772!3d6.857873919716473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba7a483c7ed%3A0xd6dd0abef4ad6541!2sOcean%20Legend%20Apartment!5e0!3m2!1sen!2slk!4v1697368475124!5m2!1sen!2slk"
                                        width="100%"
                                        height={500}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Google-map Area */}
        </>
    )
}

export default Contact
