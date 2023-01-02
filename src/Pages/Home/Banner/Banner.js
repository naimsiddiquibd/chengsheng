import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Banner = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            {
                        user?.email ?
                        <section id="hero" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1>Hi <span>{user.displayName}</span>
                        </h1>
                        <h2>Now you are a member of our community. Please place your order!</h2>
                        <div className="d-flex">
                            <a onClick={logout} href="#" className="btn-get-started scrollto">Sign Out</a>
                            <a href="https://www.youtube.com/channel/UCEpx7nbAZmuS7VTxztLcz2A/videos" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
                        </div>
                        </div>
                    </section>
                            :
                            <section id="hero" className="d-flex align-items-center">
                            <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Welcome to <span>Chengsheng</span>
                            </h1>
                            <h2>Agriculture Machinery | Animal husbandry, fishery, planting..</h2>
                            <div className="d-flex">
                                <a href="#services" className="btn-get-started scrollto">Get Started</a>
                                
                            </div>
                            </div>
                        </section>
            }
        </div>
    );
};

export default Banner;