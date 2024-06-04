import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import OrDivider from "../../../components/main/OrDivider";
import LoginWithGoogle from "../../../components/main/LoginWithGoogle";
import { userRegister } from "../../../feature/auth/authApiSlice";
import { useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handelSignUp = (data) => {
    setLoading(true);
    dispatch(
      userRegister({
        fields: {
          provider: "own",
          ...data,
        },
        reset,
        navigate,
        from,
        setLoading,
      })
    );
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-[500px] mx-auto sm:shadow-lg p-5 sm:rounded-lg sm:border">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handelSignUp)}>
          <div className="my-2">
            <label className="font-semibold pb-1 block">Name</label>
            <input
              {...register("name", {
                required: "name  is required",
              })}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
              type={"text"}
            />
            {errors.name && (
              <p className="text-red-600 text-[14px]">{errors.name?.message}</p>
            )}
          </div>
          <div className="my-2">
            <label className="font-semibold pb-1 block">Email</label>
            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
              type={"email"}
            />
            {errors.email && (
              <p className="text-red-600 text-[14px]">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="my-2">
            <label className="font-semibold pb-1 block">Password</label>
            <input
              {...register("password", {
                required: "Password is required!",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "password must be  at least one uppercasse, one lowercase, one special charecter and number",
                },
                minLength: {
                  value: 8,
                  message: "At least 8 digit",
                },
              })}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
              type={"password"}
            />
            {errors.password && (
              <p className="text-red-600 text-[14px]">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="py-2 px-4 rounded-md border-zinc-200 cursor-pointer bg-zinc-100 border  w-full hover:bg-gradient-to-r from-primary to-secondary hover:border-transparent hover:text-white font-semibold text-lg"
            value={loading ? "loading" : "Sign Up"}
          />
          <p className="my-2 text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary hover:underline">
              Log In
            </Link>
          </p>

          <OrDivider />
          <LoginWithGoogle />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
