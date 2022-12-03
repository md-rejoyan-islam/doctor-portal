import React from 'react'
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"


const Testimonial = () => {
    const testimonials = [
      {
        id: "01",
        details:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          writer:"Winson Herry"
          ,
          location:"California",
          photo:people1
      },
      {
        id: "02",
        details:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          writer:"Winson Herry"
          ,
          location:"California",
          photo:people2
      },
      {
        id: "03",
        details:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          writer:"Winson Herry"
          ,
          location:"California",
          photo:people3
      },
    ];
    return (
      <section className="mb-16 max-w-[1333px] mx-auto">
        <div className="flex justify-between my-6">
          <div className="my-auto">
            <h2 className="text-primary">Testimonial</h2>
            <p className="text-xl">What Our Patient Says</p>
          </div>
          <figure>
            <img src={quote} alt="" className="lg:w-48 w-24" />
          </figure>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div className="shadow-md p-8">
              <p>{testimonial.details}</p>
              <div className="flex py-2">
                <div className="avatar">
                  <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={testimonial.photo} alt="" className="" />
                  </div>
                </div>

                <div>
                  <h1>{testimonial.writer}</h1>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;