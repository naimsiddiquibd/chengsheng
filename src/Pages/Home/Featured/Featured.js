import React from 'react';

const Featured = () => {
    return (
        <div>
            <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i className="bx bx-hive"></i></div>
                    <h4 className="title"><a href="">Machinery</a></h4>
                    <p className="description">Modern Machinery Service For The Farmers and Everyone Who Want to Plough A Land</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i className="bx bxs-wink-tongue"></i></div>
                    <h4 className="title"><a href="">Husbandry</a></h4>
                    <p className="description">Urgent Husbandry Service To Plough Land And Take Your Business High</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><i className="bx bx-water"></i></div>
                    <h4 className="title"><a href="">Fishery</a></h4>
                    <p className="description">Top-Level Fishery Service With Lates, Modern And Powerfull Technology</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><i className="bx bxs-tree"></i></div>
                    <h4 className="title"><a href="">Planting</a></h4>
                    <p className="description">Outstanding Planting Plan WIth Highly Powerfull Technology To Get A Better Output</p>
                    </div>
                </div>

                </div>

            </div>
            </section>
        </div>
    );
};

export default Featured;