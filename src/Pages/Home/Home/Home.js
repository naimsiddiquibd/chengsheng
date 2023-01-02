import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBar from '../../Shared/TopBar/TopBar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Counts from '../Counts/Counts';
import Featured from '../Featured/Featured';
import Portfolio from '../Portfolio/Portfolio';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
         
           
            <Services></Services>
            <Portfolio></Portfolio>
         
            <Team></Team>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;