import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const About = () => {
  const {titleChange} = useContext(AuthContext);

  titleChange('About');
    return (
        <section className="py-20  md:p-32 text-justify  text-[#DB2458] max-md:p-3">
          <div className="container mx-auto rounded-md 301755 border-[1px] border-[#DB2458] shadow-md p-12 md:px-24">
            <h2 className="text-5xl font-bold mb-4 text-center py-5 leading-[4rem] text-[#301755]">ABOUT<br />ToY House</h2>
            <p className="text-lg mb-2 ">Welcome to ToY House, your one-stop destination for all things toys! We are passionate about bringing joy to children and creating lasting memories through our wide selection of high-quality toys.</p>
            <hr className='my-5 border-1' />
            <p className="text-lg mb-2">At ToY House, we believe in the power of play and its ability to inspire imagination, promote learning, and foster creativity. Our carefully curated collection of toys caters to children of all ages, ensuring there's something for everyone.</p>
            <hr className='my-5 border-1' />
            <p className="text-lg mb-2">With a commitment to exceptional customer service, we strive to provide a seamless shopping experience. Our team is dedicated to helping you find the perfect toy for your child, whether it's for a birthday, holiday, or any special occasion.</p>
            <hr className='my-5 border-1' />
            <p className="text-lg mb-2">Explore our website and discover a world of fun and excitement. Join us on this journey of bringing smiles to children's faces and creating unforgettable playtime moments. Shop at ToY House today!</p>
          </div>
        </section>
      );
};

export default About;