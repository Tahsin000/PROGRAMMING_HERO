import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Recommends from '../recommends/recommends';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <About />
            <PopularMenu />
            <Contact />
            <Recommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;