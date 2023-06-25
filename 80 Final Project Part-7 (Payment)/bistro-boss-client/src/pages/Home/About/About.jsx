import React from "react";
import img from "../../../assets/home/chef-service.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="py-20">
      <div className="About-item p-16 bg-fixed" >
        {/* <img className="bg-fixed bg-[url('../../../assets/home/chef-service.jpg')]" src={img} alt="" /> */}
        <div className="md:px-24 px-5 text-center">
          <div className="bg-white md:px-32 md:py-10 p-5">
            <h2 className="text-3xl py-5">Bistro Boss</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quidem iste deserunt ducimus, vero architecto nesciunt
              nemo laboriosam impedit obcaecati blanditiis nihil voluptas
              corporis autem porro. Totam fugit explicabo, iure neque doloribus,
              a facilis sequi fugiat cumque delectus eligendi rem eaque illo
              velit hic eos unde? Cupiditate necessitatibus sed enim.
            </p>
          </div>
          {/* <div className='bg-white p-10 text-center'>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
