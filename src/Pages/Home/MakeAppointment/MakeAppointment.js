import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import bg from "../../../assets/images/bg.png";
import Button from '../../../Components/Button/Button';

const MakeAppointment = () => {
    return (
      <section
        className="rounded-lg "
        style={{ background: `url(${appointment})` }}
      >
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src={doctor}
              alt=""
              className="-mt-40 rounded-lg lg:w-1/2 -mb-4"
            />
            <div className="lg:w-1/2">
              <h4 className="font-bold text-primary">Appointment</h4>
              <h1 className="text-5xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p className="py-6 text-lg text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Button>{"Get Started"}</Button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAppointment;