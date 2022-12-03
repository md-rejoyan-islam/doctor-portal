import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../../Components/Button/Button';


const Terms = () => {
    return (
      <div className="w-3/4 m-auto mt-24 mb-48">
        <div className="card lg:card-side bg-base-100 ">
          <figure className="lg:w-1/2">
            <img
              src={treatment}
              alt="Album"
              className="h-[576px] w-[458px] rounded-md"
            />
          </figure>
          <div className="card-body lg:w-1/2 justify-center">
            <h1 className="card-title text-5xl">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="flex-grow-0 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="card-actions">
              <Button>{"Get Started"}</Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Terms;