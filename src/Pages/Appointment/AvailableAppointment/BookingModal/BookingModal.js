import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";
const BookingModal = ({ treatment, selected, setTreatment,refetch }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTreatment(null);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const booking = {
      appointmentDate: data.date,
      treatment: treatment.name,
      patient: user.displayName,
      slot: data.slot,
      email: user.email,
      phone: data.phone,
    };
    fetch("http://localhost:5005/bookingCollection", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          refetch()
        }
        console.log(data);
      });
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
                  treatment.slot.map((slot, index) => (
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
                value={user?.displayName}
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered my-2  w-full"
                name="phone"
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

export default BookingModal;
