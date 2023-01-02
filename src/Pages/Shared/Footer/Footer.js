import React from 'react';

const Footer = () => {
    return (
        <div>
                <footer id="footer">

                    <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Simply type your email and subscribe to our Newsletter</p>
                            <form action="" method="post">
                            <input type="email" name="email"/>
                            <input type="submit" placeholder='Subscribe'/>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="footer-top">
                    <div className="container">
                        <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Chengsheng<span>.</span></h3>
                            <p>
                            No. 88, Zone 1, Shangshanlang Village, <br/>
                            JiangKou Street, Huangyan District,  <br/>
                            Taizhou City, Zheiiang Province, China <br/><br/>
                            <strong>Phone:</strong> +8618767628262<br/>
                            <strong>Email:</strong> sales@agriequipment.cn<br/>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#about">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#services">Products</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#services">Machine</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#services">Fishery Machinery</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a className="btn-get-started scrollto" href="#services">Cultivation</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Follow Us And Get Notified When We Share Something Special For You</p>
                            <div className="social-links mt-3">
                            <a href="https://twitter.com/" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://www.youtube.com/" className="google-plus"><i className="bx bxl-youtube"></i></a>
                            <a href="https://www.linkedin.com/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Chengsheng</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="">Codeinflect Development Team</a>
                    </div>
                    </div>
                    </footer>

        </div>
        
    );
};

export default Footer;