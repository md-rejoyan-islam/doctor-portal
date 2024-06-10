import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className=" h-[calc(100vh-4px)] bg-[#f4f7fc] flex justify-center items-center ">
      <div className=" mx-auto px-5 py-20">
        <div>
          <h2 className="text-6xl sm:text-8xl md:text-9xl text-center font-bold text-zinc-800">
            Oops!
          </h2>
          <p className="text-red-500 pt-6 pb-2 text-center text-2xl font-semibold">
            Something went wrong!!!
          </p>
          <p className="text-red-400 text-center text-xl ">
            {error.statusText || error.message}
          </p>
          <div className="text-center pt-3">
            <Link
              to={"/"}
              className="bg-sky-400 text-sm sm:text-base hover:bg-sky-500  px-4 py-2 rounded-md  uppercase"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
