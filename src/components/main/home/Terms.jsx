import treatment from "../../../assets/images/treatment.png";
import Button from "../Button";

const Terms = () => {
  return (
    <div className="md:w-3/4 px-4 m-auto mt-24 mb-48">
      <div className="card lg:card-side bg-base-100 ">
        <figure className="lg:w-1/2">
          <img
            src={treatment}
            alt="Album"
            className="lg:h-[576px] w-[458px] lg:w-full rounded-md"
          />
        </figure>
        <div className="card-body lg:w-1/2 justify-center text-center lg:text-left p-0 lg:pl-5">
          <h2 className="card-title text-4xl pt-8 pb-3 md:text-5xl lg:pt-0 ">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="flex-grow-0 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions mx-auto lg:mx-0">
            <Button>{"Get Started"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
