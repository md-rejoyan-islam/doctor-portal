import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState("");
  const { signInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    setLogInError("");
    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Successfully login");
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        setLogInError(error.message);
        console.log(error);
      });
    console.log(data);
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      ,
      <div className="w-[500px] mx-auto shadow-lg p-5 rounded-md border">
        <h2 className="text-center text-lg font-bold">login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="my-2">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-full "
              type={"email"}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="my-2">
            <label>Password</label>
            <input
              {...register(
                "password",
                { required: "password is required" },
                { min: 6 }
              )}
              className="input input-bordered w-full max-full "
              type={"password"}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <span className="text-sm">
              <Link>Forgot Password?</Link>
            </span>
          </div>
          <input
            type="submit"
            className="btn btn-zinc-400 w-full"
            value={"Login"}
          />
          {logInError && <p className="text-red-700">{logInError}</p>}
          <p className="my-2 text-center">
            New to Doctors Portal?{" "}
            <Link to={"/register"} className="text-primary">
              Create new account
            </Link>
          </p>
          
          <div className="divider">OR</div>
          <button className="btn w-full  input-rounded border bg-white text-zinc-500">
            CONTINUE WITH GOOGLE{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
