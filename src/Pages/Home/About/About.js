import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>About</h2>
                <h3>Find Out More <span>About Us</span></h3>
                <p>Let's Have A Quick Overview About Chengsheng's Business, Goal, Mission & Vission</p>
                </div>

                <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                    <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <h3>Let's Have A Look On Our Mission & Vision</h3>
                    
                    <ul>
                    <li>
                        <i className="bx bx-store-alt"></i>
                        <div>
                        <h5>Who We Are</h5>
                        <p>TAIZHOU CHENGSHENG IMPORT AND EXPORT TRADE CO.,LTD. is mainly engaged in the import and export of goods.Mainly operating machinery and equipment, daily necessities, hardware products, plastic products, metal materials, mould, plastic processing equipment, animal husbandry and fishery feed, sanitary ware, electrical machinery and equipment, photovoltaic equipment and components etc, especially related to agricultural machinery import and export is given priority to, we work closely with production enterprises formed a long-term relationship.</p>
                        </div>
                    </li>
                    <li>
                        <i className="bx bx-images"></i>
                        <div>
                        <h5>Achieving Client's Satisfaction & Trust</h5>
                        <p>Our products are guaranteed to be brand new and manufactured in strict accordance with the standards. Some products are certified at the same time and must pass strict quality inspection before leaving the factory.In the future, the Belt and Road initiative and the Guangdong-Hong Kong-Macao Greater Bay Area will provide rare opportunities and huge space for the development of import and export trade.

                        </p>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                </div>

            </div>
            </section>
        </div>
    );
};

export default About;