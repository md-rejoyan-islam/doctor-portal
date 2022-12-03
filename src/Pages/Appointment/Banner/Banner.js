import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import chair from '../../../assets/images/chair.png'
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
const Banner = ({selected,setSelected}) => {
  
    return (
      <div className="relative">
        <div className="hero bannerImage md:py-[100px]">
          <div className="hero-content flex-col md:flex-row-reverse ">
            <img
              src={chair}
              className="md:w-1/2 rounded-lg shadow-2xl  md:h-[355px] "
              alt=""
            />
            <div className='md:w-1/2'>
              <div className="shadow-md w-fit p-2">
                <DayPicker
                  mode="single"
                  onSelect={setSelected}
                  
                  className=""
                ></DayPicker>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;<h2>banner</h2>