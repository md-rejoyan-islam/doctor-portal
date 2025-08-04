import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: "01",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      writer: "Winson Herry",
      location: "California",
      photo: people1,
    },
    {
      id: "02",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      writer: "Winson Herry",
      location: "California",
      photo: people2,
    },
    {
      id: "03",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      writer: "Winson Herry",
      location: "California",
      photo: people3,
    },
  ];
  return (
    <section className="mb-16 max-w-[1333px] mx-auto py-10 px-4 sm:px-0">
      <div className="flex justify-between my-6">
        <div className="my-auto">
          <h2 className="text-primary text-xl font-semibold">Testimonial</h2>
          <p className="text-xl">What Our Patient Says</p>
        </div>
        <figure>
          <img src={quote} alt="" className="lg:w-48 w-24" />
        </figure>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            className="shadow-md rounded-md  p-8 border border-zinc-100 hover:border-sky-100 hover:shadow-sky-100"
            key={index}
          >
            <p>{testimonial.details}</p>
            <div className="flex py-2 items-center">
              <div className="avatar">
                <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={testimonial.photo} alt="" className="" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm">{testimonial.writer}</h3>
                <p className="text-[12px]">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
