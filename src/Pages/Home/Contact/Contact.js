import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                <h3><span>Contact Us</span></h3>
                <p>You Are Welcome If You Want To Visit Our Office Although We Are Always Active By Email And Call</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-6">
                    <div className="info-box mb-4">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>No. 88, Zone 1, Shangshanlang Village, <br></br>
                    JiangKou Street, Huangyan District,
                    Taizhou City, Zheiiang Province, China</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>sales@agriequipment.cn</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+8618767628262</p>
                    </div>
                </div>

                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                <div className="col-lg-6 ">
                    <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4679732687023!2d121.32484131460497!3d28.675644688880205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344e3ecce26df7f1%3A0xc54cd152ef27dbf!2sJiang%20Kou%20Jie%2C%20Huang%20Yan%20Qu%2C%20Tai%20Zhou%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20China%2C%20318030!5e0!3m2!1sen!2sbd!4v1652640783768!5m2!1sen!2sbd" frameborder="0" style={{border:'0', width: '100%', height: '384px',}} allowfullscreen></iframe>
                </div>

                <div className="col-lg-6">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate"></div>
                        </div>
                        <div className="col form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
            </section>
        </div>
    );
};

export default Contact;