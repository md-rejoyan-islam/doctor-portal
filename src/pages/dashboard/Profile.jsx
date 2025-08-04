import { useState } from "react";
import DragAndDropPhoto from "../../components/dashboard/addDoctor/DragAndDropPhoto";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "../../feature/auth/authSlice";
import { updateUserProfile } from "../../feature/auth/authApiSlice";

function Profile() {
  const { user } = useSelector(getAuthData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleProfileUpdate = async (data) => {
    if (file) data.photo = file[0];

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    });

    //    id add
    formData.append("id", user._id);

    dispatch(updateUserProfile(formData));
  };

  return (
    <div className="px-10 py-10 ">
      <div className="w-96 p-7 border shadow-lg rounded-lg mx-auto bg-white">
        <h2 className="text-4xl text-center pb-4">My Profile</h2>
        <form onSubmit={handleSubmit(handleProfileUpdate)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.name}
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required!",
              })}
              readOnly
              defaultValue={user?.email}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              defaultValue={user?.phone}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
              placeholder="Enter you phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="flex gap-2 items-center">
              <label className=" rounded-lg w-full border px-4 py-2 flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user?.gender === "male"}
                  className="w-4 h-4"
                  {...register("gender")}
                />
                Male
              </label>
              <label className=" rounded-lg w-full border px-4 py-2 flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="w-4 h-4"
                  checked={user?.gender === "female"}
                  {...register("gender")}
                />
                <span className="mb-1"> Female</span>
              </label>
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", {})}
              placeholder="Enter your address"
              defaultValue={user?.address}
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div>
            <DragAndDropPhoto setFile={setFile} />
          </div>
          <input
            className="py-2 px-4 rounded-md border-zinc-200 cursor-pointer  border  w-full bg-gradient-to-r from-primary to-secondary border-transparent hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white font-semibold text-lg"
            value="Update Profile"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Profile;
