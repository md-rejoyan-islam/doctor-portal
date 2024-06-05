import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBookingData } from "../../feature/bookings/bookingSlice";

const MyAppointment = () => {
  const { bookings } = useSelector(getBookingData);

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-3xl mb-4  text-center">My Appointments</h3>
      <div className="overflow-x-auto pb-4">
        <table className="table w-full ">
          <thead className="bg-[#d4f6fc88] rounded-md">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id} className="hover:bg-slate-100">
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
