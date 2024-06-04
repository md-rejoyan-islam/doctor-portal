import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import OrDivider from "../../../components/main/OrDivider";
import LoginWithGoogle from "../../../components/main/LoginWithGoogle";
import { userLogin } from "../../../feature/auth/authApiSlice";

const Login = () => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const dispath = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handelLogin = (data) => {
    dispath(
      userLogin({
        fields: {
          ...data,
        },
        reset,
        navigate,
        from,
      })
    );
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-[500px] mx-auto sm:shadow-lg p-5 sm:rounded-lg sm:border">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="my-2">
            <label className="font-semibold pb-1 block">Email</label>
            <input
              {...register("email", {
                required: "Email Address is required!",
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
              {...register(
                "password",
                { required: "Password is required!" },
                { min: 6 }
              )}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0 focus:outline-4"
              type={"password"}
            />
            {errors.password && (
              <p className="text-red-600  text-[14px]">
                {errors.password?.message}
              </p>
            )}
            <span className="text-sm text-red-400 hover:text-red-500 pt-3 hover:underline inline-block">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </span>
          </div>
          <input
            type="submit"
            className="py-2 px-4 rounded-md border-zinc-200 cursor-pointer bg-zinc-100 border  w-full hover:bg-gradient-to-r from-primary to-secondary hover:border-transparent hover:text-white font-semibold text-lg"
            value={"Login"}
          />
          {/* {logInError && <p className="text-red-700">{logInError}</p>} */}
          <p className="my-2 text-center">
            New to Doctors Portal?{" "}
            <Link to={"/register"} className="text-primary hover:underline">
              Create new account
            </Link>
          </p>
        </form>
        <OrDivider />
        <LoginWithGoogle />
      </div>
    </div>
  );
};

export default Login;
