import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Category from '../Category/Category';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

const Home = () => {
    const [products, setProducts] = useState();
    const {titleChange} = useContext(AuthContext);

    titleChange('Home');

    useEffect(() => {
        AOS.init(); // Initialize AOS library
      }, []);
      
    useEffect(()=>{
        fetch(`https://toy-house-ten.vercel.app/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Hero />
            <Gallery />
            <Category  products={products}/>
            <SpecialOffers />
            <FeaturedBrands />
        </div>
    );
};

export default Home;