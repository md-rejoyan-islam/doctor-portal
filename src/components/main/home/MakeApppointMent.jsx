import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import Button from "../Button";

const MakeAppointment = () => {
  return (
    <section
      className="rounded-lg my-10 mx-2 sm:mx-0"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row h-fit relative">
          <figure className=" lg:w-1/2 -mt-40 lg:mt-0 lg:h-[388px] relative">
            <img
              src={doctor}
              alt="Doctor"
              className="lg:absolute -bottom-4 xl:-bottom-[48px] max-h-[600px]"
            />
          </figure>
          <div className="lg:w-1/2  xl:p-8">
            <h2 className="font-bold text-primary text-xl">Appointment</h2>
            <h3 className="text-4xl xl:text-5xl font-bold text-white">
              Make an appointment Today
            </h3>
            <p className="py-6 text-[17px] xl:text-lg text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>{"Get Started"}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
