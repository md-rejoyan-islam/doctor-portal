import { useForm } from "react-hook-form";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //
  const handelLogin = () => {};

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-[500px] mx-auto sm:shadow-lg p-5 sm:rounded-lg sm:border">
        <h2 className="text-center text-2xl font-bold">Search by Email</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="my-2">
            <label className="font-semibold pb-1 block">Email</label>
            <input
              {...register("email", {
                required: "Email Address is required!",
              })}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
              type={"email"}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-600 text-[14px]">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="my-4">
            <input
              type="submit"
              className="py-2 px-4 rounded-md  cursor-pointer   w-full bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary  text-white font-semibold text-lg"
              value={"SEARCH"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
