import React from 'react'
import appointment from "../../../assets/images/appointment.png";
import Button from '../../../Components/Button/Button';

const Connect = () => {
    return (
      <div className="pt-6 pb-12" style={{ background: `url(${appointment})` }}>
        <div className="p-4">
          <h1 className="font-bold text-primary text-center">Contact Us</h1>
          <p className="text-white text-center text-xl">Stay Connect with Us</p>
        </div>
        <form className="w-full lg:w-1/3 mx-auto px-10 lg:px-0">
          <div className="my-2">
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered w-full "
            />
          </div>

          <div className="my-2">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full "
            />{" "}
          </div>
          <div className="my-2">
            <textarea className="border rounded-lg w-full" rows={4}></textarea>
          </div>
          <div className="my-4 text-center">
            <Button type="submit">Get Started</Button>
          </div>
        </form>
      </div>
    );
};

export default Connect;