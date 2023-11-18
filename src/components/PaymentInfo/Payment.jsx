import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L1rVDH0VF27tpW3LEs6Z66fVvzRIoh08xSbY4zSyiG03Q2pwNVzhq8JoYv4s4xF4zwObI3gLNUjus6dFj0ltrvr00m17agrob"
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
