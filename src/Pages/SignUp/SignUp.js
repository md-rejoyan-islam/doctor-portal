import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate();
  const {createUser,updateUser} =useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignUp = (data) => {
    createUser(data.email,data.password)
    .then(Result=>{
      toast.success("Successfully login");
      
      const user=Result.user;
      console.log(user);
      const userInfo = {
        displayName: data.name,
      };
      
      updateUser(userInfo)
      .then(()=>{})
      .catch(error=>console.log(error))
      navigate(from, { replace: true });
    })
    .catch(error=>console.log(error))
    
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-[500px] mx-auto shadow-lg p-5 rounded-md border">
        <h2 className="text-center text-lg font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handelSignUp)}>
          <div className="my-2">
            <label>Name</label>
            <input
              {...register("name", {
                required: "name  is required",
              })}
              className="input input-bordered w-full max-full "
              type={"text"}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
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
                { required: "At least 8 digit",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  },
                  message: "password must be strong"
                })}
                

              className="input input-bordered w-full max-full "
              type={"password"}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-zinc-400 w-full"
            value={"Sign UP"}
          />
          <p className="my-2 text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary">
              Log In
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

export default SignUp;
