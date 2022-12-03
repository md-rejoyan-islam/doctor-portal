import React from 'react';
import chair from "../../../assets/images/chair.png";
import Button from '../../../Components/Button/Button';
import './Banner.css'
const Banner = () => {
    return (
      <div className="relative">
        <div className="hero bannerImage md:py-[100px]">
          <div className="hero-content flex-col md:flex-row-reverse ">
            <img
              src={chair}
              className="md:w-1/2 rounded-lg shadow-2xl  md:h-[355px] "
              alt=""
            />
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold">Your New Smile Starts Here</h3>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <Button>{"Get Started"}</Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;