import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const services = [
        {
            id: 1,
            title: 'Machine',
            description: 'Effective And Powerfull Machine Support With The Best Solution',
        },
        {
            id: 2,
            title: 'Fishery Machinery',
            description: 'High-Quality And On-Demand Fishery Machinery Suuport All Time',
        },
        {
            id: 2,
            title: 'Cultivation',
            description: 'Outstanding Cultivation Support With High-Quality Service',
        },
    ]


    return (
        <div>
            <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <h3>Check our <span>Services</span></h3>
                <p>Check Out The Best Providing Services And Place Your Order Today</p>
                </div>

                <div className="row">

                

                {
                    services.map(service => 
                        <div className="mb-4 col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bxl-unsplash"></i></div>
                    <h4><a href="">{service.title}</a></h4>
                    <p>{service.description}</p>
                            </div>
                        </div>)
                }

                </div>

            </div>
            </section>
        </div>
    );
};

export default Services;