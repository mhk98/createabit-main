import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event, price) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
    } else {
      console.log("PaymentMethod", paymentMethod);
    }

    const { paymentIntent, error: confirmCardError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      });

    if (confirmCardError) {
      console.log(confirmCardError);
    }

    console.log(paymentIntent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
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
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        style={{
          padding: "8px 20px",
          marginTop: "15px",
          fontSize: "16px",
          border: "2px solid #430571",
          color: "#430571",
          fontWeight: "800",
          borderRadius: "50px",
        }}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
