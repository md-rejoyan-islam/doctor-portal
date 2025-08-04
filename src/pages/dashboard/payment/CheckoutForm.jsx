import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentData } from "../../../feature/payment/paymentSlice";
import {
  createPayment,
  createPaymentIntent,
} from "../../../feature/payment/paymentApiSlice";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { client_secret: clientSecret } = useSelector(getPaymentData);
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };

      const response = await dispatch(createPayment(payment));

      if (response?.payload?.success) {
        setSuccess("Congrats! your payment completed");
        setTransactionId(paymentIntent.id);
      }

      // store payment info in the database
    }
    setProcessing(false);
  };

  useEffect(() => {
    dispatch(createPaymentIntent(booking));
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit} onChange={() => {}}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={() => {
            setCardError("");
            setProcessing(false);
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
