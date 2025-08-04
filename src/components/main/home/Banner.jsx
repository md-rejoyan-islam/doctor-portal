import chair from "../../../assets/images/chair.png";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="relative py-12 sm:py-16 md:py-0">
      <div className="hero grid w-full bg-cover bg-center place-items-center  bannerImage md:py-[100px]">
        <div className="hero-content flex items-center justify-center gap-[16px] p-[16px] max-w-[80rem] flex-col md:flex-row-reverse  text-left">
          <img
            src={chair}
            className="md:w-1/2 rounded-lg shadow-2xl  md:h-[355px] "
            alt=""
          />
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold">Your New Smile Starts Here</h3>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos`s standard dummy
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
