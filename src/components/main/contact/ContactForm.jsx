import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../../../feature/feedback/feedbackApiSlice";
import { getAuthData } from "../../../feature/auth/authSlice";

function ContactForm() {
  const { user } = useSelector(getAuthData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const handleFeedback = (data) => {
    dispatch(createFeedback({ data, reset }));
  };

  return (
    <form
      className="card-body sm:shadow-2xl  sm:rounded-md "
      onSubmit={handleSubmit(handleFeedback)}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name:</span>
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="input input-bordered"
          {...register("name", {
            required: "Full name is required!",
          })}
        />
        {errors.name && (
          <p className="text-red-600 text-[14px]">{errors.name?.message}</p>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email Address:</span>
        </label>
        <input
          type="email"
          placeholder="Enter your fmail"
          className="input input-bordered"
          {...register("email", {
            required: "Email is required!",
          })}
          defaultValue={user?.email}
          readOnly={user?.email}
        />
        {errors.email && (
          <p className="text-red-600 text-[14px]">{errors.email?.message}</p>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Contact Number:</span>
        </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="input input-bordered"
          {...register("phone", {
            required: "Phone number is required!",
          })}
        />
        {errors.phone && (
          <p className="text-red-600 text-[14px]">{errors.phone?.message}</p>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Comments/Feedback:</span>
        </label>
        <textarea
          className="textarea h-24 textarea-bordered"
          placeholder="Enter your feedback here"
          {...register("message", {
            required: "Message is required!",
          })}
        />
        {errors.message && (
          <p className="text-red-600 text-[14px]">{errors.message?.message}</p>
        )}
      </div>

      <div className="form-control mt-6">
        <button className="btn btn-primary text-white">SUBMIT</button>
      </div>
    </form>
  );
}

export default ContactForm;
