import { formatDate } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayments } from "../../feature/payment/paymentApiSlice";
import { getPaymentData } from "../../feature/payment/paymentSlice";
import { getAuthData } from "../../feature/auth/authSlice";

function MyPayment() {
  const { payments } = useSelector(getPaymentData);
  const { user } = useSelector(getAuthData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPayments({ email: user.email }));
  }, [dispatch, user.email]);

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-3xl mb-4  text-center">My Payments</h3>
      <div className="overflow-x-auto pb-4">
        <table className="table w-full ">
          <thead className="bg-[#d4f6fc88] rounded-md">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Booking Id</th>
              <th>Price</th>
              <th>transaction Id</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments?.map((payment, i) => (
                <tr key={payment._id} className="hover:bg-slate-100">
                  <th>{i + 1}</th>
                  <td>{payment?.email}</td>
                  <td>{payment?.bookingId}</td>
                  <td>{payment?.price}</td>
                  <td>{payment?.transactionId}</td>
                  <td>{formatDate(payment?.createdAt, "PP")}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPayment;
