import React from 'react';

const TopBar = () => {
    return (
        <div>
            <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                <div className="container d-flex">
                <div className="contact-info me-auto">
                    <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">sales@agriequipment.cn</a>
                    <i className="icofont-phone"></i> +8618767628262
                </div>
                <div className="social-links">
                <a href="https://twitter.com/CodeInflect" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://www.youtube.com/" className="google-plus"><i className="bx bxl-youtube"></i></a>
                            <a href="https://www.linkedin.com/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;