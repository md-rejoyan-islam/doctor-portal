import { format } from "date-fns";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../../feature/bookings/bookingApiSlice";
import toast from "react-hot-toast";
import { getAuthData } from "../../../feature/auth/authSlice";
const BookingModal = ({ treatment, selected, setTreatment }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(getAuthData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.phone) return toast.error("Phone number is required");

    // create booking
    const booking = {
      appointment: treatment._id,
      appointmentDate: data.date,
      selectedDate: format(new Date(), "PP"),
      treatment: treatment.name,
      patient: "6659e851cd4ac4124f8dfed9",
      patientName: user?.name,
      slot: data?.slot,
      email: user?.email,
      phone: data?.phone,
      price: treatment.price,
    };

    dispatch(createBooking({ booking }));
    setTreatment(null);
    // modal close
    document.getElementById("booking-modal").checked = false;
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      {treatment && (
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-5 -mt-2">
              {treatment && treatment.name}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                readOnly
                className="input input-bordered w-full my-2 "
                name="date"
                value={format(selected, "PP")}
              />

              <select
                className="input input-bordered  my-2  w-full"
                name="slot"
              >
                {treatment &&
                  treatment.slots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                readOnly
                placeholder="Full Name"
                className="input input-bordered my-2  w-full"
                name="full-name"
                value={user?.name}
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered my-2  w-full"
                name="phone"
                value={user?.phone}
              />

              <input
                type="text"
                placeholder="Email"
                name="email"
                readOnly
                value={user?.email}
                className="input input-bordered my-2  w-full"
              />

              <input
                type="submit"
                value="SUBMIT"
                className="btn btn-primary bg-neutral text-white border-0 my-6 w-full"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

BookingModal.propTypes = {
  treatment: PropTypes.object,
  selected: PropTypes.object,
  setTreatment: PropTypes.func,
  refetch: PropTypes.func,
};

export default BookingModal;
