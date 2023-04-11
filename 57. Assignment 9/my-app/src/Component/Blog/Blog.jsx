import React from 'react';

const Blog = () => {
    return (
        <div>
             <div className="bg-[#faf8ff] w-100 px-7 pt-5 h-[15rem] bg-img">
                <div className='container mx-auto my-7'>
                    <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>Blog</h2>
                </div>
            </div>
             <div className="w-100 px-7 pt-5 grid md:grid-cols-1 md:gap-20">
                <div data-aos="fade-up" data-aos-duration="1000" className='container mx-auto my-7'>
                    <h2  className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>  
                    When the Context API is used?
                    </h2>
                    <p className='text-justify'>The Context API in React is used when there is a need to <span className='text-[#f32558] font-[800]'>share data</span> between <span className='text-[#f32558] font-[800]'>multiple components</span> in a component tree, <span className='text-[#f32558] font-[800]'>without the need to pass props</span> manually down the tree. It provides a way to <span className='text-[#f32558] font-[800]'>pass data</span> through the component tree without having to pass props down manually at every level.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='container mx-auto my-7'>
                    <h2 className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>  
                    What is custom hooks?
                    </h2>
                    <p  className='text-justify'>Custom hooks are functions in React that enable you to reuse <span className='text-[#f32558] font-[800]'>stateful</span> logic across different components. They allow you to extract logic from a component into a <span className='text-[#f32558] font-[800]'>reusable function that can be used in other components.</span></p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='container mx-auto my-7'>
                    <h2 className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>  
                    What is useRef Hook?
                    </h2>
                    <p  className='text-justify'>useRef is a <span className='text-[#f32558] font-[800]'>built-in hook </span> in React that provides a way to <span className='text-[#f32558] font-[800]'>access DOM nodes</span> or <span className='text-[#f32558] font-[800]'>store mutable</span> values between renders in a functional component.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='container mx-auto my-7'>
                    <h2 className='text-[#1A1919] text-center font-[800] md:text-[2rem]'>  
                    What is useMemo?
                    </h2>
                    <p  className='text-justify'>useMemo is a <span className='text-[#f32558] font-[800]'>React Hook</span> that is used to <span className='text-[#f32558] font-[800]'>optimize performance</span> by caching the results of a function call and returning the cached value on <span className='text-[#f32558] font-[800]'>subsequent renders</span>, as long as its dependencies have <span className='text-[#f32558] font-[800]'>not changed.</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;