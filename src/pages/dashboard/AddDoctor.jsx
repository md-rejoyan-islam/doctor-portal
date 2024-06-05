import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAppointmentsData } from "../../feature/appointment/appointmentSlice";
import { useState } from "react";
import { createDoctor } from "../../feature/doctor/doctorApiSlice";
import DragAndDropPhoto from "../../components/dashboard/addDoctor/DragAndDropPhoto";
// import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const { appointments: specialties, loading: isLoading } = useSelector(
    getAllAppointmentsData
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleAddDoctor = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("specialty", data.specialty);

    formData.append("photo", file[0]);
    formData.append("degree", data.degree);

    const response = await dispatch(createDoctor(formData));
    if (response?.payload?.success) {
      navigate("/dashboard/managedoctors");
      reset();
    }
  };

  if (isLoading) {
    return "<Loading></Loading>;";
  }

  return (
    <div className="px-10 py-10 ">
      <div className="w-96 p-7 border shadow-lg rounded-lg mx-auto bg-white">
        <h2 className="text-4xl text-center pb-4">Add A Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              placeholder="Enter doctor name"
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
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
              placeholder="Enter doctor email "
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            <input
              type="text"
              {...register("degree", {
                required: "Degree is required!",
              })}
              placeholder="Enter doctor degree "
              className="input input-bordered w-full max-full focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            />
            {errors.degree && (
              <p className="text-red-500">{errors.degree.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select input-bordered w-full max-w-xs focus:border-transparent focus:outline-[#7ef0ff74] focus:outline-offset-0  focus:outline-4"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <DragAndDropPhoto setFile={setFile} />
          </div>
          <input
            className="py-2 px-4 rounded-md border-zinc-200 cursor-pointer  border  w-full bg-gradient-to-r from-primary to-secondary border-transparent hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white font-semibold text-lg"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddDoctor;
