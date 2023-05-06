import React from 'react';

const About = () => {
    return (

        <section id='aboutSection' style={{backgroundImage:"url('./about.png')", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='bg-[#fbfff0] md:h-screen p-5' > 
        {/* bg-[#727762]  */}
            <div className="container mx-auto h-full my-12">
                <div className='flex flex-col justify-center text-white h-full gap-2'>
                        <p className='text-4xl md:text-7xl font-bold text-center' data-aos="fade-up" data-aos-duration="300">ABOUT</p>
                        <p className='md:text-lg text-justify md:mt-[5rem] mt-[2rem]' data-aos="fade-up" data-aos-duration="500">    
                            Where we believe that great food should be enjoyed in a relaxed and welcoming atmosphere. Our menu features a delicious selection of dishes made with only the freshest and highest quality ingredients, sourced from local farms and producers whenever possible. From classic favorites to exciting new creations, there's something for everyone to enjoy. <br />
                            At HHJN_restaurant, we pride ourselves on providing exceptional service to our guests. Our knowledgeable and friendly staff are here to make your dining experience memorable and enjoyable, whether you're joining us for a romantic date night or a casual meal with friends. <br /> 
                            We invite you to join us for lunch or dinner, or to stop by for our popular weekend brunch. We look 
                        </p>
                </div>
            </div>
        </section>
    );
};

export default About;