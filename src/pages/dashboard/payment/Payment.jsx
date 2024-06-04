import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import { getBookingData } from "../../../feature/bookings/bookingSlice";
import { getBookingById } from "../../../feature/bookings/bookingApiSlice";
import { useEffect } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIP_PUBLISHABLE_KEY);
const Payment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { booking } = useSelector(getBookingData);

  useEffect(() => {
    dispatch(getBookingById(id));
  }, [dispatch, id]);

  if (!booking) {
    return "<Loading></Loading>";
  }

  // const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
