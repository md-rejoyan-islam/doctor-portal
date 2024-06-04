import appointment from "../../../assets/images/appointment.png";
import Button from "../Button";

const Connect = () => {
  return (
    <div
      className="pt-6 pb-12 my-10 rounded-md mx-2 sm:mx-0"
      style={{ background: `url(${appointment})` }}
    >
      <div className="p-4">
        <h2 className="font-bold text-xl text-primary text-center">
          Contact Us
        </h2>
        <p className="text-white text-center text-lg">Stay Connect with Us</p>
      </div>
      <form className="w-full max-w-[620px] lg:w-[480px] mx-auto px-4 sm:px-10 lg:px-0">
        <div className="my-3">
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered w-full "
          />
        </div>

        <div className="my-3">
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full "
          />{" "}
        </div>
        <div className="my-3">
          <textarea className="border rounded-lg w-full" rows={4}></textarea>
        </div>
        <div className="my-4 text-center w-full">
          <input
            type="submit"
            className="py-3 px-4 rounded-md cursor-pointer  border-none text-white  w-full bg-gradient-to-r from-primary to-secondary hover:border-transparent  font-semibold text-lg"
            value={"Get Started"}
          />
        </div>
      </form>
    </div>
  );
};

export default Connect;
